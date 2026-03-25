import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-primary text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary underline underline-offset-4 text-sm">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-foreground">
      <Navbar />

      {/* Hero image */}
      <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(0_0%_0%/0.3)]" />
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-70 transition-opacity mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-primary text-3xl md:text-5xl font-bold leading-tight mb-3">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-sm font-medium mb-8">{project.year}</p>

        <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          {project.description}
        </p>

        <h2 className="text-primary text-xl font-bold mb-6">Key Details</h2>
        <ul className="space-y-3 mb-16">
          {project.details.map((detail, i) => (
            <li key={i} className="text-primary/70 text-sm md:text-base flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>

        {project.gallery.length > 1 && (
          <>
            <h2 className="text-primary text-xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
