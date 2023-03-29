import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return res.status(405).end();
    }
    const { email, name, password } = req.body;

    // Check if the email is already taken
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // if the email exists, return an error
    if (existingUser) {
      return res.status(422).json({ error: "Email taken" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create the user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    // return the user
    res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
