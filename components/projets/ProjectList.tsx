"use client";

import { useQuery } from "@apollo/client";

import { GET_ACTIVE_PROJECTS } from "@/graphql/queries";

interface ProjectListProps {
  userId: string;
}

const PROJECT_TYPE: any = {
  INTERNAL: "bg-yellow-50",
  EXTERNAL: "bg-white",
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
        <div key={key} className="grid grid-cols-2 w-full">
          <div className={`${projectType(project.projectType)}`}>
            {project.name}
          </div>

          <div>{project.client.name}</div>
        </div>
      ))}
    </section>
  );
};

export default ProjectList;
