import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectCard = ({ project }: { project: typeof projects[number] }) => {
  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden aspect-square mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-foreground text-sm font-bold leading-snug group-hover:opacity-70 transition-opacity">
        {project.title} ({project.year})
      </h3>
    </Link>
  );
};

const ProjectGrid = () => {
  return (
    <section id="projectlist" className="px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
