export interface CharacterVM {
  id: number;
  species: string;
  name: string;
  image: string;
}

export interface CharDetailVM {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
}

export interface EpisodeVM {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export interface LocationVM {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
