import React from "react";

import { Pagination } from "@mui/material";

import { RmSearchBar, ToggleSection, ApiPageNav } from "@/pods";
import { RmListComponent } from "./RM-List.component";
import { fetchForApiTotalPages, getCharacterList } from "./api";

export const RmListContainer: React.FC = () => {
  const [currentSearch, setCurrentSearch] = React.useState("");
  const [renderSearch, setRenderSearch] = React.useState("");

  const [characterList, setCharacterList] = React.useState([]);
  const [characterListSliced, setCharacterListSliced] = React.useState([]);

  const charactersPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [alignment, setAlignment] = React.useState("character");

  const notInputText = document.getElementById("not-found-text");

  React.useEffect(() => {
    const calculateTotalPages = Math.ceil(characterList.length / charactersPerPage);
    setTotalPages(calculateTotalPages);
  }, [characterList]);

  React.useEffect(() => {
    const fetchCharList = async () => {
      let fetchedCharList = [];
      const apiTotalPages = await fetchForApiTotalPages(alignment);
      for (let i = 1; i <= apiTotalPages; i++) {
        const response = await getCharacterList(i);

        fetchedCharList.push(...response);
      }
      if (fetchedCharList.length === 0) {
        setCharacterList([]);
      }
      setCharacterList(fetchedCharList);
    };
    fetchCharList();
  }, []);

  React.useEffect(() => {
    const characterPageSlice = characterList.slice(
      (page - 1) * charactersPerPage,
      page * charactersPerPage
    );
    setCharacterListSliced(characterPageSlice);
  }, [characterList, page]);

  React.useEffect(() => {
    const fetchAndMatch = async () => {
      if (renderSearch === "") {
        setCharacterList([]);
        return;
      }

      let characterMatch = [];
      const apiTotalPages = await fetchForApiTotalPages(alignment);

      for (let i = 1; i <= apiTotalPages; i++) {
        const response = await getCharacterList(i);

        const responseWithLowercaseValues = response.map((char) => {
          const charWithLowercaseValues = {};
          for (const [key, value] of Object.entries(char)) {
            if (typeof value === "string") {
              charWithLowercaseValues[key] = value.toLowerCase();
            } else {
              charWithLowercaseValues[key] = value;
            }
          }
          return charWithLowercaseValues;
        });

        const matchingChars = responseWithLowercaseValues.filter((char) =>
          Object.values(char).some(
            (value) => typeof value === "string" && value.includes(renderSearch.toLowerCase())
          )
        );

        characterMatch.push(...matchingChars);
      }

      if (characterMatch.length !== 0) {
        setCharacterList(characterMatch);
        notInputText.classList.add("hidden");
      } else {
        notInputText.classList.remove("hidden");
      }
    };

    fetchAndMatch();
  }, [renderSearch]);

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
    </>
  );
};
