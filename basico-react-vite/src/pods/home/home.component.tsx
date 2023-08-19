import { Typography } from "@mui/material";

import { GithubSection } from "./components/Github-section";
import { RickMortiSection } from "./components/RickMorti-section";

export const HomeComponent = () => {
  return (
    <>
      <Typography sx={{display:"flex", justifyContent:"center"}}>A qué sección desea acceder</Typography>
      <div className="section-button-container">
        <GithubSection />
        <RickMortiSection />
      </div>
    </>
  );
};
