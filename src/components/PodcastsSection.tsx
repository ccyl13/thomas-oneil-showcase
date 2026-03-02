import { motion } from "framer-motion";
import { Play } from "lucide-react";

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
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
