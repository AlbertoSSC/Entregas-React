import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Divider, Link } from "@mui/material";

import { ItemsListSlicedContext, LocHeaderList } from "@/pods";
import { routes } from "@/core";

export const LocationComponent: React.FC = () => {
  const itemsListSliced = React.useContext(ItemsListSlicedContext);

  return (
    <>
      <LocHeaderList />

      {itemsListSliced.map((location) => (
        <React.Fragment key={location.id}>
          <Link
            component={RouterLink}
            to={routes.rm_loc_detail(location.id.toString())}
            sx={{
              borderRadius: "8px",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            <div className="header-list detail-link">
              <span className="span-loc-name"> {location.name} </span>
              <span> {location.type} </span>
              <span> {location.dimension} </span>
            </div>
          </Link>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};
