import React from "react";

import {
  CharacterVM,
  CharContainer,
  EpisodeContainer,
  EpisodeVM,
  LocationContainer,
  LocationVM,
} from "@/pods";

interface Props {
  itemsListSliced: CharacterVM[] | LocationVM[] | EpisodeVM[];
  alignment: string;
}

export const RMListComponent: React.FC<Props> = (props) => {
  const { itemsListSliced, alignment } = props;

  return (
    <>
      <React.Fragment>
        {alignment === "character" && (
          <CharContainer characterListSliced={itemsListSliced as CharacterVM[]} />
        )}
        {alignment === "location" && (
          <LocationContainer locationListSliced={itemsListSliced as LocationVM[]} />
        )}
        {alignment === "episode" && (
          <EpisodeContainer episodeListSliced={itemsListSliced as EpisodeVM[]} />
        )}
      </React.Fragment>
    </>
  );
};
