import { CharacterEntity, LocationEntity, EpisodeEntity } from "@/pods";
import { CharDetailVM, LocationVM, EpisodeVM } from "@/pods";

export const mapCharacterListToVM = (character: CharacterEntity[]): CharDetailVM[] => {
  return character.map(mapCharacterDetailToVM);
};

export const mapCharacterDetailToVM = (character: CharacterEntity): CharDetailVM => {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    image: character.image,
    origin: character.origin,
    location: character.location,
    episode: character.episode,
  };
};

export const mapLocationListToVM = (location: LocationEntity[]): LocationVM[] => {
  return location.map(mapLocationDetailToVM);
};

export const mapLocationDetailToVM = (location: LocationEntity): LocationVM => {
  return {
    id: location.id,
    name: location.name,
    type: location.type,
    dimension: location.dimension,
    residents: location.residents,
  };
};

export const mapEpisodeListToVM = (episode: EpisodeEntity[]): EpisodeVM[] => {
  return episode.map(mapEpisodeDetailToVM);
};

export const mapEpisodeDetailToVM = (episode: EpisodeEntity): EpisodeVM => {
  return {
    id: episode.id,
    name: episode.name,
    air_date: episode.air_date,
    episode: episode.episode,
    characters: episode.characters,
  };
};
