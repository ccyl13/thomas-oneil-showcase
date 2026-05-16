import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, MapPin, Calendar, Star } from "lucide-react";
import { useRef } from "react";
import rootedImg from "@/assets/rooted-con.jpg";
import cyberfight1 from "@/assets/cyberfight1.jpg";
import cyberfight2 from "@/assets/cyberfight2.jpg";
import ciberwall1 from "@/assets/ciberwall1.png";
import ciberwall2 from "@/assets/ciberwall2.png";
import SectionReveal from "./animations/SectionReveal";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";

function TalkCard({
  images,
  title,
  date,
  location,
  description,
  badge,
  highlight,
  delay = 0,
}: {
  images: string[];
  title: string;
  date: string;
  location: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  delay?: number;
}) {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.12, 1]);

  return (
    <SectionReveal delay={delay}>
      <div className={`glass rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-0 ${highlight ? "ring-1 ring-accent/30" : ""}`}>
        {/* Image grid */}
        <div ref={imgRef} className="relative overflow-hidden">
          {images.length === 1 ? (
            <motion.img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover aspect-[4/3] sm:aspect-square lg:aspect-auto"
              style={{ scale: imgScale }}
            />
          ) : (
            <div className="grid grid-cols-2 h-full min-h-[260px]">
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{ scale: imgScale }}
                />
              ))}
            </div>
          )}
          {highlight && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-accent/90 text-background text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
              <Star className="w-3 h-3" />
              Próximamente
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <motion.div className="flex items-center gap-2 mb-3 sm:mb-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">
              {badge || "Speaker"}
            </span>
          </motion.div>

          <motion.h3 className="text-xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            {title}
          </motion.h3>

          <motion.div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{location}</span>
            </div>
          </motion.div>

          <motion.p className="text-sm sm:text-base text-muted-foreground leading-relaxed" initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
            {description}
          </motion.p>
        </div>
      </div>
    </SectionReveal>
  );
}

const SpeakerSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
          Ponencias
        </TextReveal>
        <LineReveal color="bg-accent" />

        <div className="mt-6 sm:mt-8 flex flex-col gap-8 sm:gap-12">

          {/* C1b3rwall 2026 — upcoming, highlighted */}
          <TalkCard
            images={[ciberwall1, ciberwall2]}
            title="C1b3rwall 2026"
            date="2, 3 y 4 de Junio 2026"
            location="Escuela Nacional de Policía, Ávila"
            badge="Próxima Ponencia"
            highlight
            description="C1b3rwall es el congreso de ciberseguridad de la Policía Nacional, uno de los eventos de referencia en España. Expertos, investigadores y fuerzas de seguridad se reúnen para compartir conocimiento sobre amenazas reales, inteligencia y defensa digital. Ser ponente en C1b3rwall es un reconocimiento a la trayectoria y al impacto en la comunidad de seguridad."
            delay={0.05}
          />

          {/* RootedCON 2026 */}
          <TalkCard
            images={[rootedImg]}
            title="RootedCON Madrid 2026"
            date="5–7 Marzo 2026"
            location="Kinépolis, Madrid"
            description="Seleccionado como ponente en RootedCON, el congreso de ciberseguridad más importante de España y uno de los más relevantes de Europa. Una oportunidad para compartir conocimiento e investigación con la comunidad de seguridad."
            delay={0.1}
          />

          {/* Cyber Fight Club Melilla */}
          <TalkCard
            images={[cyberfight1, cyberfight2]}
            title="Cyber Fight Club Melilla"
            date="2025"
            location="Melilla"
            description="Ponencia en el Cyber Fight Club de Melilla, un encuentro de ciberseguridad con formato dinámico donde expertos del sector comparten casos reales, técnicas ofensivas y defensivas en un entorno directo y práctico."
            delay={0.15}
          />

        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
