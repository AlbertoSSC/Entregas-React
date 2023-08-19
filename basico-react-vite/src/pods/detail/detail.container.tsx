import React from "react";
import { useParams } from "react-router-dom";

import { MemberDetailEntity } from "./detail.vm";
import { DetailComponent } from "./detail.component";

export const DetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = React.useState<MemberDetailEntity>();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${id}`);
        if (!response.ok) {
          throw new Error(
            "No se pudo obtener la información de los miembros:  " + response.statusText
          );
        }
        const data = await response.json();
        if (data) {
          setMember(data);
        } else {
          throw new Error("No se encontrón miembros con ese id: " + id);
        }
      } catch (error) {
        console.log(error);
        setMember(undefined);
      }
    };
    fetchData();
  }, [id]);

  if (!member) {
    return <h3>Cargando...</h3>;
  }
  return (
    <>
      <DetailComponent member={member} />
    </>
  );
};
