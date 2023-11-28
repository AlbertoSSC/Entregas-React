import "./App.scss";

import React from "react";

import { AppRouter } from "./core";
import { AnimalProvider, ToggleCartProvider } from "./common";

function App() {
  return (
    <>
      <ToggleCartProvider>
        <AnimalProvider>
          <AppRouter />
        </AnimalProvider>
      </ToggleCartProvider>
    </>
  );
}

export default App;
