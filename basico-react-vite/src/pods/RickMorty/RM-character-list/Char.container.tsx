import React from "react";

import { CharacterVM, CharComponent } from "@/pods";

export const CharContainer: React.FC<{ characterListSliced: CharacterVM[] }> = (props) => {
  const { characterListSliced } = props;

  return !characterListSliced ? (
    <h4>Loading...</h4>
  ) : (
    <CharComponent characterListSliced={characterListSliced} />
  );
};
