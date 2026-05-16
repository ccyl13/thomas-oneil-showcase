import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import SectionReveal from "./animations/SectionReveal";
import ucoLogo from "@/assets/logo-uco-transparent.png";
import policiaLogo from "@/assets/policia nacional.jpg";

const entries = [
  {
    org: "UCO — Guardia Civil",
    logo: ucoLogo,
    transparent: true,
    role: "Investigador colaborador",
    description:
      "Colaboración reportando varios fallos de seguridad en diferentes organizaciones de interés para la Unidad Central Operativa de la Guardia Civil.",
  },
  {
    org: "Policía Nacional",
    logo: policiaLogo,
    transparent: false,
    role: "Ponente invitado",
    description:
      "Ponente en la Escuela Nacional de Policía de Ávila, en el marco del congreso de ciberseguridad C1b3rwall, organizado por la Policía Nacional.",
  },
];

const LawEnforcementSection = () => (
  <section id="instituciones" className="py-16 sm:py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <TextReveal
        as="h2"
        className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-primary inline-block"
      >
        Fuerzas y Cuerpos de Seguridad
      </TextReveal>
      <LineReveal />

      <SectionReveal delay={0.05}>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl">
          Colaboraciones y participaciones con las instituciones de seguridad del Estado.
        </p>
      </SectionReveal>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
        {entries.map((entry, i) => (
          <SectionReveal key={entry.org} delay={0.08 + i * 0.1}>
            <motion.div
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.1)] transition-all duration-400 flex flex-col h-full"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              {/* Logo area */}
              <div
                className={`w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden ${
                  entry.transparent ? "bg-white/4 p-8" : "p-0"
                }`}
              >
                <img
                  src={entry.logo}
                  alt={entry.org}
                  className={`object-contain ${
                    entry.transparent
                      ? "max-h-36 sm:max-h-44 drop-shadow-[0_0_20px_rgba(0,255,200,0.15)]"
                      : "w-full h-full object-cover"
                  }`}
                />
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                    {entry.role}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {entry.org}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default LawEnforcementSection;
