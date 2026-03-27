import { motion } from "framer-motion";
import { ExternalLink, Shield, Users } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";
import MagneticCard from "./animations/MagneticCard";
import incibeLogo from "@/assets/incibe-logo.png";

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-primary inline-block">
          Proyectos y Colaboraciones
        </TextReveal>
        <LineReveal />

        <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mt-6 sm:mt-8">
          <MagneticCard intensity={6}>
            <motion.a
              href="https://ccyl13.github.io/kit-seguridad/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 sm:p-8 group hover:border-primary/50 hover:shadow-[0_0_25px_hsl(175_80%_50%/0.15)] transition-all duration-300 block h-full"
              variants={staggerItemVariants}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <h3 className="text-base sm:text-xl font-bold text-foreground">
                  CyberLab — Kit de Seguridad
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Suite de herramientas de ciberseguridad que se ejecuta 100% en
                local en tu navegador.
              </p>
            </motion.a>
          </MagneticCard>

          <MagneticCard intensity={6}>
            <motion.div
              className="glass rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center hover:border-accent/50 hover:shadow-[0_0_25px_hsl(80_70%_55%/0.15)] transition-all duration-300 h-full"
              variants={staggerItemVariants}
            >
              <div className="w-32 sm:w-40 h-16 sm:h-20 flex items-center justify-center mb-4 sm:mb-5 overflow-hidden">
                <img
                  src={incibeLogo}
                  alt="INCIBE - Instituto Nacional de Ciberseguridad"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Users className="w-4 h-4 text-accent" />
                <h3 className="text-base sm:text-lg font-bold text-foreground">Cibercooperante</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Cibercooperante del Instituto Nacional de Ciberseguridad (INCIBE), colaborando en la concienciación y divulgación de la ciberseguridad.
              </p>
            </motion.div>
          </MagneticCard>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ToolsSection;
