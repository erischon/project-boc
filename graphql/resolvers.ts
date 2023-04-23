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
    project: (parent: any, args: any, context: Context) => {
      return context.prisma.project.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    projects: (parent: any, args: any, context: Context) => {
      return context.prisma.project.findMany({
        where: {
          managerId: args.managerId,
        },
      });
    },
  },
};
