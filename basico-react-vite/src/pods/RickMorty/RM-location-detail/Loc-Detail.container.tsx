import React from "react";

import { useParams } from "react-router-dom";

import {
  LocDetailComponent,
  getCharacter,
  getLocation,
  CharacterEntity,
  LocationEntity,
} from "@/pods";

export const LocationDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [locDetail, setLocDetail] = React.useState<LocationEntity>();
  const [residentData, setResidentData] = React.useState<CharacterEntity[]>([]);

  React.useEffect(() => {
    if (locDetail && locDetail.residents) {
      const getResidentData = async () => {
        let residentDataDetail = [];
        await Promise.all(
          locDetail.residents.map(async (resident) => {
            const residentSplit = resident.split("/");
            const residentId = residentSplit[residentSplit.length - 1];

            const fetchResidentData = await getCharacter(residentId);
            residentDataDetail.push(fetchResidentData);
          })
        );
        setResidentData(residentDataDetail);
      };
      getResidentData();
    }
  }, [locDetail]);

  React.useEffect(() => {
    getLocation(id).then(setLocDetail);
  }, [id]);

  return !locDetail || !residentData ? (
    <h4>Cargando...</h4>
  ) : (
    <LocDetailComponent locDetailVM={locDetail} residentData={residentData} />
  );
};
