import { motion } from "framer-motion";
import { Play, Headphones } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import LineReveal from "./animations/LineReveal";
import StaggerContainer, { staggerItemVariants } from "./animations/StaggerContainer";
import volvoLogo from "@/assets/volvo-logo.svg";

const SPOTIFY_EPISODE = "0NOd7sGfVK6S2oPFZMo7Kx";
const SPOTIFY_THUMB   = "https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fd7d5f9849bed66278d133ad8";

const videos = [
  { id: "4MsDBR2wJtY", type: "video" },
  { id: "pvVniGPl2Po", type: "video" },
  { id: "4v4vYMOR72k", type: "video" },
  { id: "cnEf7hAGR8I", type: "video" },
  { id: "d_R4CK5rNy8", type: "short" },
  { id: "hZXC9L74mio", type: "short" },
  { id: "CchIsa11cA0", type: "video" },
];

const ROMUALD_VIDEO_ID = "YTiNopIKiW4";
const ROMUALD_THUMB    = "https://github.com/ccyl13/thomas-oneil-showcase/blob/main/FOTO1234.png?raw=true";

const PodcastsSection = () => (
  <section id="media" className="py-16 sm:py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <TextReveal as="h2" className="text-2xl sm:text-4xl font-bold mb-2 text-gradient-accent inline-block">
        Apariciones en Medios
      </TextReveal>
      <LineReveal color="bg-accent" />

      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">

        {/* ── Volvo podcast card ── */}
        <motion.div
          className="glass rounded-xl sm:rounded-2xl overflow-hidden group"
          variants={staggerItemVariants}
        >
          <a
            href={`https://open.spotify.com/episode/${SPOTIFY_EPISODE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-video"
          >
            {/* Episode artwork as background */}
            <img
              src={SPOTIFY_THUMB}
              alt="Podcast Oficial Volvo España"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Volvo logo — top center */}
            <div className="absolute top-3 left-0 right-0 flex justify-center">
              <div className="bg-[#003057]/80 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                <img src={volvoLogo} alt="Volvo" className="h-5 sm:h-6 w-auto" />
              </div>
            </div>

            {/* Spotify play icon — center on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1DB954]/90 flex items-center justify-center shadow-lg">
                <Headphones className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            {/* Label — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
              <p className="text-[10px] sm:text-xs font-semibold text-white leading-tight line-clamp-2">
                Podcast Oficial de Volvo España
              </p>
              <p className="text-[9px] sm:text-[10px] text-[#1DB954] font-mono mt-0.5 hidden sm:block">
                Escuchar en Spotify →
              </p>
            </div>
          </a>
        </motion.div>

        {/* ── Romuald Fons — custom thumbnail ── */}
        <motion.div
          className="glass rounded-xl sm:rounded-2xl overflow-hidden group"
          variants={staggerItemVariants}
        >
          <a
            href={`https://youtu.be/${ROMUALD_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-video"
          >
            <img
              src={ROMUALD_THUMB}
              alt="Podcast con Romuald Fons"
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

        {/* ── Rest of YouTube videos ── */}
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="glass rounded-xl sm:rounded-2xl overflow-hidden group"
            variants={staggerItemVariants}
          >
            <a
              href={video.type === "short" ? `https://youtube.com/shorts/${video.id}` : `https://youtu.be/${video.id}`}
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

export default PodcastsSection;
