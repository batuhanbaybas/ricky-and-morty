import { GET_ALL_CHARACTER } from "@/lib/queries/characters/characterQueries";
export type SingleEpisodeResponse = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: [
    {
      id: string;
      name: string;
      image: string;
    }
  ];
};

export type GetAllEpisodesResponse = {
  episodes: {
    info: {
      pages: number;
    };
    results: SingleEpisodeResponse[];
  };
};

export type GetEpisodeById = {
  episode: {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: [
      {
        id: string;
        name: string;
        image: string;
      }
    ];
  };
};
