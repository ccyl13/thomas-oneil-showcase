import { motion } from "framer-motion";
import { Play, Headphones, ExternalLink } from "lucide-react";

const videos = [
  { id: "4MsDBR2wJtY", type: "video" },
  { id: "pvVniGPl2Po", type: "video" },
  { id: "4v4vYMOR72k", type: "video" },
  { id: "cnEf7hAGR8I", type: "video" },
  { id: "d_R4CK5rNy8", type: "short" },
  { id: "hZXC9L74mio", type: "short" },
  { id: "CchIsa11cA0", type: "video" },
];

const podcasts = [
  {
    title: "Podcast Oficial de Volvo España",
    description: "Participación en el podcast oficial de Volvo España hablando sobre ciberseguridad.",
    url: "https://open.spotify.com/episode/0NOd7sGfVK6S2oPFZMo7Kx",
    platform: "Spotify",
  },
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

          {/* Podcasts */}
          <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
            <Headphones className="w-5 h-5 text-[#1DB954] inline-block mr-2 -mt-1" />
            Podcasts
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {podcasts.map((podcast, i) => (
              <motion.a
                key={podcast.title}
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 sm:p-6 group hover:border-[#1DB954]/50 transition-all block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground text-sm sm:text-base">{podcast.title}</h4>
                    <span className="text-xs text-muted-foreground">{podcast.platform}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{podcast.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastsSection;
