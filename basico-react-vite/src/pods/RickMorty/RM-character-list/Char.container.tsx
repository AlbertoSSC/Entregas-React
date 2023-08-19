import React from "react";

import { CharComponent } from "./Char.component";
import { CharacterVM } from "./Char.vm";

export const CharContainer: React.FC<{ characterListSliced: CharacterVM[] }> = (props) => {
  const { characterListSliced } = props;

  return (
    <>
      {!characterListSliced ? (
        <p>Loading...</p>
      ) : (
        <CharComponent characterListSliced={characterListSliced} />
      )}
    </>
  );
};
