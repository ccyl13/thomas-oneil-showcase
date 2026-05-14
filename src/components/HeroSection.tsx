import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Terminal, ChevronDown, Lock, Wifi } from "lucide-react";
import { useRef, lazy, Suspense } from "react";
import profileImg from "@/assets/thomas-profile.png";
import TextReveal from "./animations/TextReveal";

const HeroCanvas = lazy(() => import("./3d/HeroCanvas"));

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
      {/* Three.js 3D background */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* Scanline overlay */}
      <motion.div className="absolute inset-0 scanline pointer-events-none z-[1]" style={{ y: bgY }} />

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          y: bgY,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(175 80% 50% / 0.07) 0%, transparent 70%)",
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

          {/* Floating badges */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { icon: Lock, label: "Red Team" },
              { icon: Wifi, label: "WiFi Auditing" },
              { icon: Shield, label: "Web Pentesting" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <Icon className="w-3 h-3" />
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
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

        {/* Photo with 3D effect */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative profile-3d">
            {/* Outer ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-lg animate-pulse-glow" />
            {/* Rotating ring */}
            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="absolute -inset-2 rounded-full border border-accent/10 animate-spin-slow-reverse" />
            <img
              src={profileImg}
              alt="Thomas O'Neil Álvarez"
              className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/40 shadow-[0_0_60px_hsl(175_80%_50%/0.2)]"
            />
            {/* Hexagon decorations */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border border-accent/40 rotate-45"
              animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 border border-primary/40 rotate-12"
              animate={{ rotate: [12, 60, 12], scale: [1, 1.15, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
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
