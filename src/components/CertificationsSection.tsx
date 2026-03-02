import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import ewptxBadge from "@/assets/ewptx-badge.png";
import ecpptBadge from "@/assets/ecppt-badge.png";

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
];

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

          <div className="grid md:grid-cols-2 gap-6">
            {certs.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 sm:p-8 group hover:border-primary/50 transition-all block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div className="flex items-start gap-5">
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {cert.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-primary font-medium mb-1">
                      {cert.fullName}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent">
                      <ShieldCheck className="w-3 h-3" />
                      {cert.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
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
