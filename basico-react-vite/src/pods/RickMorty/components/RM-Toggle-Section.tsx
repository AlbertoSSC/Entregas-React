import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface Props {
  handleToogleChange: (e: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
  alignment: string;
}

export const ToggleSection: React.FC<Props> = (props) => {
  const { alignment, handleToogleChange } = props;

  localStorage.setItem("alignment", alignment);

  return (
    <ToggleButtonGroup
      size="small"
      sx={{ width: "325px", justifyContent: "center", marginTop: "20px" }}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleToogleChange}
      aria-label="Platform"
    >
      <ToggleButton sx={{ width: "120px", fontSize: "11px", fontWeight: "600" }} value="character">
        Personajes
      </ToggleButton>
      <ToggleButton sx={{ width: "120px", fontSize: "11px", fontWeight: "600" }} value="location">
        Localizaciones
      </ToggleButton>
      <ToggleButton sx={{ width: "120px", fontSize: "11px", fontWeight: "600" }} value="episode">
        Episodios
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
