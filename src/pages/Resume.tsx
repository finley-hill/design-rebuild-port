import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const experiences = [
  {
    role: "Manufacturing Engineering Intern",
    company: "Tesla",
    period: "May 2023 – Aug 2023",
    points: [
      "Supported Cybertruck body-in-white stamping die development and tryout",
      "Analyzed metal forming simulations and correlated with physical results",
      "Optimized stamping process parameters to reduce scrap rate",
    ],
  },
  {
    role: "Process Engineering Intern",
    company: "Toyota Motor Manufacturing",
    period: "Jan 2023 – Apr 2023",
    points: [
      "Optimized offline inspection processes, reducing cycle time by 20%",
      "Implemented standardized work procedures for quality stations",
      "Presented improvement proposals to plant management",
    ],
  },
  {
    role: "Mechanical Lead",
    company: "Waterloop (Hyperloop Team)",
    period: "Sep 2021 – Apr 2024",
    points: [
      "Led mechanical subsystem design for hyperloop pod competition vehicle",
      "Designed carbon fiber monocoque and linear motor guidance system",
      "Managed a team of 10 engineers across multiple sub-projects",
    ],
  },
];

const education = [
  {
    degree: "BASc Mechanical Engineering",
    school: "University of Waterloo",
    period: "2020 – 2025",
    details: "Co-operative Education Program",
  },
];

const skills = [
  "SolidWorks",
  "CATIA",
  "ANSYS",
  "MATLAB",
  "Python",
  "GD&T",
  "FEA / CFD",
  "DFM / DFA",
  "CNC Machining",
  "3D Printing",
  "Composite Layup",
  "Injection Molding",
  "Sheet Metal Forming",
  "Root Cause Analysis",
  "Project Management",
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-foreground">
      <Navbar />

      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-70 transition-opacity mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-primary text-3xl md:text-5xl font-bold mb-16">Resume</h1>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-primary text-xs font-bold uppercase tracking-widest mb-8 border-b border-primary/20 pb-3">
            Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-primary text-lg font-bold">{exp.role}</h3>
                  <span className="text-muted-foreground text-sm">{exp.period}</span>
                </div>
                <p className="text-primary/60 text-sm font-medium mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-primary/70 text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-primary text-xs font-bold uppercase tracking-widest mb-8 border-b border-primary/20 pb-3">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i}>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-primary text-lg font-bold">{edu.degree}</h3>
                <span className="text-muted-foreground text-sm">{edu.period}</span>
              </div>
              <p className="text-primary/60 text-sm">{edu.school}</p>
              <p className="text-primary/50 text-sm">{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-primary text-xs font-bold uppercase tracking-widest mb-8 border-b border-primary/20 pb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-primary/30 text-primary text-xs font-medium px-4 py-2 hover:bg-primary/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Resume;
