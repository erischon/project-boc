import { redirect } from "next/navigation";

import getCurrentUser from "@/actions/getCurrentUser";

import "../globals.css";
import Verticalbar from "@/components/navbar/Verticalbar";
import Footer from "@/components/Footer";
import HeaderBar from "@/components/navbar/HeaderBar";

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
    <div className="flex max-w-screen-lg mx-auto min-h-screen">
      <aside className="hidden md:flex flex-col justify-between h-auto pl-4 py-4 text-white bg-[var(--primary-color)]">
        <Verticalbar />
      </aside>

      <div className="flex flex-col flex-grow">
        <HeaderBar />

        {children}

        <Footer />
      </div>
    </div>
  );
}
