"use client";

import { useQuery } from "@apollo/client";

import { GET_PROJECTS } from "@/graphql/queries";

interface ProjectListProps {
  userId: string;
}

/**
 * @description The User Info component
 */
const ProjectList: React.FC<ProjectListProps> = ({ userId }) => {
  const { data, loading, error } = useQuery(GET_PROJECTS, {
    variables: { managerId: userId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className="grid grid-cols-3 w-full border-2 border-slate-400">
      {data.projects.map((project: any, key: any) => (
        <div key={key} className="grid grid-cols-3 bg-slate-100">
          {project.name}
          {project.description}
          {project.manager.name}
        </div>
      ))}
    </section>
  );
};

export default ProjectList;
