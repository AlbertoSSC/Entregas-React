import { fetchForApiTotalPages, getCharacterList, CharacterEntity } from "@/pods";

export const setPropsToSearch = async (alignment: string, renderSearch: string) => {
  let characterMatch = [];
  const apiTotalPages = await fetchForApiTotalPages(alignment);

  for (let i = 1; i <= apiTotalPages; i++) {
    const response = await getCharacterList(i);

    const matchingChars = response.filter(
      (char: CharacterEntity) =>
        (char.hasOwnProperty("name") &&
          typeof char.name === "string" &&
          char.name.toLowerCase().includes(renderSearch.toLowerCase())) ||
        (char.hasOwnProperty("status") &&
          typeof char.status === "string" &&
          char.status.toLowerCase().includes(renderSearch.toLowerCase())) ||
        (char.hasOwnProperty("species") &&
          typeof char.species === "string" &&
          char.species.toLowerCase().includes(renderSearch.toLowerCase())) ||
        (char.hasOwnProperty("gender") &&
          typeof char.gender === "string" &&
          char.gender.toLowerCase().includes(renderSearch.toLowerCase())) ||
        (char.hasOwnProperty("origin") &&
          typeof char.origin.name === "string" &&
          char.origin.name.toLowerCase().includes(renderSearch.toLowerCase())) ||
        (char.hasOwnProperty("location") &&
          typeof char.location.name === "string" &&
          char.location.name.toLowerCase().includes(renderSearch.toLowerCase()))
    );

    characterMatch.push(...matchingChars);
  }

  return characterMatch;
};
