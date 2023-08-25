import { fetchForApiTotalPages, getCharacterList, getEpisodeList, getLocationList } from "@/pods";

export const useFetchList = async (alignment: string) => {
  let fetchedList = [];
  const apiTotalPages = await fetchForApiTotalPages(alignment);

  for (let i = 1; i <= apiTotalPages; i++) {
    if (alignment === "character") {
      const response = await getCharacterList(i);
      fetchedList.push(...response);
    }
    if (alignment === "location") {
      const response = await getLocationList(i);
      fetchedList.push(...response);
    }
    if (alignment === "episode") {
      const response = await getEpisodeList(i);
      fetchedList.push(...response);
    }
  }

  return fetchedList;
};
