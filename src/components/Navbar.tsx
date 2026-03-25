import { Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
      <div className="flex items-center gap-8">
        <a href="/" className="text-primary font-bold text-xl md:text-2xl tracking-tight">
          Mark Washington
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#projectlist"
            className="text-primary text-sm font-medium hover:opacity-70 transition-opacity underline underline-offset-4"
          >
            Projects
          </a>
          <a
            href="/resume"
            className="text-primary text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Resume
          </a>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/markwashington"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:opacity-70 transition-opacity"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" strokeWidth={1.5} />
      </a>
    </nav>
  );
};

export default Navbar;
