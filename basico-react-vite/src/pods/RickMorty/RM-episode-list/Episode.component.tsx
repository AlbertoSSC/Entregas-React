import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Divider, Link } from "@mui/material";

import { ItemsListSlicedContext, LocHeaderList } from "@/pods";
import { routes } from "@/core";

export const EpisodeComponent: React.FC = () => {
  const itemsListSliced = React.useContext(ItemsListSlicedContext);

  return (
    <>
      <LocHeaderList />

      {itemsListSliced.map((episode) => (
        <React.Fragment key={episode.id}>
          <Link
            component={RouterLink}
            to={routes.rm_ep_detail(episode.id.toString())}
            sx={{
              display: "inline-grid",
              height: "80px",
              borderRadius: "8px",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            <div className="header-list item-detail-link">
              <span className="span-list-item"> {episode.name} </span>
              <span className="span-list-item"> {episode.episode} </span>
              <span> {episode.air_date} </span>
            </div>
          </Link>
          <Divider sx={{ width: "80%" }} />
        </React.Fragment>
      ))}
    </>
  );
};
