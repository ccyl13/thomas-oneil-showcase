import { motion } from "framer-motion";
import { Mic, MapPin, Calendar } from "lucide-react";
import rootedImg from "@/assets/rooted-con.jpg";

const SpeakerSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-accent">Ponencias</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          <div className="glass rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src={rootedImg}
                alt="Thomas O'Neil Álvarez - Ponente RootedCON Madrid 2026"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Mic className="w-5 h-5 text-accent" />
                <span className="font-mono text-sm text-accent uppercase tracking-widest">
                  Speaker
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                RootedCON Madrid 2026
              </h3>

              <div className="space-y-3 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>5–7 Marzo 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kinépolis, Madrid</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Seleccionado como ponente en <strong className="text-foreground">RootedCON</strong>,
                el congreso de ciberseguridad más importante de España y uno de
                los más relevantes de Europa. Una oportunidad para compartir
                conocimiento e investigación con la comunidad de seguridad.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakerSection;
