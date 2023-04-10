import { redirect } from "next/navigation";

import LoginForm from "./components/forms/LoginForm";
import getCurrentUser from "./actions/getCurrentUser";

/**
 * @description Login page
 */
export default async function Home() {
  const currentUser = await getCurrentUser();

  // If the user is already logged in, redirect them to the dashboard.
  if (currentUser) {
    redirect("/dashboard");
  }

  return (
    <main className="flex justify-center items-center h-screen w-full">
      <LoginForm />
    </main>
  );
}
