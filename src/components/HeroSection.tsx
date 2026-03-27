import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Terminal, ChevronDown } from "lucide-react";
import { useRef } from "react";
import profileImg from "@/assets/thomas-profile.png";
import TextReveal from "./animations/TextReveal";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 sm:pt-0"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scanline pointer-events-none" style={{ y: bgY }} />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: bgY,
          background:
            "radial-gradient(circle at 50% 50%, hsl(175 80% 50% / 0.05) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 relative z-10"
        style={{ opacity }}
      >
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            className="flex items-center gap-2 justify-center lg:justify-start mb-3 sm:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              ~/portfolio
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4">
            <TextReveal delay={0.3}>Thomas</TextReveal>
            <br />
            <span className="text-gradient-primary">
              <TextReveal delay={0.5}>O'Neil Álvarez</TextReveal>
            </span>
          </h1>

          <motion.div
            className="flex items-center gap-2 justify-center lg:justify-start mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <p className="text-base sm:text-xl text-muted-foreground">
              Ethical Hacker &amp; Pentester
            </p>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Pentester en{" "}
            <span className="text-primary font-semibold">SecureIT</span> ·
            Formador en IA y Ciberseguridad en{" "}
            <span className="text-accent font-semibold">Racks Academy</span> ·
            Ponente en{" "}
            <span className="text-accent font-semibold">RootedCON 2026</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm sm:text-base transition-all hover:glow-primary hover:scale-[1.03] active:scale-[0.98]"
            >
              Sobre mí
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-glow bg-secondary text-secondary-foreground font-semibold text-sm sm:text-base transition-all hover:bg-secondary/80 hover:scale-[1.03] active:scale-[0.98]"
            >
              Certificaciones
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl animate-pulse-glow" />
            <img
              src={profileImg}
              alt="Thomas O'Neil Álvarez"
              className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/40"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
