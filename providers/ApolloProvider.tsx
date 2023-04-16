"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
