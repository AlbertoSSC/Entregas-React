import React from "react";

import { Button, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import GithubLogo from "./assets/images/Github_logo.png";
import RMLogo from "./assets/images/R&M_logo.png";
import ReactLogo from "./assets/images/react.png";

const cards = [
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

const Card: React.FC<CardProps> = (props) => {
  const { title, copy, route, bg_img } = props;

  return (
    <div className="card" style={{ backgroundImage: `url(${bg_img})` }}>
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
            "&:hover": { backgroundColor: "#90caf9;", color: "#ffffff" },
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export const HomePageContent: React.FC = () => {
  return (
    <>
      <div className="home-header-content">
        <span className="header-home-title">Bienvenido a la entrega de:</span>
        <img className="react-home-img" src={ReactLogo} alt="react logo" />
        <span className="text-home-p">Seleccione donde desee iniciar su búsqueda</span>
      </div>
      <Divider />
      <main className="page-content">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            copy={card.copy}
            route={card.route}
            bg_img={card.bg_img}
          />
        ))}
      </main>
    </>
  );
};
