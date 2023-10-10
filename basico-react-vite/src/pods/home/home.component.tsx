import React from "react";

import { Divider } from "@mui/material";

import { Card, cards } from "./components";
import ReactLogo from "./assets/images/react.png";

export const HomePageContent: React.FC = () => {
  return (
    <>
      <div className="home-header-content">
        <span className="header-home-title">Bienvenido a la entrega de:</span>
        <img className="react-home-img" src={ReactLogo} alt="react logo" />
        <span className="text-home-p">
          Seleccione donde desee iniciar su búsqueda
        </span>
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
