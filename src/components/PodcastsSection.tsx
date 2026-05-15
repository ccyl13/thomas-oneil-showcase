import { motion } from "framer-motion";
import { Play, Headphones, ExternalLink, Mic } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import SectionReveal from "./animations/SectionReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";

const videos = [
  { id: "4MsDBR2wJtY", type: "video" },
  { id: "pvVniGPl2Po", type: "video" },
  { id: "4v4vYMOR72k", type: "video" },
  { id: "cnEf7hAGR8I", type: "video" },
  { id: "d_R4CK5rNy8", type: "short" },
  { id: "hZXC9L74mio", type: "short" },
  { id: "CchIsa11cA0", type: "video" },
];

// Romuald Fons podcast — embed with specific start time to show a frame with Thomas visible
const ROMUALD_VIDEO_ID = "YTiNopIKiW4";
const ROMUALD_START_SECONDS = 45;

const PodcastsSection = () => {
  return (
    <section id="media" className="py-16 sm:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
          Apariciones en Medios
        </TextReveal>
        <LineReveal color="bg-accent" />

        {/* Romuald Fons highlight — embedded player starting at frame with Thomas */}
        <SectionReveal className="mt-6 sm:mt-8 mb-6 sm:mb-8" delay={0.1}>
          <div className="glass rounded-xl sm:rounded-2xl overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.15)] transition-all duration-300">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${ROMUALD_VIDEO_ID}?start=${ROMUALD_START_SECONDS}&rel=0&modestbranding=1`}
                title="Podcast con Romuald Fons"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm sm:text-lg font-bold text-foreground">Podcast con Romuald Fons</h3>
                  <a
                    href={`https://youtu.be/${ROMUALD_VIDEO_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Entrevistado por <strong className="text-foreground">Romuald Fons</strong>, uno de los referentes de SEO y marketing digital en habla hispana, hablando sobre ciberseguridad, hacking ético y marca personal en LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Volvo España highlight */}
        <SectionReveal className="mb-6 sm:mb-8" delay={0.15}>
          <a
            href="https://open.spotify.com/episode/0NOd7sGfVK6S2oPFZMo7Kx"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-8 group hover:border-[#1DB954]/50 hover:shadow-[0_0_30px_hsl(141_76%_48%/0.15)] transition-all duration-300 block"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#1DB954] flex items-center justify-center flex-shrink-0">
                <Mic className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm sm:text-xl font-bold text-foreground">Podcast Oficial de Volvo España</h3>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden sm:block" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Entrevistado por <strong className="text-foreground">JuanMa Ortega</strong>, ganador de <strong className="text-primary">2 Premios Ondas</strong> y una <strong className="text-accent">Antena de Oro</strong>, hablando sobre ciberseguridad.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[#1DB954] font-medium mt-1.5 sm:mt-2">
                  <Headphones className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Escuchar en Spotify
                </span>
              </div>
            </div>
          </a>
        </SectionReveal>

        {/* Videos */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="glass rounded-xl sm:rounded-2xl overflow-hidden group"
              variants={staggerItemVariants}
            >
              <a
                href={
feat: add Romuald Fons podcast embed with frame preview                    ? `https://youtube.com/shorts/${video.id}`
                    : `https://youtu.be/${video.id}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground ml-0.5" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PodcastsSection;
