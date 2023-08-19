import React from "react";

import { Pagination } from "@mui/material";

import { RmSearchBar, ToggleSection, ApiPageNav } from "@/pods";
import { RmListComponent } from "./RM-List.component";
import { getCharacterList } from "./api";

export const RmListContainer: React.FC = () => {
  const [currentSearch, setCurrentSearch] = React.useState("");

  const [characterList, setCharacterList] = React.useState([]);

  const charactersPerPage = 5;
  const totalPages = Math.ceil(characterList.length / charactersPerPage);
  const [page, setPage] = React.useState(1);
  const [characterListSliced, setCharacterListSliced] = React.useState([]);
  const [apiPage, setApiPage] = React.useState(1);
  const [alignment, setAlignment] = React.useState("character");
  const [renderSearch, setRenderSearch] = React.useState("");

  React.useEffect(() => {
    getCharacterList(apiPage).then((data) => {
      if (data.length === 0) {
        setCharacterList([]);
      } else {
        setCharacterList(data);
      }
    });
  }, [apiPage]);

  React.useEffect(() => {
    const characterPageSlice = characterList.slice(
      (page - 1) * charactersPerPage,
      page * charactersPerPage
    );
    setCharacterListSliced(characterPageSlice);
  }, [characterList, page]);

  React.useEffect(() => {
    const notInputText = document.getElementById("not-found-text");

    const fetchAndMatch = async () => {
      let characterMatch = [];
      for (let i = 1; i <= totalPages; i++) {
        const response = await getCharacterList(i);
        if (response === null) break;
        const matchingChars = response.filter((char) => Object.values(char).includes(renderSearch));
        
        characterMatch.push(...matchingChars);
      }
      if (characterMatch.length !== 0) setCharacterList(characterMatch);
      notInputText.innerText = "No hemos encontrado ningún resultado para tu búsqueda.";
    };
    fetchAndMatch();
  }, [renderSearch, totalPages]);

  const handleGetSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRenderSearch(currentSearch);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const handleNextApiPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setApiPage(apiPage + 1);
    setPage(1);
    console.log(apiPage);
  };
  const handlePrevApiPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setApiPage(apiPage - 1);
    console.log(apiPage);
  };

  const handleToogleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleSection handleToogleChange={handleToogleChange} alignment={alignment} />

      <RmSearchBar
        handleGetRMSearchInput={handleGetSearchInput}
        handleRMSearchSubmit={handleSearchSubmit}
        currentSearch={currentSearch}
      />
      <RmListComponent alignment={alignment} characterListSliced={characterListSliced} />

      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem",
        }}
      />
      <ApiPageNav
        alignment={alignment}
        totalPages={totalPages}
        apiPage={apiPage}
        handleNextApiPage={handleNextApiPage}
        handlePrevApiPage={handlePrevApiPage}
      />
    </>
  );
};
