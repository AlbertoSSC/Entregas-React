import React from "react";

import { Pagination } from "@mui/material";
import { useDebounce } from "use-debounce";

import {
  RmSearchBar,
  ToggleSection,
  setPropsToSearch,
  RMListComponent,
  useFetchList,
  ItemsListSlicedContext,
  SearchType,
} from "@/pods";

import CircularIndeterminate from "./components/circular-progress";

const itemsPerPage = 5;
const notInputText = document.getElementById("not-found-text");

export const RmListContainer: React.FC = () => {
  const [currentSearch, setCurrentSearch] = React.useState("");
  const [debounceSetCurrentSearch] = useDebounce(setCurrentSearch, 500);

  const [renderSearch, setRenderSearch] = React.useState("");

  const [itemsList, setItemsList] = React.useState([]);
  const [itemsListSliced, setItemsListSliced] = React.useState([]);

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [alignment, setAlignment] = React.useState<SearchType>("character");

  const [firstToggle, setFirstToggle] = React.useState({
    character: true,
    location: true,
    episode: true,
  });

  React.useEffect(() => {
    const CalcPaginationPages = Math.ceil(itemsList.length / itemsPerPage);
    setTotalPages(CalcPaginationPages);
  }, [itemsList]);

  React.useEffect(() => {
    if (
      localStorage.getItem("search") !== null &&
      localStorage.getItem("search") !== ""
    ) {
      setRenderSearch(localStorage.getItem("search"));
    } else {
      const fetchingList = async () => {
        const fetchedList = await useFetchList(alignment);
        setItemsList(fetchedList);
      };
      fetchingList();
    }
  }, [alignment]);

  React.useEffect(() => {
    const fetchAndMatch = async () => {
      if (renderSearch === "") {
        setItemsList([]);
      }
      const itemsMatched = await setPropsToSearch(alignment, renderSearch);

      if (itemsMatched.length !== 0) {
        setItemsList(itemsMatched);
        notInputText && notInputText.classList.add("hidden");
        localStorage.setItem("search", "");
      } else {
        notInputText && notInputText.classList.remove("hidden");
      }
    };
    fetchAndMatch();
  }, [renderSearch]);

  React.useEffect(() => {
    const listSlice = itemsList.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    setItemsListSliced(listSlice);
  }, [itemsList, page]);

  const handleGetSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounceSetCurrentSearch(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRenderSearch(currentSearch);
    localStorage.setItem("search", currentSearch);
    setPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const handleToogleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: SearchType
  ) => {
    if (newAlignment !== null) setAlignment(newAlignment);

    if (firstToggle[alignment]) {
      setFirstToggle((prevFirstToggle) => ({
        ...prevFirstToggle,
        [alignment]: false,
      }));
      setItemsList([]);
    }

    localStorage.setItem("search", "");
    setCurrentSearch("");
    setRenderSearch("");
    setPage(1);
  };

  return (
    <>
      <ToggleSection
        handleToogleChange={handleToogleChange}
        alignment={alignment}
      />

      <RmSearchBar
        handleGetRMSearchInput={handleGetSearchInput}
        handleRMSearchSubmit={handleSearchSubmit}
        currentSearch={currentSearch}
      />
      <ItemsListSlicedContext.Provider value={itemsListSliced}>
        {itemsListSliced.length === 0 ? (
          <>
            {alignment === "character" ? (
              <h3>Cargando 826 personajes...</h3>
            ) : (
              <h3>Cargando...</h3>
            )}
            <CircularIndeterminate />
          </>
        ) : (
          <RMListComponent alignment={alignment} />
        )}
      </ItemsListSlicedContext.Provider>

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
