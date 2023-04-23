import ProjectList from "@/components/projets/ProjectList";
import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import React from "react";

const Projects = async () => {
  const currentUser = await getCurrentUser();

  // If the user is not logged in, redirect them to the login page.
  if (!currentUser) {
    redirect("/");
  }
  return (
    <div>
      Projects <ProjectList userId={currentUser!.id} />
    </div>
  );
};

export default Projects;
