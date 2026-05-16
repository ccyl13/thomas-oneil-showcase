import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mic, MapPin, Calendar, Star } from "lucide-react";
import { useRef } from "react";
import rootedImg from "@/assets/rooted-con.jpg";
import cyberfight1 from "@/assets/cyberfight1.jpg";
import cyberfight2 from "@/assets/cyberfight2.jpg";
import ciberwall1 from "@/assets/ciberwall1.png";
import ciberwall2 from "@/assets/ciberwall2.png";
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
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rawScale = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.93, 1, 1, 0.95]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.14, 0.86, 1], [0, 1, 1, 0.6]);
  const cardScale = useSpring(rawScale, { stiffness: 55, damping: 18 });

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: cardScale, opacity: rawOpacity }}
      initial={{ y: 60, filter: "blur(8px)" }}
      whileInView={{ y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={`rounded-2xl overflow-hidden glass border border-white/5 flex flex-col ${
        highlight ? "ring-1 ring-accent/40 shadow-[0_0_50px_hsl(80_70%_55%/0.07)]" : ""
      }`}
    >
      {/* ── Cinematic image area ── */}
      <div className="relative h-56 sm:h-72 overflow-hidden flex-shrink-0">
        {/* Parallax wrapper — taller than the clip box so there's room to shift */}
        <motion.div
          className="absolute left-0 right-0"
          style={{ y: imgY, top: "-40px", bottom: "-40px" }}
        >
          {images.length === 1 ? (
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex h-full">
              {images.map((img, i) => (
                <div key={i} className="flex-1 relative overflow-hidden">
                  {i > 0 && (
                    <div className="absolute inset-y-0 left-0 w-px bg-white/20 z-10" />
                  )}
                  <img
                    src={img}
                    alt={`${title} ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent pointer-events-none" />

        {/* Highlight badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-accent/90 backdrop-blur-sm text-background text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
            {highlight && <Star className="w-3 h-3" />}
            {badge}
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <Mic className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest">Speaker</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* ── Info area ── */}
      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

const SpeakerSection = () => (
  <section id="speaker" className="py-16 sm:py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
        Ponencias
      </TextReveal>
      <LineReveal color="bg-accent" />

      <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        <TalkCard
          images={[ciberwall1, ciberwall2]}
          title="C1b3rwall 2026"
          date="2, 3 y 4 de Junio 2026"
          location="Escuela Nacional de Policía, Ávila"
          badge="Próxima Ponencia"
          highlight
          description="C1b3rwall es el congreso de ciberseguridad de la Policía Nacional, uno de los eventos de referencia en España. Expertos, investigadores y fuerzas de seguridad comparten conocimiento sobre amenazas reales, inteligencia y defensa digital."
          delay={0.05}
        />
        <TalkCard
          images={[rootedImg]}
          title="RootedCON Madrid 2026"
          date="5–7 Marzo 2026"
          location="Kinépolis, Madrid"
          description="Seleccionado como ponente en RootedCON, el congreso de ciberseguridad más importante de España y uno de los más relevantes de Europa. Una oportunidad para compartir investigación con la comunidad de seguridad."
          delay={0.1}
        />
        <TalkCard
          images={[cyberfight1, cyberfight2]}
          title="Cyber Fight Club Melilla"
          date="8, 9 y 10 de Julio de 2026"
          location="Melilla"
          description="Ponencia en el Cyber Fight Club de Melilla, un encuentro de ciberseguridad con formato dinámico donde expertos del sector comparten casos reales, técnicas ofensivas y defensivas en un entorno directo y práctico."
          delay={0.15}
        />
      </div>
    </div>
  </section>
);

export default SpeakerSection;
