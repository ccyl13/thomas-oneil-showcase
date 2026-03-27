import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";
import rootedImg from "@/assets/rooted-con.jpg";
import SectionReveal from "./animations/SectionReveal";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";

const SpeakerSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
          Ponencias
        </TextReveal>
        <LineReveal color="bg-accent" />

        <SectionReveal className="mt-6 sm:mt-8" delay={0.1}>
          <div className="glass rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-0">
            <div ref={imgRef} className="relative aspect-[4/3] sm:aspect-square lg:aspect-auto overflow-hidden">
              <motion.img
                src={rootedImg}
                alt="Thomas O'Neil Álvarez - Ponente RootedCON Madrid 2026"
                className="w-full h-full object-cover"
                style={{ scale: imgScale }}
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                className="flex items-center gap-2 mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">
                  Speaker
                </span>
              </motion.div>

              <motion.h3
                className="text-xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                RootedCON Madrid 2026
              </motion.h3>

              <motion.div
                className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>5–7 Marzo 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Kinépolis, Madrid</span>
                </div>
              </motion.div>

              <motion.p
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Seleccionado como ponente en <strong className="text-foreground">RootedCON</strong>,
                el congreso de ciberseguridad más importante de España y uno de
                los más relevantes de Europa. Una oportunidad para compartir
                conocimiento e investigación con la comunidad de seguridad.
              </motion.p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default SpeakerSection;
