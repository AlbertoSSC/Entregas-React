import React from "react";

import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import GithubLogo from "../assets/images/Github_logo.png";
import RMLogo from "../assets/images/R&M_logo.png";

export const cards = [
  {
    title: "GitHub",
    copy: "Busque una organización y sus miembros en la BBDD de Github",
    route: "/list",
    bg_img: GithubLogo,
  },
  {
    title: "Rick&Morty",
    copy: "Explore el mundo y los personajes de la serie Rick & Morty",
    route: "/rm_list",
    bg_img: RMLogo,
  },
];

interface CardProps {
  title: string;
  copy: string;
  route: string;
  bg_img: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, copy, route, bg_img } = props;

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundBlendMode: "color",
      }}
    >
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <Button
          variant="contained"
          component={RouterLink}
          className="btn"
          to={route}
          sx={{
            backgroundColor: "#fff",
            color: "rgb(87, 87, 87)",
            "&:hover": { backgroundColor: "#1976d2;", color: "#ffffff" },
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};
