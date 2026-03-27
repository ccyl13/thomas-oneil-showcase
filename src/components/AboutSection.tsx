import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";
import MagneticCard from "./animations/MagneticCard";

const stats = [
  { icon: TrendingUp, label: "N°1 LinkedIn España", value: "2 años" },
  { icon: Globe, label: "N°1 Global Hispano", value: "LinkedIn" },
  { icon: Users, label: "Cuentas alcanzadas", value: "+6M" },
  { icon: Award, label: "Ponente", value: "RootedCON" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div>
          <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-primary inline-block">
            Sobre mí
          </TextReveal>
          <LineReveal />

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mt-6 sm:mt-8">
            <SectionReveal className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed" delay={0.15}>
              <p>
              Soy <strong className="text-foreground">Thomas O'Neil Álvarez</strong>, Ethical
                Hacker y Pentester en{" "}
                <strong className="text-primary">SecureIT</strong>, donde realizo
                auditorías WiFi, ejercicios de Red Team (intrusiones físicas),
                ingeniería social, campañas de phishing, pentesting web y
                auditorías de seguridad para proteger infraestructuras críticas.
              </p>
              <p>
                Como formador en{" "}
                <strong className="text-accent">Racks Academy</strong>, imparto
                formación especializada en Inteligencia Artificial y
                Ciberseguridad, ayudando a profesionales que quieren dar el salto
                a la ciberseguridad desde otras ramas, incluidos perfiles de IA.
              </p>
              <p>
                Durante los últimos{" "}
                <strong className="text-foreground">dos años consecutivos</strong>{" "}
                he sido el perfil <strong className="text-primary">N°1 en LinkedIn España</strong>{" "}
                y a nivel global en habla hispana en el ámbito de la
                ciberseguridad, alcanzando más de{" "}
                <strong className="text-accent">6 millones de cuentas</strong>.
              </p>
            </SectionReveal>

            <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <MagneticCard key={stat.label} intensity={5}>
                  <motion.div
                    className="glass rounded-xl p-4 sm:p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 h-full"
                    variants={staggerItemVariants}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2 sm:mb-3" />
                    <span className="text-lg sm:text-xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </span>
                  </motion.div>
                </MagneticCard>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
