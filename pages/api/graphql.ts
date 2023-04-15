import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { PrismaClient } from "@prisma/client";

import prisma from "@/libs/prismadb";

/**
 * Define Types Definitions.
 */
const typeDefs = gql`
  "User type."
  type User {
    id: ID!
    name: String!
    email: String!
    image: String
    userType: String!
  }

  "Query type."
  type Query {
    user(id: ID!): User
  }
`;

/**
 * Define resolvers.
 */
const resolvers = {
  Query: {
    // User resolver.
    user: (parent: any, args: any, context: any) => {
      return prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export type Context = {
  prisma: PrismaClient;
};

/**
 * Create Apollo Server.
 */
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, prisma }),
});
