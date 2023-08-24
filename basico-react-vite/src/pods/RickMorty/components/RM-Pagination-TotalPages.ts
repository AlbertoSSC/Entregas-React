import { CharacterVM } from "../RM-character-list";
import { EpisodeVM } from "../RM-episode-list";
import { LocationVM } from "../RM-location-list";

export const calculateTotalPages = (
  alignment: string,
  itemsPerPage: number,
  characterList?: CharacterVM[],
  locationList?: LocationVM[],
  episodeList?: EpisodeVM[]
) => {
  if (alignment === "character") {
    const paginationTotalPages = Math.ceil(characterList.length / itemsPerPage);
    return paginationTotalPages;
  }
  if (alignment === "location") {
    const paginationTotalPages = Math.ceil(locationList.length / itemsPerPage);
    return paginationTotalPages;
  }
  if (alignment === "episode") {
    const paginationTotalPages = Math.ceil(episodeList.length / itemsPerPage);
    return paginationTotalPages;
  }
  throw new Error(`Invalid alignment: ${alignment}`);
};
