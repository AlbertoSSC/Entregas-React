import React from "react";

import { Pagination } from "@mui/material";
import { useDebounce } from "use-debounce";

import {
  RmSearchBar,
  ToggleSection,
  setPropsToSearch,
  RMListComponent,
  fetchList,
  calculateTotalPages,
} from "@/pods";

export const RmListContainer: React.FC = () => {
  const [currentSearch, setCurrentSearch] = React.useState("");
  const [debounceCurrentSearch] = useDebounce(currentSearch, 500);
  
  const [renderSearch, setRenderSearch] = React.useState("");

  const [characterList, setCharacterList] = React.useState([]);
  const [characterListSliced, setCharacterListSliced] = React.useState([]);

  const [locationList, setLocationList] = React.useState([]);
  const [locationListSliced, setLocationListSliced] = React.useState([]);

  const [episodeList, setEpisodeList] = React.useState([]);
  const [episodeListSliced, setEpisodeListSliced] = React.useState([]);

  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [alignment, setAlignment] = React.useState("character");

  const notInputText = document.getElementById("not-found-text");

  React.useEffect(() => {
    const CalculatePaginationPages = calculateTotalPages(
      alignment,
      itemsPerPage,
      characterList,
      locationList,
      episodeList
    );
    setTotalPages(CalculatePaginationPages);
  }, [characterList, locationList, episodeList]);

  React.useEffect(() => {
    if (localStorage.getItem("search") !== null && localStorage.getItem("search") !== "") {
      setRenderSearch(localStorage.getItem("search"));
    } else {
      const fetchingList = async () => {
        const fetchedList = await fetchList(alignment);
        if (alignment === "character") setCharacterList(fetchedList);
        if (alignment === "location") setLocationList(fetchedList);
        if (alignment === "episode") setEpisodeList(fetchedList);
      };
      fetchingList();
    }
  }, [alignment]);

  React.useEffect(() => {
    if (alignment === "character") {
      const listCharSlice = characterList.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      setCharacterListSliced(listCharSlice);
    } else if (alignment === "location") {
      const listLocationSlice = locationList.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      setLocationListSliced(listLocationSlice);
    } else if (alignment === "episode") {
      const listEpisodeSlice = episodeList.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      setEpisodeListSliced(listEpisodeSlice);
    }
  }, [characterList, locationList, episodeList, page]);

  React.useEffect(() => {
    const fetchAndMatch = async () => {
      if (renderSearch === "") {
        setCharacterList([]);
      }

      const characterMatched = await setPropsToSearch(alignment, renderSearch);
      setCharacterList(characterMatched);

      if (characterMatched.length !== 0) {
        setCharacterList(characterMatched);
        notInputText && notInputText.classList.add("hidden");
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
    localStorage.setItem("search", currentSearch);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const handleToogleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) setAlignment(newAlignment);
    localStorage.setItem("search", "");
    setCurrentSearch("");
    setPage(1);
  };

  return (
    <>
      <ToggleSection handleToogleChange={handleToogleChange} alignment={alignment} />

      <RmSearchBar
        handleGetRMSearchInput={handleGetSearchInput}
        handleRMSearchSubmit={handleSearchSubmit}
        currentSearch={debounceCurrentSearch}
      />
      <RMListComponent
        alignment={alignment}
        locationListSliced={locationListSliced}
        episodeListSliced={episodeListSliced}
        characterListSliced={characterListSliced}
      />

      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "1.5rem",
        }}
      />
    </>
  );
};
