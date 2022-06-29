import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HorusMenu } from "../src/components/menu/horus-menu";
import { getDataFromTree } from "@apollo/client/react/ssr";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <HorusMenu>
          <Component {...pageProps} />
        </HorusMenu>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
