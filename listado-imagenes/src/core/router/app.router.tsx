import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import { CatScene, CheckOutScene, DogScene, AdoptionCompletedScene } from "@/scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<DogScene />} />
        <Route path={switchRoutes.catList} element={<CatScene />} />
        <Route path={switchRoutes.dogList} element={<DogScene />} />
        <Route path={switchRoutes.checkOut} element={<CheckOutScene />} />
        <Route
          path={switchRoutes.adoptionCompleted}
          element={<AdoptionCompletedScene />}
        />
      </Routes>
    </Router>
  );
};
