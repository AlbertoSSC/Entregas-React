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
  characterListSliced: CharacterVM[];
  locationListSliced: LocationVM[];
  episodeListSliced: EpisodeVM[];
  alignment: string;
}

export const RMListComponent: React.FC<Props> = (props) => {
  const { characterListSliced, locationListSliced, episodeListSliced, alignment } = props;

  return (
    <>
      <React.Fragment>
        {alignment === "character" && <CharContainer characterListSliced={characterListSliced} />}
        {alignment === "location" && <LocationContainer locationListSliced={locationListSliced} />}
        {alignment === "episode" && <EpisodeContainer episodeListSliced={episodeListSliced} />}
      </React.Fragment>
    </>
  );
};
