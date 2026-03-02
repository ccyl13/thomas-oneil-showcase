import { motion } from "framer-motion";
import { ExternalLink, Shield } from "lucide-react";

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
            <span className="text-gradient-primary">Proyectos</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <motion.a
            href="https://ccyl13.github.io/kit-seguridad/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-8 sm:p-10 group hover:border-primary/50 transition-all block max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                CyberLab — Kit de Seguridad
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Suite de herramientas de ciberseguridad que se ejecuta 100% en
              local en tu navegador. Incluye inspector JWT, generador de
              hashes, cifrado clásico, codificadores, laboratorio regex,
              calculadora de subredes, esteganografía y más. Ningún dato se
              envía a servidores externos.
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
