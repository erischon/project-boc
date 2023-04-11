import { redirect } from "next/navigation";

import Navbar from "../components/navbar/Navbar";
import getCurrentUser from "../actions/getCurrentUser";

import "../globals.css";

/**
 * Metadata for Dashboard pages
 */
export const metadata = {
  title: "BOC",
};

/**
 * @description The Layout for Dashboard pages
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  // If the user is not logged in, redirect them to the login page.
  if (!currentUser) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div>Vertical bar</div>
      {children}
      <footer>Footer</footer>
    </>
  );
}
