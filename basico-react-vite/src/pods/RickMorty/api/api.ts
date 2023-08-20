import * as apiModel from "./api.model";

export const fetchForApiTotalPages = async (alignment: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/${alignment}`);
  const data = await response.json();

  return data.info.pages;
};

//Lists

export const getCharacterList = async (apiPage: number): Promise<apiModel.CharacterEntity[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${apiPage}`);
  const data = await response.json();
  if (!response.ok) {
    console.log("API response no OK");
    return null;
  }
  const results = data.results;
  return results;
};

export const getLocationList = async (): Promise<apiModel.LocationEntity[]> => {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const results = data.results;
  return results;
};

export const getEpisodeList = async (): Promise<apiModel.EpisodeEntity[]> => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  const results = data.results;
  return results;
};

//Singles

export const getCharacter = async (id: string): Promise<apiModel.CharacterEntity> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  return data;
};

export const getLocation = async (id: string): Promise<apiModel.LocationEntity> => {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  return data;
};

export const getEpisode = async (id: string): Promise<apiModel.EpisodeEntity> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  if (response.status === 404) {
    return null;
  }
  return data;
};
