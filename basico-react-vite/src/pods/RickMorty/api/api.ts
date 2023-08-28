import {
  CharDetailVM,
  CharacterVM,
  EpisodeVM,
  LocationVM,
  mapCharacterDetailToVM,
  mapCharacterListToVM,
  mapEpisodeListToVM,
  mapEpisodeDetailToVM,
  mapLocationListToVM,
  mapLocationDetailToVM,
} from "@/pods";

export const fetchForApiTotalPages = async (alignment: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/${alignment}`);
  const data = await response.json();

  return data.info.pages;
};

//Lists

export const getCharacterList = async (apiPage: number): Promise<CharDetailVM[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${apiPage}`);
  const data = await response.json();
  if (!response.ok) {
    console.log("API response no OK");
    return null;
  }
  const results = data.results;
  const mappedResults = mapCharacterListToVM(results);
  return mappedResults;
};

export const getLocationList = async (apiPage: number): Promise<LocationVM[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/location?page=${apiPage}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const results = data.results;
  const mappedResults = mapLocationListToVM(results);
  return mappedResults;
};

export const getEpisodeList = async (apiPage: number): Promise<EpisodeVM[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${apiPage}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const results = data.results;
  const mappedResults = mapEpisodeListToVM(results);
  return mappedResults;
};

//Singles

export const getCharacter = async (id: string): Promise<CharDetailVM> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const mappedResults = mapCharacterDetailToVM(data);
  return mappedResults;
};

export const getLocation = async (id: string): Promise<LocationVM> => {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const mappedResults = mapLocationDetailToVM(data);
  return mappedResults;
};

export const getEpisode = async (id: string): Promise<EpisodeVM> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const mappedResults = mapEpisodeDetailToVM(data);
  return mappedResults;
};
