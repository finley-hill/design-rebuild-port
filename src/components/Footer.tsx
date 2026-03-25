import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-current/20 px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="opacity-60 text-sm md:text-base mb-8 max-w-xl">
          Interested in working together or want to learn more about my projects? Feel free to reach out.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:finleycooperhill@gmail.com"
            className="inline-flex items-center gap-2 border border-current px-6 py-3 text-sm font-medium hover:opacity-70 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/finley-hill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        <p className="opacity-40 text-xs mt-12">
          © {new Date().getFullYear()} Finley Hill. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
