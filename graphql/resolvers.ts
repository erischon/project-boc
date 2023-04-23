import { Context } from "@/pages/api/graphql";

/**
 * Define resolvers.
 */
export const resolvers = {
  Query: {
    user: (parent: any, args: any, context: Context) => {
      return context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    getActiveUserProjects: (parent: any, args: any, context: Context) => {
      return context.prisma.project.findMany({
        where: {
          leadId: args.id,
          active: true,
        },
      });
    },
  },
  Project: {
    client: (parent: any, args: any, context: Context) => {
      return context.prisma.client.findUnique({
        where: {
          id: parent.clientId,
        },
      });
    },
    lead: (parent: any, args: any, context: Context) => {
      return context.prisma.user.findUnique({
        where: {
          id: parent.leadId,
        },
      });
    },
  },
};
