import React from "react";

import { CharContainer } from "./RM-character-list";
import { CharacterVM } from "./RM-character-list/Char.vm";

interface Props {
  characterListSliced: CharacterVM[];
  alignment: string;
}

export const RmListComponent: React.FC<Props> = (props) => {
  const { characterListSliced, alignment } = props;

  return (
    <>
      <React.Fragment>
        {(alignment === "character") && (
          <CharContainer characterListSliced={characterListSliced} />
        )}
      </React.Fragment>
    </>
  );
};
