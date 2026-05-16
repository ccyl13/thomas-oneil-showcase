import { Github, Linkedin, Instagram, Users, Shield } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/thomasoneil%C3%A1lvarez/" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/thomas_oneil_alvarez_/" },
  { icon: Github, label: "GitHub", url: "https://github.com/ccyl13/" },
  { icon: Users, label: "Skool", url: "https://www.skool.com/the-hackers-labs-8479" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-8 sm:py-12 px-4">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-4 sm:gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <span className="font-mono text-xs sm:text-sm text-muted-foreground">
            Thomas O'Neil Álvarez © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-glow bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
