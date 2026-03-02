import { motion } from "framer-motion";
import { ExternalLink, Shield, Users } from "lucide-react";
import incibeLogo from "@/assets/incibe-logo.png";

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-primary">Proyectos y Colaboraciones</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <motion.a
              href="https://ccyl13.github.io/kit-seguridad/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 group hover:border-primary/50 transition-all block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  CyberLab — Kit de Seguridad
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suite de herramientas de ciberseguridad que se ejecuta 100% en
                local en tu navegador.
              </p>
            </motion.a>

            <motion.div
              className="glass rounded-2xl p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="w-40 h-20 flex items-center justify-center mb-5 overflow-hidden">
                <img
                  src={incibeLogo}
                  alt="INCIBE - Instituto Nacional de Ciberseguridad"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Cibercooperante</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cibercooperante del Instituto Nacional de Ciberseguridad (INCIBE), colaborando en la concienciación y divulgación de la ciberseguridad.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
