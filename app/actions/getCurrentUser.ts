import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "../libs/prismadb";

/**
 * @description Get the current session from the server
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * @description Get the current user from the session
 */
export default async function getCurrentUser() {
  try {
    const session = await getSession();

    // If there is no session, return null
    if (!session?.user?.email) return null;

    // Get the user from the database
    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    // If there is no user, return null
    if (!currentUser) return null;

    // Return the user
    return currentUser;
  } catch (err: any) {
    console.error(`Error in getCurrentUser. ${err}`);
    return null;
  }
}
