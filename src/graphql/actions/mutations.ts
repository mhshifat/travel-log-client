import gql from "graphql-tag";
import { LOG_FRAGMENT } from "./fragments";

export const CREATE_LOG = gql`
  mutation CreateLog($input: CreateLogInput!) {
    createLog(input: $input) {
      ...LogFragment
    }
  }

  ${LOG_FRAGMENT}
`;
