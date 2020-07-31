import gql from "graphql-tag";
import { LOG_FRAGMENT } from "./fragments";

export const GET_LOGS = gql`
  query GetLogs {
    logs {
      ...LogFragment
    }
  }

  ${LOG_FRAGMENT}
`;
