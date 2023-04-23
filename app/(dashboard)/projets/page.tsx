import { redirect } from "next/navigation";

import ProjectList from "@/components/projets/ProjectList";
import getCurrentUser from "@/actions/getCurrentUser";

const Projects = async () => {
  const currentUser = await getCurrentUser();

  // If the user is not logged in, redirect them to the login page.
  if (!currentUser) {
    redirect("/");
  }
  return (
    <main className="h-full w-full">
      <div className="ml-6">
        <h1 className="text-2xl mb-6">Projets</h1>
        <div>
          <ProjectList userId={currentUser!.id} />
        </div>
      </div>
    </main>
  );
};

export default Projects;
