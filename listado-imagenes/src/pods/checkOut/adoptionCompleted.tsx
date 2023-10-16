import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Button, Divider, ThemeProvider } from "@mui/material";

import { routes } from "@/core";
import { AnimalContext, theme } from "@/common";
import { toggleAdoptCat, toggleAdoptDog } from "@/pods";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1rem",
        backgroundColor: "white",
        boxSizing: "border-box",
        padding: "1rem",
        borderRadius: "1rem",
        border: "1px solid #ffffff78",
        boxShadow: "2px 2px 2px #4b4b4b",
        margin: "auto",
        maxWidth: "500px",
        color: "#4b4b4b",
      }}
    >
      <h3>¡Todo ha ido genial!</h3>

      <Divider sx={{ width: "100%" }} />

      <h1>Gracias por darle un nuevo hogar a tu nuevo amiguit@</h1>
      <img
        src="src/assets/images/dogs-in-basket.jpg"
        alt="dog in basket image"
        style={{
          maxWidth: "400px",
          borderRadius: "300px",
          margin: "auto",
          aspectRatio: "1/1",
          boxSizing: "border-box",
          objectFit: "cover",
        }}
      />
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
