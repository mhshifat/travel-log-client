import gql from "graphql-tag";

export const LOG_FRAGMENT = gql`
  fragment LogFragment on Log {
    id
    title
    description
    visitedDate
    comments
    image
    latitude
    longitude
    rating
    createdAt
  }
`;
