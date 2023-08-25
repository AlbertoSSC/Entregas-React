import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

import { routes } from "@/core";
import { blueGrey } from "@mui/material/colors";
import { CustomLink } from "./Header-Custom-Link";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="layout-app-container">
      <div className="layout-app-nav">
        <CustomLink to={routes.root}>Home</CustomLink>
        <CustomLink to={routes.list}>Github</CustomLink>
        <CustomLink to={routes.rm_list}>Rick&Morty</CustomLink>
      </div>
      {children}
    </div>
  );
};
