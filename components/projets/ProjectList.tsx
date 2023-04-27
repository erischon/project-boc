"use client";

import { useQuery } from "@apollo/client";

import { GET_ACTIVE_PROJECTS } from "@/graphql/queries";
import Link from "next/link";

interface ProjectListProps {
  userId: string;
}

const PROJECT_TYPE: any = {
  INTERNAL: { acronym: "IN", color: "bg-yellow-50" },
  EXTERNAL: { acronym: "EX", color: "bg-white" },
};

/**
 * @description The User Info component
 */
const ProjectList: React.FC<ProjectListProps> = ({ userId }) => {
  const { data, loading, error } = useQuery(GET_ACTIVE_PROJECTS, {
    variables: { getActiveUserProjectsId: userId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const { getActiveUserProjects } = data;

  console.log("projects", getActiveUserProjects);

  const projectType = (type: string) => {
    return PROJECT_TYPE[type] || "bg-red-100";
  };

  return (
    <section className="w-full">
      {data.getActiveUserProjects.map((project: any, key: any) => (
        <div key={key} className="flex gap-2 w-full">
          <div
            className={`${
              projectType(project.projectType).color
            } w-6 flex items-center justify-center text-xs font-semibold`}
          >
            {projectType(project.projectType).acronym}
          </div>

          <div>
            <Link href="">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm font-extralight">{project.client.name}</p>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectList;
