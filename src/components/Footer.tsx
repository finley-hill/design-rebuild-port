import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-5xl">
        <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-xl">
          Interested in working together or want to learn more about my projects? Feel free to reach out.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:mark@markwashington.ca"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/markwashington"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        <p className="text-muted-foreground text-xs mt-12">
          © {new Date().getFullYear()} Mark Washington. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
