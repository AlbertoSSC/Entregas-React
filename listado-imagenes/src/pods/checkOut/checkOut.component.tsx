import React from "react";

import { Button, ThemeProvider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { routes } from "@/core";
import { AnimalContext, theme } from "@/common";

export const CheckOutComponent: React.FC = () => {
  const { selectedDogs, selectedCats } = React.useContext(AnimalContext);

  React.useEffect(() => {
    const selectedAnimals = { ...selectedDogs, ...selectedCats };

    const showCart = document.getElementById("cart");
    const hideNavCart = document.getElementById("nav-cart");
    const hideAdoptButton = document.getElementById("adopt-button");

    showCart && selectedAnimals && showCart.classList.contains("hide")
      ? showCart.classList.remove("hide")
      : null;

    hideNavCart ? hideNavCart.classList.add("hide") : null;

    if (Object.values(selectedAnimals).every((value) => !value)) {
      hideAdoptButton ? hideAdoptButton.classList.add("hide") : null;
    } else {
      hideAdoptButton ? hideAdoptButton.classList.remove("hide") : null;
    }
  }, [selectedDogs, selectedCats]);

  return (
    <div className="checkOut-container">
      <h3>Check Out</h3>
      <p>¡Gracias por hacer del mundo un lugar mejor!</p>
      <p>Revisa tu cesta para continuar con la adopción.</p>

      <div id="adopt-button" className="adopt-button">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="ochre"
            sx={{ fontSize: "1rem" }}
            component={RouterLink}
            to={routes.adoptionCompleted}
          >
            Adoptar
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};
