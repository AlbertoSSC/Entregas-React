import React from "react";

import { Link as routerLink } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Divider,
  ListItemButton,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { routes } from "@/core";
import { CharacterVM, EpisodeVM } from "@/pods";

interface Props {
  epDetailVM: EpisodeVM;
  characterData: CharacterVM[];
}

export const EpisodeDetailComponent: React.FC<Props> = (props) => {
  const { epDetailVM, characterData } = props;

  return (
    <div className="detail-container">
      <div className="member-detail-container">
        <h3>{epDetailVM.name}</h3>

        <span className="char-detail-span-orig-loc">EPISODIO</span>
        <span>{epDetailVM.episode}</span>

        <span className="char-detail-span-orig-loc">FECHA DE EMISIÓN</span>
        <span>{epDetailVM.air_date || "N/A"}</span>
        <span className="char-detail-span-orig-loc">
          PERSONAJES: {epDetailVM.characters.length}
        </span>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 12 }}> --- VER PERSONAJES ---</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div>
              {characterData.map((character) => (
                <React.Fragment key={character.id}>
                  <div className="resident-list-container">
                    <Avatar
                      sx={{ margin: "auto", width: 50, height: 50 }}
                      alt="avatar"
                      src={character.image}
                    />
                    <ListItemButton
                      component={routerLink}
                      to={routes.rm_char_detail(character.id.toString())}
                    >
                      {character.name}
                    </ListItemButton>
                  </div>
                  <Divider />
                </React.Fragment>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <Button
        sx={{ borderRadius: "0px 0px 8px 8px" }}
        variant="contained"
        component={routerLink}
        to={routes.rm_list}
      >
        Volver a la lista
      </Button>
    </div>
  );
};
