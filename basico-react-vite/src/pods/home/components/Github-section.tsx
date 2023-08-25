import { Link as routerLink } from "react-router-dom";

import { Avatar, Link, Typography } from "@mui/material";

import { routes } from "@/core";

import githubLogo from "@/pods/home/assets/images/Github_logo.png";

const handleOncClic = () => {
  localStorage.clear();
};

export const GithubSection = () => {
  return (
    <>
      <Link
        underline="none"
        component={routerLink}
        onClick={handleOncClic}
        to={routes.list}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          width: 250,
          height: 250,
          padding: "10px",
          boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
          backgroundColor: "primary.light",
          "&:hover": {
            backgroundColor: "primary.main",
            cursor: "pointer",
          },
        }}
      >
        <Typography sx={{ color: "white", fontSize: "24px", margin: "1rem" }}>Github</Typography>
        <Avatar sx={{ width: 100, height: 100 }} alt="Github avatar" src={githubLogo} />
        <Typography sx={{ color: "white", textAlign: "center", margin: "1rem" }}>
          Busque una organización y sus miembros en la BBDD de Github
        </Typography>
      </Link>
    </>
  );
};
