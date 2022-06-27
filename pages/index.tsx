import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const GetUsers = gql`
    query Query {
      GetUsers {
        user_id
        user_name
        fist_name
        last_name
        create_date
        active
        user_type
        email
      }
    }
  `;
  const { loading, error, data } = useQuery(GetUsers);
  console.log(data);
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Home;
