import { redirect } from "next/navigation";

import getCurrentUser from "@/actions/getCurrentUser";
import UserInfo from "@/components/users/UserInfo";

const page = async () => {
  const currentUser = await getCurrentUser();

  // If the user is not logged in, redirect them to the login page.
  if (!currentUser) {
    redirect("/");
  }

  return (
    <main className="h-full w-full">
      <div className="ml-6">
        <h1 className="text-2xl">Mes Informations</h1>
        <UserInfo userId={currentUser!.id} />
      </div>
    </main>
  );
};

export default page;
