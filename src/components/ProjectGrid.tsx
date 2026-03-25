interface Project {
  title: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    title: "Linear Motor Guidance System (2024)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/76b24a20-fdbb-482c-922c-fc7929146653/IMG_3945.jpg",
    slug: "linear-motor-guidance-system",
  },
  {
    title: "Carbon Fiber Hyperloop Monocoque (2024)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1720497513217-6XCX9OHSYLPOVC025NP7/IMG_9745.jpg",
    slug: "carbon-fiber-hyperloop-frame",
  },
  {
    title: "Tesla Internship I: Cybertruck Metal Forming (2023)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/176fd77f-0181-4812-aa90-91ab4adf3c0c/Screenshot+2025-07-02+171311.jpg",
    slug: "tesla-internship-projects",
  },
  {
    title: "Ergonomic Assembly Tool (2023)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1723934175065-E28OI4603UKN3O37P3K4/Screen+Shot+2024-08-17+at+4.35.47+PM.png",
    slug: "ergonomic-assembly-tool",
  },
  {
    title: "Automotive Offline Process Optimization (2023)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1680917604126-H2W10432U956DH77G48F/Screenshot+2023-04-07+213309.png",
    slug: "toyota",
  },
  {
    title: "Dishwasher Fitting Failure Analysis (2022)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1687652251789-X6TUF38F5WXLMHE8SM8W/Screenshot+2023-06-24+201613.jpg",
    slug: "dishwasher-fitting-failure-analysis",
  },
  {
    title: "Linear Induction Motor Development (2021)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1682384241610-GW5G0YOV33WP6ZNWTS1V/Screenshot+2023-04-24+205622.png",
    slug: "goosev",
  },
  {
    title: "Linear Induction Motor Stabilization System (2022)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1682473150753-TAIY94PN2U0F9JR1QCXP/IMG_3890.jpg",
    slug: "goose-vi-waterloop",
  },
  {
    title: "Compliant Knee Brace (2021)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1679865108925-6AU0BR8P6D9JPGJZKIZZ/KneeBrac6.png",
    slug: "knee-brace",
  },
  {
    title: "4 Bar Linkage Pick and Place Prototype (2024)",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1733331364046-OQJEBMJY57G1HBJD44T3/Screenshot+2024-12-04+000042.png",
    slug: "4-bar-linkage-pick-and-place-prototype",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="overflow-hidden aspect-square mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-foreground text-sm font-bold leading-snug group-hover:opacity-70 transition-opacity">
        {project.title}
      </h3>
    </a>
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
