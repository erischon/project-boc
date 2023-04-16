import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { PrismaClient } from "@prisma/client";

import prisma from "@/libs/prismadb";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

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
