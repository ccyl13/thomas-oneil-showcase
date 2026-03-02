import { motion } from "framer-motion";
import { ExternalLink, Lock, Code, Hash, Shield, Network, Eye, Key } from "lucide-react";

const tools = [
  { name: "Inspector JWT", desc: "Decodifica y analiza tokens JWT", icon: Key },
  { name: "Generador de Hash", desc: "SHA-256, SHA-1, CRC-32 y más", icon: Hash },
  { name: "Cifrado Clásico", desc: "César, Hill, Vigenère", icon: Lock },
  { name: "Codificador", desc: "Base64, URL, HEX, Morse, Entidades", icon: Code },
  { name: "Laboratorio Regex", desc: "Prueba expresiones regulares", icon: Shield },
  { name: "IP / Subredes", desc: "Calculadora CIDR y análisis de red", icon: Network },
  { name: "Esteganografía", desc: "Oculta datos en imágenes con ZKP", icon: Eye },
  { name: "Contraseñas", desc: "Analizador de fortaleza y generador", icon: Lock },
];

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
            <span className="text-gradient-primary">Herramientas</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground mb-8 max-w-2xl">
            <strong className="text-foreground">Kit de Seguridad (CyberLab)</strong> — Suite de
            herramientas de análisis de seguridad que se ejecutan 100% en local
            en tu navegador. Ningún dato se envía a servidores externos.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="glass rounded-xl p-5 group hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <tool.icon className="w-5 h-5 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-muted-foreground">{tool.desc}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="https://ccyl13.github.io/kit-seguridad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:glow-primary"
          >
            Abrir Kit de Seguridad
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
