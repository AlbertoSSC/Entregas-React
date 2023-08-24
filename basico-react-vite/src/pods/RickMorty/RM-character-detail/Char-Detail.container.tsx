import React from "react";
import { useParams } from "react-router-dom";

import { CharDetailComponent, CharDetailVM, getCharacter } from "@/pods";

export const CharDetailContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [charDetail, setCharDetail] = React.useState<CharDetailVM>(null);

  React.useEffect(() => {
    getCharacter(id).then(setCharDetail);
  }, [id]);

  return !charDetail ? <h4>Cargando...</h4> : <CharDetailComponent charDetailVM={charDetail} />;
};
