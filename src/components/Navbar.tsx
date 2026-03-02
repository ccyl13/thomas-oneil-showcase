import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Github, Linkedin } from "lucide-react";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Proyectos", href: "#tools" },
  { label: "Vulnerabilidades", href: "#vulnerabilities" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Medios", href: "#media" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">
            Thomas <span className="text-primary">O'Neil</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://www.linkedin.com/in/thomasoneil%C3%A1lvarez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ccyl13/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden glass border-t border-border px-4 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <a
                href="https://www.linkedin.com/in/thomasoneil%C3%A1lvarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ccyl13/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
