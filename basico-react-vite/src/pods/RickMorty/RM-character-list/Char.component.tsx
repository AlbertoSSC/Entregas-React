import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Avatar, Divider, Link } from "@mui/material";

import { routes } from "@/core";
import { CharHeaderList, CharacterVM } from "@/pods";

interface Props {
  characterListSliced: CharacterVM[];
}

export const CharComponent: React.FC<Props> = (props) => {
  const { characterListSliced } = props;

  return (
    <>
      <CharHeaderList />

      {characterListSliced.map((char: CharacterVM) => (
        <React.Fragment key={char.id}>
          <Link
            component={RouterLink}
            to={routes.rm_char_detail(char.id.toString())}
            sx={{
              borderRadius: "8px",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            <div className="header-list detail-link">
              <Avatar
                sx={{ width: 60, height: 60, marginLeft: "8px" }}
                className="avatar"
                alt="avatar"
                src={char.image}
              />
              <span className="span-char-species"> {char.species} </span>
              <span> {char.name} </span>
            </div>
          </Link>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};
