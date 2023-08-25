import {
  CharacterEntity,
  EpisodeEntity,
  LocationEntity,
  fetchForApiTotalPages,
  getCharacterList,
  getEpisodeList,
  getLocationList,
} from "@/pods";

interface CharacterSearch
  extends Omit<
    CharacterEntity,
    "id" | "origin.url" | "Location.url" | "image" | "episode" | "url" | "created"
  > {}
interface LocationSearch extends Omit<LocationEntity, "id" | "url" | "created"> {}
interface EpisodeSearch extends Omit<EpisodeEntity, "id" | "url" | "created"> {}

export const setPropsToSearch = async (alignment: string, renderSearch: string) => {
  const apiTotalPages = await fetchForApiTotalPages(alignment);

  let itemMatch = [];
  
  if (alignment === "character") {
    for (let i = 1; i <= apiTotalPages; i++) {
      const response: CharacterSearch[] = await getCharacterList(i);

      const matchingChars = response.filter((item) => {
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

      itemMatch.push(...matchingChars);
    }
  }

  if (alignment === "location") {
    for (let i = 1; i <= apiTotalPages; i++) {
      const response: LocationSearch[] = await getLocationList(i);

      const matchingChars = response.filter((item) => {
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

      itemMatch.push(...matchingChars);
    }
  }

  if (alignment === "episode") {
    for (let i = 1; i <= apiTotalPages; i++) {
      const response: EpisodeSearch[] = await getEpisodeList(i);

      const matchingChars = response.filter((item) => {
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

      itemMatch.push(...matchingChars);
    }
  }

  return itemMatch;
};
