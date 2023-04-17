"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_APOLLO_SERVER_URI || "",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
