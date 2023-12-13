import { gql } from "@apollo/client";

export const GET_ALL_CHARACTER = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        location {
          name
        }
      }
    }
  }
`;

export const GET_SINGLE_CHARACTER_BY_ID = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      origin {
        name
      }
      episode {
        id
        name
        air_date
      }
      location {
        id
        name
      }
    }
  }
`;
