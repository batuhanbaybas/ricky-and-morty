import { gql } from "@apollo/client";

export const GET_ALL_EPISODE = gql`
  query ($page: Int) {
    episodes(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
    }
  }
`;

export const GET_EPISODE_BY_ID = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;
