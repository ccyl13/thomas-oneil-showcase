import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";
import MagneticCard from "./animations/MagneticCard";
import ewptxBadge from "@/assets/ewptx-badge.png";
import ecpptBadge from "@/assets/ecppt-badge.png";
import fortinetFcaBadge from "@/assets/fortinet-fca-badge.png";
import fortinetNseBadge from "@/assets/fortinet-nse-badge.png";
import pearsonNetworkBadge from "@/assets/pearson-network-badge.png";
import ciscoJuniorBadge from "@/assets/cisco-junior-badge.png";
import ciscoEthicalBadge from "@/assets/cisco-ethical-badge.png";
import ciscoThreatBadge from "@/assets/cisco-threat-badge.png";
import ciscoIntroBadge from "@/assets/cisco-intro-badge.png";

interface Cert {
  name: string;
  fullName: string;
  difficulty: string;
  badge: string;
  url: string;
  description: string;
}

const certs: Cert[] = [
  { name: "eWPTX", fullName: "Web Application Penetration Tester eXtreme", difficulty: "Avanzado", badge: ewptxBadge, url: "https://certs.ine.com/39f49086-8362-4fa7-8f3a-dc4890d9d146", description: "La certificación más avanzada de pentesting web de INE Security." },
  { name: "eCPPT", fullName: "Certified Professional Penetration Tester", difficulty: "Avanzado", badge: ecpptBadge, url: "https://certs.ine.com/43cfd1ed-31c7-432c-9e88-eb4cc3394d7e#acc.7GobdDm1", description: "Certificación 100% práctica y reconocida internacionalmente en Ethical Hacking y Pentesting profesional." },
  { name: "FCA", fullName: "Fortinet Certified Associate — Cybersecurity", difficulty: "Intermedio", badge: fortinetFcaBadge, url: "https://www.credly.com/badges/5300ccfa-67e8-4fa5-98cc-4eb8feae91e9/linked_in_profile", description: "Certificación de Fortinet que valida conocimientos en fundamentos de ciberseguridad." },
  { name: "NSE — FortiGate", fullName: "Fortinet NSE Exam — FortiGate Operator v7.4", difficulty: "Intermedio", badge: fortinetNseBadge, url: "https://www.credly.com/badges/9513b0d6-17df-4b16-a4ac-327356bd2f7b/linked_in_profile", description: "Certificación de Fortinet que acredita la capacidad de operar dispositivos FortiGate." },
  { name: "Network Security", fullName: "Pearson IT Specialist — Network Security", difficulty: "Intermedio", badge: pearsonNetworkBadge, url: "https://www.credly.com/badges/03c399f5-f7d3-4825-8253-667673f04b56/linked_in_profile", description: "Certificación de Pearson que valida competencias en seguridad de redes." },
  { name: "Junior Analyst", fullName: "Cisco — Junior Cybersecurity Analyst", difficulty: "Principiante", badge: ciscoJuniorBadge, url: "https://www.credly.com/badges/6845a8a2-9873-47e2-b992-2dc79db906f5/linked_in_profile", description: "Ruta de carrera de Cisco Networking Academy en análisis de ciberseguridad." },
  { name: "Ethical Hacker", fullName: "Cisco — Ethical Hacker", difficulty: "Principiante", badge: ciscoEthicalBadge, url: "https://www.credly.com/badges/a17bfd52-55d5-4a4f-96a8-593288f124d6/linked_in_profile", description: "Certificación de Cisco en técnicas y metodologías de hacking ético." },
  { name: "Threat Mgmt", fullName: "Cisco — Cyber Threat Management", difficulty: "Principiante", badge: ciscoThreatBadge, url: "https://www.credly.com/badges/7384f3f0-bfbc-48b6-a279-b9576a71b111/linked_in_profile", description: "Certificación de Cisco sobre gestión y respuesta ante ciberamenazas." },
  { name: "Intro Cyber", fullName: "Cisco — Introduction to Cybersecurity", difficulty: "Principiante", badge: ciscoIntroBadge, url: "https://www.credly.com/badges/9e91f89b-6519-4ed9-bf62-b8aa4b9babe5/linked_in_profile", description: "Certificación introductoria de Cisco sobre fundamentos de ciberseguridad." },
];

const difficultyColor: Record<string, string> = {
  Avanzado: "bg-red-500/10 text-red-400",
  Intermedio: "bg-yellow-500/10 text-yellow-400",
  Principiante: "bg-green-500/10 text-green-400",
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
          Certificaciones
        </TextReveal>
        <LineReveal color="bg-accent" />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-8">
          {certs.map((cert) => (
            <MagneticCard key={cert.name} intensity={5}>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5 group hover:border-primary/50 hover:shadow-[0_0_25px_hsl(175_80%_50%/0.15)] transition-all duration-300 block h-full"
                variants={staggerItemVariants}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/90 p-1.5 sm:p-2 flex items-center justify-center flex-shrink-0">
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="flex items-center gap-1.5 justify-center sm:justify-start mb-0.5 sm:mb-1">
                      <h3 className="text-xs sm:text-base font-bold text-foreground leading-tight truncate">
                        {cert.name}
                      </h3>
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden sm:block" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-primary font-medium mb-1 sm:mb-1.5 line-clamp-1 sm:line-clamp-2">
                      {cert.fullName}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 rounded ${difficultyColor[cert.difficulty] || "bg-accent/10 text-accent"}`}
                    >
                      <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {cert.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 sm:mt-3 leading-relaxed line-clamp-2 sm:line-clamp-3 hidden sm:block">
                  {cert.description}
                </p>
              </motion.a>
            </MagneticCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CertificationsSection;
