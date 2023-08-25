import { Typography } from "@mui/material";

import { GithubSection, RickMortiSection } from "@/pods";

export const HomeComponent = () => {
  return (
    <>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        A qué sección desea acceder
      </Typography>
      <div className="section-button-container">
        <GithubSection />
        <RickMortiSection />
      </div>
    </>
  );
};
