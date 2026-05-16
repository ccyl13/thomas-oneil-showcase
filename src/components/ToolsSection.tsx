import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Lock, Users } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import SectionReveal from "./animations/SectionReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";
import incibeLogo from "@/assets/incibe-logo.png";

const projects = [
  {
    icon: Shield,
    name: "Pentestify",
    description: "Plataforma de automatización de pentesting web. Permite lanzar auditorías de seguridad sobre aplicaciones web de forma guiada, generando informes detallados con vulnerabilidades encontradas, su severidad y recomendaciones de remediación.",
    tags: ["Python", "Pentesting", "Automatización", "Web Security"],
    link: "https://github.com/ccyl13/Pentestify",
    color: "text-primary",
    glow: "hover:border-primary/40 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.1)]",
  },
  {
    icon: Lock,
    name: "WordPress Security Guard",
    description: "Plugin de seguridad para WordPress que audita la instalación en busca de configuraciones inseguras, plugins vulnerables, permisos incorrectos y exposición de información sensible. Genera un informe de hardening con acciones correctivas.",
    tags: ["PHP", "WordPress", "Security", "Plugin"],
    link: "https://github.com/ccyl13/wordpress-security-guard",
    color: "text-accent",
    glow: "hover:border-accent/40 hover:shadow-[0_0_20px_hsl(200_80%_50%/0.1)]",
  },
  {
    icon: Users,
    logo: incibeLogo,
    name: "Cibercooperante INCIBE",
    description: "Colaboración activa como Cibercooperante del Instituto Nacional de Ciberseguridad (INCIBE), contribuyendo a la concienciación y divulgación de la ciberseguridad entre ciudadanos y empresas en España.",
    tags: ["INCIBE", "Divulgación", "Ciberseguridad", "España"],
    color: "text-yellow-400",
    glow: "hover:border-yellow-400/40 hover:shadow-[0_0_20px_hsl(45_90%_50%/0.1)]",
  },
];

const ToolsSection = () => (
  <section id="projects" className="py-16 sm:py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
        Proyectos y Colaboraciones
      </TextReveal>
      <LineReveal color="bg-accent" />

      <SectionReveal className="mt-4 mb-8 sm:mb-10" delay={0.1}>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Estos son solo algunos de los proyectos que he desarrollado. Puedes ver más en{" "}
          <a href="https://github.com/ccyl13" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">
            mi GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </SectionReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.name}
              className={`glass rounded-2xl p-6 border border-white/5 transition-all duration-300 ${project.glow} flex flex-col gap-4`}
              variants={staggerItemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`p-2.5 rounded-xl bg-white/5 flex-shrink-0 ${project.color}`}>
                  {project.logo ? (
                    <img src={project.logo} alt={project.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                    <Github className="w-3.5 h-3.5" /> Ver repo
                  </a>
                )}
              </div>
              <div>
                <h3 className={`font-bold text-base mb-2 ${project.color}`}>{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);

export default ToolsSection;
