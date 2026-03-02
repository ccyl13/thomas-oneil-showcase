import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import nasaLogo from "@/assets/nasa-logo.png";
import sanseLogo from "@/assets/sanse-logo.png";
import asturiasLogo from "@/assets/asturias-logo.png";

const vulns = [
  {
    org: "NASA",
    description: "Carta de reconocimiento por la identificación responsable de una vulnerabilidad en la infraestructura de la NASA.",
    logo: nasaLogo,
  },
  {
    org: "Ayuntamiento de San Sebastián de los Reyes",
    description: "Vulnerabilidad reportada de forma responsable en la infraestructura del Ayuntamiento de San Sebastián de los Reyes.",
    logo: sanseLogo,
  },
  {
    org: "Principado de Asturias",
    description: "Vulnerabilidad reportada de forma responsable en la infraestructura digital del Principado de Asturias.",
    logo: asturiasLogo,
  },
];

const VulnerabilitiesSection = () => {
  return (
    <section id="vulnerabilities" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-primary">Vulnerabilidades Reportadas</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-3 gap-6">
            {vulns.map((vuln, i) => (
              <motion.div
                key={vuln.org}
                className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center mb-5 overflow-hidden p-4">
                  <img
                    src={vuln.logo}
                    alt={vuln.org}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-accent" />
                  <h3 className="text-lg font-bold text-foreground">{vuln.org}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vuln.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VulnerabilitiesSection;
