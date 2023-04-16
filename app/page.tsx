import { redirect } from "next/navigation";

import getCurrentUser from "@/actions/getCurrentUser";

/**
 * @description Login page
 */
export default async function Home() {
  const currentUser = await getCurrentUser();

  // If the user is not logged in, show the login form.
  if (!currentUser) {
    redirect("/login");
  }

  // If the user is already logged in, redirect them to the dashboard.
  if (currentUser) {
    redirect("/dashboard");
  }

  return (
    <main>
      <h2>Projet BOC</h2>
    </main>
  );
}
