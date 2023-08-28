import {
  CharDetailVM,
  EpisodeVM,
  LocationVM,
  fetchForApiTotalPages,
  getCharacterList,
  getEpisodeList,
  getLocationList,
} from "@/pods";

interface CharacterSearch
  extends Omit<CharDetailVM, "id" | "origin.url" | "Location.url" | "image" | "episode"> {}
interface LocationSearch extends Omit<LocationVM, "id" | "residents"> {}
interface EpisodeSearch extends Omit<EpisodeVM, "id" | "characters"> {}

export type SearchType = "character" | "location" | "episode";

const searchItems = async (
  alignment: SearchType,
  renderSearch: string,
  getListFunction: (page: number) => Promise<any[]>
): Promise<any[]> => {
  const apiTotalPages = await fetchForApiTotalPages(alignment);
  const itemMatch = [];

  for (let i = 1; i <= apiTotalPages; i++) {
    const response = await getListFunction(i);

    const matchingItems = response.filter((item) => {
      for (const property in item) {
        if (
          typeof item[property] === "string" &&
          item[property].toLowerCase().includes(renderSearch.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    itemMatch.push(...matchingItems);
  }

  return itemMatch;
};

export const setPropsToSearch = async (
  alignment: SearchType,
  renderSearch: string
): Promise<CharacterSearch[] | LocationSearch[] | EpisodeSearch[]> => {
  if (alignment === "character") {
    return searchItems(alignment, renderSearch, getCharacterList);
  }

  if (alignment === "location") {
    return searchItems(alignment, renderSearch, getLocationList);
  }

  if (alignment === "episode") {
    return searchItems(alignment, renderSearch, getEpisodeList);
  }

  return [];
};
