import React from "react";

import { Button, TextField } from "@mui/material";

interface Props {
  handleSearchSubmit: (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleGetSearchInput: React.ChangeEventHandler<HTMLInputElement>;
  organization: string;
}

export const SearchBar: React.FC<Props> = (props) => {
  const { handleGetSearchInput, organization, handleSearchSubmit } = props;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSearchSubmit(e);
  };

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleSearchSubmit(e);
  };

  return (
    <>
      <form id="search-bar-form" onSubmit={handleOnSubmit}>
        <TextField
          sx={{ marginRight: "5px" }}
          variant="outlined"
          type="text"
          size="small"
          label={props.organization || "Introducir texto"}
          onChange={handleGetSearchInput}
        />
        <Button onClick={handleOnClick} variant="contained" size="small">
          Buscar
        </Button>
      </form>
      <p className="not-found-text" id="not-found-text">
        {" "}
      </p>
    </>
  );
};
