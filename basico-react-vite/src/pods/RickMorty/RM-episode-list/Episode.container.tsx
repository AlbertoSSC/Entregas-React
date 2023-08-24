import React from "react";
import { EpisodeComponent, EpisodeVM } from "@/pods";

export const EpisodeContainer: React.FC<{ episodeListSliced: EpisodeVM[] }> = (props) => {
  const { episodeListSliced } = props;

  return !episodeListSliced ? (
    <h4>Loading...</h4>
  ) : (
    <>
      <EpisodeComponent episodeListSliced={episodeListSliced} />
    </>
  );
};
