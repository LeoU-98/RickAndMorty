export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;

  url: string;
  episode: string[];
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type PageData = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };

  results: Character[] | Location[] | Episode[];
};

export type CharacterModalProps = {
  data: Character;
  onClose: () => void;
};
