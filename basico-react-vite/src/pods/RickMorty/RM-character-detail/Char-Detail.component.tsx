import React from "react";

import { Link } from "react-router-dom";
import { Avatar, Button, Divider, ListItemButton } from "@mui/material";

import { routes } from "@/core";
import { CharDetailVM } from "@/pods";

interface Props {
  charDetailVM: CharDetailVM;
}

export const CharDetailComponent: React.FC<Props> = (props) => {
  const { charDetailVM } = props;

  const urlLocationSplit = charDetailVM.location.url.split("/");
  const urlLocationId = urlLocationSplit[urlLocationSplit.length - 1];

  const urlOriginSplit = charDetailVM.origin.url.split("/");
  const urlOriginId = urlOriginSplit[urlOriginSplit.length - 1];

  return (
    <div className="detail-container">
      <div className="item-detail-container">
        <h3>{charDetailVM.name}</h3>
        <span className="text-grey-span">{charDetailVM.status}</span>
        <span className="text-grey-span">{charDetailVM.species}</span>
        <span className="text-grey-span">{charDetailVM.gender}</span>

        <Avatar
          sx={{ width: 100, height: 100, margin: "8px" }}
          alt="avatar"
          src={charDetailVM.image}
        />

        <span className="text-grey-span">
          Aparece en <b>{charDetailVM.episode.length}</b> episodios
        </span>

        <Divider sx={{ width: "80%", margin: "8px 0px 8px 0px" }} />

        <span className="item-detail-span-orig-loc">ORIGEN</span>
        <ListItemButton
          sx={{
            borderRadius: 2,
            backgroundColor: "#e3f2fd",
            textOverflow: "ellipsis",
            padding: "8px 16px 8px 16px",
            width: "100%",
            justifyContent: "center",
          }}
          disabled={charDetailVM.origin.name === "unknown" && true}
          href={routes.rm_loc_detail(urlOriginId)}
        >
          {charDetailVM.origin.name}
        </ListItemButton>

        <span className="item-detail-span-orig-loc">UBICACIÓN</span>
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
          disabled={charDetailVM.location.name === "unknown" && true}
          href={routes.rm_loc_detail(urlLocationId)}
        >
          {charDetailVM.location.name}
        </ListItemButton>
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
