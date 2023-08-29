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

import { CharacterVM, LocationVM } from "@/pods";

interface Props {
  locDetailVM: LocationVM;
  residentData: CharacterVM[];
}

export const LocDetailComponent: React.FC<Props> = (props) => {
  const { locDetailVM, residentData } = props;

  return (
    <div className="detail-container">
      <div className="item-detail-container">
        <h3>{locDetailVM.name}</h3>
        <span className="item-detail-span-orig-loc">TIPO</span>
        <span>{locDetailVM.type}</span>
        <span className="item-detail-span-orig-loc">DIMENSIÓN</span>
        <span>{locDetailVM.dimension || "N/A"}</span>
        <Divider sx={{ margin: "10px 0 3px", width: "80%" }} />
        <span className="item-detail-span-orig-loc">
          RESIDENTES: {locDetailVM.residents.length}
        </span>

        {!residentData || residentData.length === 0 ? (
          <span className="text-grey-span">No hay residentes</span>
        ) : (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 12 }}> --- VER RESIDENTES ---</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div>
                {residentData.map((resident) => (
                  <React.Fragment key={resident.id}>
                    <div className="resident-list-container">
                      <Avatar
                        sx={{ margin: "auto", width: 50, height: 50 }}
                        alt="avatar"
                        src={resident.image}
                      />
                      <ListItemButton
                        component={routerLink}
                        sx={{
                          display: "flex",
                          minWidth: "150px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        to={routes.rm_char_detail(resident.id.toString())}
                      >
                        {resident.name}
                      </ListItemButton>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        )}
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
