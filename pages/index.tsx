import * as React from "react";
import type { NextPage } from "next";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HorusMenu } from "../src/components/menu/horus-menu";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Home: NextPage = () => (
  <ApolloProvider client={client}>
    <HorusMenu />
  </ApolloProvider>
);

export default Home;
