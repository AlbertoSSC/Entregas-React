import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import {
  DetailScene,
  HomeScene,
  ListScene,
  RmDetailCharacterScene,
  RmDetailLocationScene,
  RmListScene,
} from "@/scenes";
import { RmDetailEpisodeScene } from "@/scenes/RM-ep-detail.scene";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route path={switchRoutes.rm_list} element={<RmListScene />} />
        <Route path={switchRoutes.rm_char_detail} element={<RmDetailCharacterScene />} />
        <Route path={switchRoutes.rm_loc_detail} element={<RmDetailLocationScene />} />
        <Route path={switchRoutes.rm_ep_detail} element={<RmDetailEpisodeScene />} />
      </Routes>
    </Router>
  );
};
