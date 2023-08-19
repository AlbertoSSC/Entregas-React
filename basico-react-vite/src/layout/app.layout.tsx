import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

import { switchRoutes } from "@/core/router/routes";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="layout-app-container">
      <div className="layout-app-nav">
        <Link underline="none" component={RouterLink} to={switchRoutes.root}
        sx={{display:"flex", justifyContent:"center", width:"120px"}}>
          Home
        </Link>
        <Link underline="none" component={RouterLink} to={switchRoutes.list}
        sx={{display:"flex", justifyContent:"center", width:"120px"}}>
          Github
        </Link>
        <Link underline="none" component={RouterLink} to={switchRoutes.rm_list}
        sx={{display:"flex", justifyContent:"center", width:"120px"}}>
          Rick&Morty
        </Link>
      </div>
      {children}
    </div>
  );
};
