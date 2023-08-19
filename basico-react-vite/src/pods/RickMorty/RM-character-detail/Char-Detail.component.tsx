import React from "react";

import { Link } from "react-router-dom";
import { Avatar, Button, Divider, ListItemButton } from "@mui/material";

import { routes } from "@/core";

interface Props {
  charDetailVM: CharDetailVM;
}

export const CharDetailComponent: React.FC<Props> = (props) => {
  const { charDetailVM } = props;

  return (
    <div className="detail-container">
      <div className="member-detail-container">
        <h3>{charDetailVM.name}</h3>
        <span>{charDetailVM.status}</span>
        <span>{charDetailVM.species}</span>
        <span>{charDetailVM.gender}</span>

        <Avatar
          sx={{ width: 100, height: 100, margin: "8px" }}
          alt="avatar"
          src={charDetailVM.image}
        />
        <Divider sx={{ width: "100%", margin: "8px 0px 8px 0px" }} />

        <span className="char-detail-span-orig-loc">ORIGEN</span>
        <ListItemButton
          sx={{
            borderRadius: 2,
            backgroundColor: "#e3f2fd",
            textOverflow: "ellipsis",
            padding: "8px 16px 8px 16px",
            width: "100%",
            justifyContent: "center",
          }}
          href={charDetailVM.origin.url}
        >
          {charDetailVM.origin.name}
        </ListItemButton>

        <span className="char-detail-span-orig-loc">UBICACIÓN</span>
        <ListItemButton
          sx={{
            borderRadius: 2,
            backgroundColor: "#e3f2fd",
            textOverflow: "ellipsis",
            padding: "8px 16px 8px 16px",
            marginBottom: 1.5,
            width: "100%",
            justifyContent: "center",
          }}
          href={charDetailVM.location.url}
        >
          {charDetailVM.location.name}
        </ListItemButton>

        <span>
          Aparece en <b>{charDetailVM.episode.length}</b> episodios
        </span>
      </div>

      <Button
        sx={{ borderRadius: "0px 0px 8px 8px" }}
        variant="contained"
        component={Link}
        to={routes.rm_list}
      >
        Volver a la lista
      </Button>
    </div>
  );
};
