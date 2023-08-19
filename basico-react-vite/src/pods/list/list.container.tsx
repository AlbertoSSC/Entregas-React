import React from "react";
import { Pagination } from "@mui/material";

import { SearchBar } from "./components/Search";
import { ListComponent } from "./list.component";

import { getMembers } from "./api";
import { mapMembersToVM } from "./list.mappers";

export const ListContainer: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [organization, setOrganization] = React.useState(
    localStorage.getItem("organization") || "LEMONCODE"
  );
  const [memberList, setMemberList] = React.useState([]);

  const membersPerPage = 5;
  const totalPages = Math.ceil(memberList.length / membersPerPage);
  const [page, setPage] = React.useState(1);
  const [memberSliced, setMemberSliced] = React.useState(memberList.slice(0, membersPerPage - 1));

  const notInputText = document.getElementById("not-found-text");

  React.useEffect(() => {
    if (organization === "") {
      notInputText.innerText = "Debe introducir una organización";
    } else {
      getMembers(organization)
        .then(mapMembersToVM)
        .then((data) => {
          if (data.length === 0) {
            setMemberList([]);
            notInputText.innerText = "No hemos encontrado la organización introducida";
          } else {
            setMemberList(data);
            notInputText ? (notInputText.innerText = "") : null;
          }
        });
    }
  }, [organization]);

  const handleGetSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("organization", search);

    setOrganization(search);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const membersPageSlice = memberList.slice((page - 1) * membersPerPage, page * membersPerPage);
    setMemberSliced(membersPageSlice);
  }, [memberList, page]);

  return (
    <>
      <SearchBar
        handleGetSearchInput={handleGetSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        organization={organization}
      />
      <ListComponent
        memberList={memberList}
        memberSliced={memberSliced}
        organization={organization}
      />
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </>
  );
};
