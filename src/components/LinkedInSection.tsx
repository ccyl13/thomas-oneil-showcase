import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Eye, Crown, Linkedin } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";
import SectionReveal from "./animations/SectionReveal";
import MagneticCard from "./animations/MagneticCard";

const stats = [
  { icon: Crown, value: "#1", label: "LinkedIn España", sub: "2 años consecutivos" },
  { icon: TrendingUp, value: "#1", label: "Global Hispano", sub: "Ciberseguridad" },
  { icon: Eye, value: "6.3M+", label: "Impresiones", sub: "Contenido acumulado" },
  { icon: BarChart3, value: "140K+", label: "Pico diario", sub: "Impresiones máximas" },
];

const barData = [
  { h: 8 }, { h: 12 }, { h: 18 }, { h: 25 }, { h: 35 },
  { h: 55 }, { h: 70 }, { h: 65 }, { h: 80 }, { h: 60 },
  { h: 75 }, { h: 90 }, { h: 85 }, { h: 100 }, { h: 78 },
  { h: 68 }, { h: 82 }, { h: 75 }, { h: 60 }, { h: 55 },
  { h: 45 }, { h: 50 }, { h: 42 }, { h: 38 },
];

const LinkedInSection = () => {
  return (
    <section id="linkedin" className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div>
          <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-primary inline-block">
            Impacto en LinkedIn
          </TextReveal>
          <LineReveal />

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 mt-6 sm:mt-8">
            {stats.map((stat) => (
              <MagneticCard key={stat.label} intensity={5}>
                <motion.div
                  className="glass rounded-xl sm:rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 h-full"
                  variants={staggerItemVariants}
                >
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary mb-1.5 sm:mb-3" />
                  <span className="text-xl sm:text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-[10px] sm:text-sm font-semibold text-foreground mt-0.5 sm:mt-1">{stat.label}</span>
                  <span className="text-[9px] sm:text-xs text-muted-foreground mt-0.5">{stat.sub}</span>
                </motion.div>
              </MagneticCard>
            ))}
          </StaggerContainer>

          {/* Visual chart */}
          <SectionReveal delay={0.2}>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A66C2]" />
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-foreground">Rendimiento del contenido</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">6.314.354 impresiones totales</p>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-[2px] sm:gap-1 h-24 sm:h-40">
                {barData.map((bar, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-primary/70 rounded-t-[1px] sm:rounded-t-sm hover:bg-primary transition-colors min-w-0"
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${bar.h}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                ))}
              </div>

              <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4 text-center">
                Evolución de impresiones · <span className="text-primary font-semibold">The OSINT Sorcerer</span>
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
