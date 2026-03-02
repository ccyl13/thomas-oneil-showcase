import { motion } from "framer-motion";
import nasaLogo from "@/assets/nasa-logo.png";
import sanseLogo from "@/assets/sanse-logo.png";
import asturiasLogo from "@/assets/asturias-logo.png";
import dockerlabsLogo from "@/assets/dockerlabs-logo.png";
import dailymotionLogo from "@/assets/dailymotion-logo.png";
import contentsquareLogo from "@/assets/contentsquare-logo.png";

const vulns = [
  {
    org: "NASA",
    description: "Carta de reconocimiento por la identificación responsable de una vulnerabilidad en la infraestructura de la NASA.",
    logo: nasaLogo,
  },
  {
    org: "Dailymotion",
    description: "Vulnerabilidad reportada de forma responsable en la plataforma de vídeo Dailymotion.",
    logo: dailymotionLogo,
  },
  {
    org: "Contentsquare",
    description: "Vulnerabilidad reportada de forma responsable en la plataforma de análisis digital Contentsquare.",
    logo: contentsquareLogo,
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
  {
    org: "DockerLabs",
    description: "Carta de reconocimiento por participación responsable en el programa VDP (Vulnerability Disclosure Program) de DockerLabs.",
    logo: dockerlabsLogo,
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {vulns.map((vuln, i) => (
              <motion.div
                key={vuln.org}
                className="glass rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white flex items-center justify-center mb-4 sm:mb-5 overflow-hidden p-3 sm:p-4">
                  <img
                    src={vuln.logo}
                    alt={vuln.org}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-foreground mb-2">{vuln.org}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
