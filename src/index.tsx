import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import Home from "./apps/pages/Home";
import { client } from "./graphql/index";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById("root")
);
