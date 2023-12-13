export type SingleCharacterMap = {
  id: string;
  name: string;
  image: string;
  status: string;
  location: {
    name: string;
  };
};

export type GetSingleCharacterByIdResponse = {
  character: {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
    };
    episode: [
      {
        id: string;
        name: string;
        air_date: string;
      }
    ];
    location: {
      id: string;
      name: string;
    };
  };
};

export type GetAllCharactersResponse = {
  characters: {
    info: {
      pages: number;
    };
    results: SingleCharacterMap[];
  };
};
