import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import ewptxBadge from "@/assets/ewptx-badge.png";
import ecpptBadge from "@/assets/ecppt-badge.png";
import fortinetFcaBadge from "@/assets/fortinet-fca-badge.png";
import fortinetNseBadge from "@/assets/fortinet-nse-badge.png";
import pearsonNetworkBadge from "@/assets/pearson-network-badge.png";
import ciscoJuniorBadge from "@/assets/cisco-junior-badge.png";
import ciscoEthicalBadge from "@/assets/cisco-ethical-badge.png";
import ciscoThreatBadge from "@/assets/cisco-threat-badge.png";
import ciscoIntroBadge from "@/assets/cisco-intro-badge.png";

const certs = [
  {
    name: "eWPTX",
    fullName: "Web Application Penetration Tester eXtreme",
    difficulty: "Avanzado",
    badge: ewptxBadge,
    url: "https://certs.ine.com/39f49086-8362-4fa7-8f3a-dc4890d9d146",
    description:
      "La certificación más avanzada de pentesting web de INE Security. Valida habilidades avanzadas para realizar pruebas de penetración en profundidad en aplicaciones web modernas, incluyendo ataques de inyección avanzados, bypass de autenticación y explotación de lógica de negocio.",
  },
  {
    name: "eCPPT",
    fullName: "Certified Professional Penetration Tester",
    difficulty: "Avanzado",
    badge: ecpptBadge,
    url: "https://certs.ine.com/43cfd1ed-31c7-432c-9e88-eb4cc3394d7e#acc.7GobdDm1",
    description:
      "Certificación 100% práctica y reconocida internacionalmente en Ethical Hacking y Pentesting profesional. Cubre desde la enumeración hasta la post-explotación, incluyendo pivoting de red y análisis de infraestructura.",
  },
  {
    name: "FCA",
    fullName: "Fortinet Certified Associate — Cybersecurity",
    difficulty: "Intermedio",
    badge: fortinetFcaBadge,
    url: "https://www.credly.com/badges/5300ccfa-67e8-4fa5-98cc-4eb8feae91e9/linked_in_profile",
    description:
      "Certificación de Fortinet que valida conocimientos en fundamentos de ciberseguridad y el ecosistema de seguridad Fortinet.",
  },
  {
    name: "NSE — FortiGate Operator",
    fullName: "Fortinet NSE Exam — FortiGate Operator v7.4",
    difficulty: "Intermedio",
    badge: fortinetNseBadge,
    url: "https://www.credly.com/badges/9513b0d6-17df-4b16-a4ac-327356bd2f7b/linked_in_profile",
    description:
      "Certificación de Fortinet que acredita la capacidad de operar y gestionar dispositivos FortiGate para la seguridad de redes.",
  },
  {
    name: "IT Specialist — Network Security",
    fullName: "Pearson IT Specialist — Network Security",
    difficulty: "Intermedio",
    badge: pearsonNetworkBadge,
    url: "https://www.credly.com/badges/03c399f5-f7d3-4825-8253-667673f04b56/linked_in_profile",
    description:
      "Certificación de Pearson que valida competencias en seguridad de redes, incluyendo firewalls, VPNs y detección de intrusiones.",
  },
  {
    name: "Junior Cybersecurity Analyst",
    fullName: "Cisco — Junior Cybersecurity Analyst Career Path",
    difficulty: "Principiante",
    badge: ciscoJuniorBadge,
    url: "https://www.credly.com/badges/6845a8a2-9873-47e2-b992-2dc79db906f5/linked_in_profile",
    description:
      "Ruta de carrera de Cisco Networking Academy que cubre los fundamentos del análisis de ciberseguridad a nivel junior.",
  },
  {
    name: "Ethical Hacker",
    fullName: "Cisco — Ethical Hacker",
    difficulty: "Principiante",
    badge: ciscoEthicalBadge,
    url: "https://www.credly.com/badges/a17bfd52-55d5-4a4f-96a8-593288f124d6/linked_in_profile",
    description:
      "Certificación de Cisco que valida conocimientos en técnicas y metodologías de hacking ético.",
  },
  {
    name: "Cyber Threat Management",
    fullName: "Cisco — Cyber Threat Management",
    difficulty: "Principiante",
    badge: ciscoThreatBadge,
    url: "https://www.credly.com/badges/7384f3f0-bfbc-48b6-a279-b9576a71b111/linked_in_profile",
    description:
      "Certificación de Cisco sobre gestión y respuesta ante ciberamenazas.",
  },
  {
    name: "Introduction to Cybersecurity",
    fullName: "Cisco — Introduction to Cybersecurity",
    difficulty: "Principiante",
    badge: ciscoIntroBadge,
    url: "https://www.credly.com/badges/9e91f89b-6519-4ed9-bf62-b8aa4b9babe5/linked_in_profile",
    description:
      "Certificación introductoria de Cisco sobre los fundamentos de la ciberseguridad.",
  },
];

const difficultyColor: Record<string, string> = {
  Avanzado: "bg-red-500/10 text-red-400",
  Intermedio: "bg-yellow-500/10 text-yellow-400",
  Principiante: "bg-green-500/10 text-green-400",
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-accent">Certificaciones</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 group hover:border-primary/50 transition-all block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/90 p-2 flex items-center justify-center flex-shrink-0">
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-foreground leading-tight">
                        {cert.name}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <p className="text-xs text-primary font-medium mb-1.5 line-clamp-2">
                      {cert.fullName}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded ${difficultyColor[cert.difficulty] || "bg-accent/10 text-accent"}`}
                    >
                      <ShieldCheck className="w-3 h-3" />
                      {cert.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
