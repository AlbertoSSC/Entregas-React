import React from "react";
import { useParams } from "react-router-dom";

import { CharDetailComponent } from "./Char-Detail.component";
import { getCharacter } from "../api";

export const CharDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [charDetail, setCharDetail] = React.useState<CharDetailVM>(null);

  React.useEffect(() => {
    getCharacter(id).then(setCharDetail);
  }, [id]);

  if (!charDetail) {
    return <h3>Cargando...</h3>;
  }

  return (
    <>
      <CharDetailComponent charDetailVM={charDetail} />
    </>
  );
};
