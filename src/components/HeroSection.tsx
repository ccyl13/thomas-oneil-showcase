import { motion } from "framer-motion";
import { Shield, Terminal, ChevronDown } from "lucide-react";
import profileImg from "@/assets/thomas-profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background grid */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(175 80% 50% / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-primary tracking-widest uppercase">
              ~/portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            Thomas
            <br />
            <span className="text-gradient-primary">O'Neil Álvarez</span>
          </h1>

          <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
            <Shield className="w-5 h-5 text-accent" />
            <p className="text-lg sm:text-xl text-muted-foreground">
              Ethical Hacker &amp; Pentester
            </p>
          </div>

          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Pentester en{" "}
            <span className="text-primary font-semibold">SecureIT</span> ·
            Formador en IA y Ciberseguridad en{" "}
            <span className="text-accent font-semibold">Racks Academy</span> ·
            Ponente en{" "}
            <span className="text-accent font-semibold">RootedCON 2026</span>
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:glow-primary"
            >
              Sobre mí
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-glow bg-secondary text-secondary-foreground font-semibold transition-all hover:bg-secondary/80"
            >
              Certificaciones
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl animate-pulse-glow" />
            <img
              src={profileImg}
              alt="Thomas O'Neil Álvarez"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-2 border-primary/40"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
