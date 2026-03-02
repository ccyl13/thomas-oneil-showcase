import { motion } from "framer-motion";
import { Play, Headphones, ExternalLink, Mic } from "lucide-react";

const videos = [
  { id: "4MsDBR2wJtY", type: "video" },
  { id: "pvVniGPl2Po", type: "video" },
  { id: "4v4vYMOR72k", type: "video" },
  { id: "cnEf7hAGR8I", type: "video" },
  { id: "d_R4CK5rNy8", type: "short" },
  { id: "hZXC9L74mio", type: "short" },
  { id: "CchIsa11cA0", type: "video" },
];

const PodcastsSection = () => {
  return (
    <section id="media" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gradient-accent">Apariciones en Medios</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          {/* Volvo España highlight */}
          <motion.a
            href="https://open.spotify.com/episode/0NOd7sGfVK6S2oPFZMo7Kx"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 sm:p-8 group hover:border-[#1DB954]/50 hover:shadow-[0_0_30px_hsl(141_76%_48%/0.15)] transition-all block mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1DB954] flex items-center justify-center flex-shrink-0">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Podcast Oficial de Volvo España</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Entrevistado por <strong className="text-foreground">JuanMa Ortega</strong>, ganador de <strong className="text-primary">2 Premios Ondas</strong> y una <strong className="text-accent">Antena de Oro</strong>, hablando sobre ciberseguridad en el podcast oficial de Volvo España.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#1DB954] font-medium mt-2">
                  <Headphones className="w-3.5 h-3.5" />
                  Escuchar en Spotify
                </span>
              </div>
            </div>
          </motion.a>

          {/* Videos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                className="glass rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <a
                  href={
                    video.type === "short"
                      ? `https://youtube.com/shorts/${video.id}`
                      : `https://youtu.be/${video.id}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastsSection;
