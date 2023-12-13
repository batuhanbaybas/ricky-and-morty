"use client";
import { env } from "@/lib/env";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

type INetworkClientProps = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: env.GRAPHQL_URL,
  cache: new InMemoryCache()
});

const NetworkProvider: React.FC<INetworkClientProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default NetworkProvider;
