import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Divider, Link } from "@mui/material";

import { EpisodeVM, LocHeaderList } from "@/pods";
import { routes } from "@/core";

export const EpisodeComponent: React.FC<{ episodeListSliced: EpisodeVM[] }> = (props) => {
  const { episodeListSliced: episodeListSliced } = props;

  return (
    <>
      <LocHeaderList />

      {episodeListSliced.map((episode) => (
        <React.Fragment key={episode.id}>
          <Link
            component={RouterLink}
            to={routes.rm_ep_detail(episode.id.toString())}
            sx={{
              borderRadius: "8px",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            <div className="header-list detail-link">
              <span className="span-loc-name"> {episode.name} </span>
              <span> {episode.episode} </span>
              <span> {episode.air_date} </span>
            </div>
          </Link>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};
