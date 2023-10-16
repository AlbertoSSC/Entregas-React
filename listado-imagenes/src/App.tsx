import "./App.css";

import React from "react";

import { AppRouter } from "./core";
import { AnimalProvider, ToggleCartProvider } from "./common";

export const App: React.FC = () => {
  return (
    <>
      <ToggleCartProvider>
        <AnimalProvider>
          <AppRouter />
        </AnimalProvider>
      </ToggleCartProvider>
    </>
  );
};
