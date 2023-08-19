import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import { DetailScene, HomeScene, ListScene, RmDetailScene, RmListScene } from "@/scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route path={switchRoutes.rm_list} element={<RmListScene />} /> 
        <Route path={switchRoutes.rm_char_detail} element={<RmDetailScene />} />
      </Routes>
    </Router>
  );
};
