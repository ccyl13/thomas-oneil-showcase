import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Eye, Crown, Linkedin } from "lucide-react";

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
    <section id="linkedin" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-primary">Impacto en LinkedIn</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-primary mb-3" />
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm font-semibold text-foreground mt-1">{stat.label}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{stat.sub}</span>
              </motion.div>
            ))}
          </div>

          {/* Visual chart */}
          <motion.div
            className="glass rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Rendimiento del contenido</h3>
                <p className="text-sm text-muted-foreground">6.314.354 impresiones totales</p>
              </div>
            </div>

            {/* Bar chart visualization */}
            <div className="flex items-end gap-1 h-32 sm:h-40">
              {barData.map((bar, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/70 rounded-t-sm hover:bg-primary transition-colors min-w-0"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${bar.h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.03 }}
                />
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Evolución de impresiones · <span className="text-primary font-semibold">The OSINT Sorcerer</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInSection;
