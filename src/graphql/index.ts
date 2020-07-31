import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URI || "http://localhost:5000/api/v1",
  }),
});
