import React from "react";

import { routes } from "@/core";
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
