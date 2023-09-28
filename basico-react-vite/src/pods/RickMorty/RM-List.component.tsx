import React from "react";

import { CharContainer, EpisodeContainer, LocationContainer } from "@/pods";

interface Props {
  alignment: string;
}

export const RMListComponent: React.FC<Props> = (props) => {
  const { alignment } = props;

  return (
    <React.Fragment>
      {alignment === "character" && <CharContainer />}
      {alignment === "location" && <LocationContainer />}
      {alignment === "episode" && <EpisodeContainer />}
    </React.Fragment>
  );
};
