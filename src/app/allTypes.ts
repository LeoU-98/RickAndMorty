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

  episode: string[];
};

export type PageData = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };

  result: Character;
};
