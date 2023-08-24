import React from "react";

import { Button, TextField } from "@mui/material";

interface Props {
  handleRMSearchSubmit: (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleGetRMSearchInput: React.ChangeEventHandler<HTMLInputElement>;
  currentSearch: string;
}

export const RmSearchBar: React.FC<Props> = (props) => {
  const { handleGetRMSearchInput, handleRMSearchSubmit, currentSearch } = props;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleRMSearchSubmit(e);
  };

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleRMSearchSubmit(e);
  };

  return (
    <>
      <form id="search-bar-form" onSubmit={handleOnSubmit}>
        <TextField
          id="search-text-field"
          sx={{ marginRight: "5px" }}
          variant="outlined"
          type="text"
          size="small"
          label={currentSearch || "Introducir texto"}
          onChange={handleGetRMSearchInput}
        />
        <Button onClick={handleOnClick} variant="contained" size="small">
          Buscar
        </Button>
      </form>
      <p className="not-found-text hidden" id="not-found-text">
        No se ha encontrado su búsqueda
      </p>
    </>
  );
};
