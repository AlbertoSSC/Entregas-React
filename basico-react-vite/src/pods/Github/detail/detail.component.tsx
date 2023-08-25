import React from "react";

import { Link } from "react-router-dom";
import { Avatar, Button, Divider, ListItemButton } from "@mui/material";

import { routes } from "@/core";
import { MemberDetailEntity, divideCamelCase } from "@/pods";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <div className="detail-container">
      <div className="member-detail-container">
        <h3>{divideCamelCase(member.name)}</h3>
        <span>User name: {member.login}</span>
        <span>Id: {member.id}</span>
        <Avatar
          sx={{ width: 100, height: 100, margin: "8px" }}
          alt="avatar"
          src={member.avatar_url}
        />
        <Divider sx={{ width: "100%", margin: "8px 0px 8px 0px" }} />
        <span>{member.type.toUpperCase()}</span>
        <ListItemButton
          sx={{
            textOverflow: "ellipsis",
            padding: "8px 16px 8px 16px",
            width: "100%",
            justifyContent: "center",
          }}
          href={member.html_url}
        >
          {member.html_url}
        </ListItemButton>
        <span>Followers: {member.followers}</span>
        <span>Following: {member.following}</span>
      </div>
      <Button
        sx={{ borderRadius: "0px 0px 8px 8px" }}
        variant="contained"
        component={Link}
        to={routes.list}
      >
        Volver a la lista
      </Button>
    </div>
  );
};
