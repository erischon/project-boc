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
  },
};
