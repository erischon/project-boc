import { redirect } from "next/navigation";

import Navbar from "../components/navbar/Navbar";
import getCurrentUser from "../actions/getCurrentUser";

import "../globals.css";
import Verticalbar from "../components/navbar/Verticalbar";
import Footer from "../components/Footer";

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
    <div className="flex flex-col max-w-screen-lg mx-auto min-h-screen px-2">
      <Navbar />

      <div className="flex w-full h-full">
        <Verticalbar />

        <div>{children}</div>
      </div>

      <Footer />
    </div>
  );
}
