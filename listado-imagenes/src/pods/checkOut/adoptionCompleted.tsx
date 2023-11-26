import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Button, Divider, ThemeProvider } from "@mui/material";

import { routes } from "@/core";
import { AnimalContext, theme } from "@/common";
import { toggleAdoptCat, toggleAdoptDog } from "@/pods";

import basketPet from "@/assets/images/dogs-in-basket.jpg";

export const AdoptionCompletedComponent: React.FC = () => {
  const { selectedCats, setSelectedCats, selectedDogs, setSelectedDogs } =
    React.useContext(AnimalContext);

  const deleteAdoptedPet = () => {
    Object.keys(selectedCats).forEach((catId) => {
      toggleAdoptCat(catId, false);
    });
    Object.keys(selectedDogs).forEach((dogId) => {
      toggleAdoptDog(dogId, false);
    });

    setSelectedCats({});
    setSelectedDogs({});
  };

  return (
    <div className="adoptionCompleted-card">
      <h3>¡Todo ha ido genial!</h3>

      <Divider sx={{ width: "100%" }} />

      <h1>Gracias por darle un nuevo hogar a tu nuevo amiguit@</h1>

      <img src={basketPet} alt="dog in basket image" />

      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          size="large"
          color="ochre"
          sx={{
            width: "100%",
            fontWeight: "bold",
            color: "white",
            mt: "1rem",
            mb: "1rem",
          }}
          component={RouterLink}
          to={routes.catList}
          onClick={deleteAdoptedPet}
        >
          Home
        </Button>
      </ThemeProvider>
    </div>
  );
};
