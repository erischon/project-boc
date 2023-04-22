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
    <main>
      <UserInfo userId={currentUser!.id} />
    </main>
  );
};

export default page;
