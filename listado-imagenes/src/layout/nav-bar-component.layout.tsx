import React from "react";

import { routes } from "@/core";
import { Link as RouterLink } from "react-router-dom";
import { AnimalContext, ToggleCartContext, theme } from "@/common";
import { NavTwoColumnsLayout } from ".";

import { Button, ThemeProvider } from "@mui/material";

interface Props extends React.PropsWithChildren {}

export const NavBar: React.FC<Props> = ({ children }) => {
  const { selectedCats, selectedDogs } = React.useContext(AnimalContext);

  const { toggleCart, setToggleCart } = React.useContext(ToggleCartContext);

  React.useEffect(() => {
    const selectedAnimals = { ...selectedCats, ...selectedDogs };
    const cartWarningText = document.getElementById("text");
    const showCheckOutButton = document.getElementById("checkOut-button");

    if (Object.values(selectedAnimals).every((value) => !value)) {
      cartWarningText?.classList.add("empty-hide-cart");
      showCheckOutButton?.classList.add("empty-hide-cart");
    } else {
      cartWarningText?.classList.contains("empty-hide-cart")
        ? cartWarningText?.classList.remove("empty-hide-cart")
        : null;
      showCheckOutButton?.classList.contains("empty-hide-cart")
        ? showCheckOutButton?.classList.remove("empty-hide-cart")
        : null;
    }
  }, [selectedCats, selectedDogs]);

  React.useEffect(() => {
    const cart = document.getElementById("cart");
    const mainLayout = document.getElementById("main-layout");

    if (toggleCart && mainLayout && cart) {
      cart.classList.remove("hide");
      mainLayout.classList.remove("notCart");
    } else {
      cart?.classList.add("hide");
      mainLayout?.classList.add("notCart");
    }
  }, [toggleCart]);

  const showCart = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavTwoColumnsLayout>
          <div className="nav-bar">
            <div className="nav-link">
              <Button
                variant="outlined"
                color="ochre"
                sx={{ color: "white", mt: "1rem", mb: "1rem" }}
                component={RouterLink}
                to={routes.catList}
                className="link"
              >
                Gatos
              </Button>
              <Button
                variant="outlined"
                color="ochre"
                sx={{ color: "white", margin: "1rem" }}
                component={RouterLink}
                to={routes.dogList}
                className="link"
              >
                Perros
              </Button>
            </div>
          </div>

          <div id="nav-cart" className="nav-cart">
            <div id="text" className="text empty-hide-cart">
              <div>
                <span className="title-cart">Cesta de adopción</span>
                <span className="filled-cart">
                  Tienes algún amiguito en la cesta 🐶🐱
                </span>
              </div>
            </div>
            <div className="cart-button-container">
              <Button
                component={RouterLink}
                to={routes.checkOut}
                sx={{ marginBottom: "0.5rem" }}
                size="small"
                variant="contained"
                color="ochre"
                className="cart-button"
                id="checkOut-button"
              >
                Check Out
              </Button>
              <Button
                size="small"
                variant="contained"
                color="ochre"
                onClick={showCart}
                className="cart-button"
              >
                Ver cesta
              </Button>
            </div>
          </div>

          {children}
        </NavTwoColumnsLayout>
      </ThemeProvider>
    </>
  );
};
