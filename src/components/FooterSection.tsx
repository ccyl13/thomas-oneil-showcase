import { Github, Linkedin, Instagram, Users, Terminal } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/thomasoneil%C3%A1lvarez/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/thomas_oneil_alvarez_/",
  },
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/ccyl13/",
  },
  {
    icon: Users,
    label: "Skool",
    url: "https://www.skool.com/the-hackers-labs-8479",
  },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            Thomas O'Neil Álvarez © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-lg border-glow bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
