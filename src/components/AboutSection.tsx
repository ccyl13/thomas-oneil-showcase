import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-primary">Sobre mí</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 sm:mb-8" />

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Soy <strong className="text-foreground">Thomas O'Neil Álvarez</strong>, Ethical
                Hacker y Pentester en{" "}
                <strong className="text-primary">SecureIT</strong>, donde me
                especializo en pruebas de penetración y auditorías de seguridad
                para proteger infraestructuras críticas.
              </p>
              <p>
                Como formador en{" "}
                <strong className="text-accent">Racks Academy</strong>, imparto
                formación especializada en Inteligencia Artificial y
                Ciberseguridad, ayudando a la próxima generación de
                profesionales de seguridad.
              </p>
              <p>
                Durante los últimos{" "}
                <strong className="text-foreground">dos años consecutivos</strong>{" "}
                he sido el perfil <strong className="text-primary">N°1 en LinkedIn España</strong>{" "}
                y a nivel global en habla hispana en el ámbito de la
                ciberseguridad, alcanzando más de{" "}
                <strong className="text-accent">6 millones de cuentas</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-4 sm:p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2 sm:mb-3" />
                  <span className="text-lg sm:text-xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
