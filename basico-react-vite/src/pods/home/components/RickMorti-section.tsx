import { Link as routerLink } from "react-router-dom";
import { Avatar, Link, Typography } from "@mui/material";

import { routes } from "@/core";

import RM_logo from "@/pods/home/assets/images/R&M_logo.png";

const handleOncClic = () => {
  localStorage.clear();
};

export const RickMortiSection = () => {
  return (
    <>
      <Link
        underline="none"
        component={routerLink}
        onClick={handleOncClic}
        to={routes.rm_list}
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
        <Typography sx={{ color: "white", fontSize: "24px", margin: "1rem" }}>
          Rick & Morty
        </Typography>
        <Avatar sx={{ width: 100, height: 100 }} alt="Github avatar" src={RM_logo} />
        <Typography sx={{ color: "white", textAlign: "center", margin: "1rem" }}>
          Explore el mundo y los personajes de la serie Rick & Morty
        </Typography>
      </Link>
    </>
  );
};
