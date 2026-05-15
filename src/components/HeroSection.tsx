import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Terminal, Lock, Wifi, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState, lazy, Suspense } from "react";
import profileImg from "@/assets/thomas-profile.png";
import TextReveal from "./animations/TextReveal";

const HeroCanvas = lazy(() => import("./3d/HeroCanvas"));

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.18]);
  const scale = useSpring(rawScale, { stiffness: 50, damping: 18 });
  const rawOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const vignetteOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const scrollCTAOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const badges = [
    { icon: Lock, label: "Red Team" },
    { icon: Wifi, label: "WiFi Auditing" },
    { icon: Shield, label: "Web Pentesting" },
    { icon: Terminal, label: "OSINT" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 0: Three.js deep background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </motion.div>

      {/* Layer 1: Mouse-reactive radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(ellipse 70% 55% at ${50 + mouseX * 8}% ${50 + mouseY * 6}%, hsl(175 80% 50% / 0.09) 0%, transparent 70%)`,
        }}
      />

      {/* Layer 2: Grid + scanlines mid-parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ y: midY }}
      >
        <div className="absolute inset-0 scanline opacity-35" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Layer 3: Floating ambient orbs — mouse depth */}
      <motion.div
        className="absolute pointer-events-none z-[3] top-1/4 right-1/4 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(175 80% 50% / 0.07) 0%, transparent 70%)",
          filter: "blur(48px)",
          x: mouseX * -22,
          y: mouseY * -16,
        }}
      />
      <motion.div
        className="absolute pointer-events-none z-[3] bottom-1/3 left-1/4 w-52 h-52 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(120 60% 50% / 0.04) 0%, transparent 70%)",
          filter: "blur(32px)",
          x: mouseX * 16,
          y: mouseY * 12,
        }}
      />

      {/* MAIN CONTENT — fades + blurs on scroll */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20 sm:pt-0 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12"
        style={{ opacity }}
      >
        {/* TEXT — subtle mouse shift */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          style={{ x: mouseX * -5, y: mouseY * -3 }}
        >
          <motion.div
            className="flex items-center gap-2 justify-center lg:justify-start mb-3 sm:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">~/portfolio</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4">
            <TextReveal delay={0.3}>Thomas</TextReveal>
            <br />
            <span className="text-gradient-primary">
              <TextReveal delay={0.5}>O&apos;Neil Álvarez</TextReveal>
            </span>
          </h1>

          <motion.div
            className="flex items-center gap-2 justify-center lg:justify-start mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <p className="text-base sm:text-xl text-muted-foreground">Ethical Hacker &amp; Pentester</p>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Pentester en <span className="text-primary font-semibold">SecureIT</span> · Formador en IA y Ciberseguridad en{" "}
            <span className="text-accent font-semibold">Racks Academy</span> · Ponente en{" "}
            <span className="text-accent font-semibold">RootedCON 2026</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08 }}
                whileHover={{ scale: 1.08 }}
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
            <a href="#about" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm sm:text-base transition-all hover:glow-primary hover:scale-[1.03] active:scale-[0.98]">
              Sobre mí
            </a>
            <a href="#certifications" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-glow bg-secondary text-secondary-foreground font-semibold text-sm sm:text-base transition-all hover:bg-secondary/80 hover:scale-[1.03] active:scale-[0.98]">
              Certificaciones
            </a>
          </motion.div>
        </motion.div>

        {/* PHOTO — zoom on scroll + mouse parallax depth */}
        <motion.div
          className="flex-shrink-0 relative"
          style={{ x: mouseX * 10, y: mouseY * 6 }}
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Pulsing light halo behind photo */}
          <motion.div
            className="absolute -inset-8 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, hsl(175 80% 50% / 0.16) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating rings */}
          <div className="absolute -inset-3 rounded-full">
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full border border-accent/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-lg animate-pulse-glow" />
          </div>

          {/* Profile photo — zooms in slightly on scroll */}
          <motion.div style={{ scale }}>
            <img
              src={profileImg}
              alt="Thomas O'Neil Álvarez"
              className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/40 shadow-[0_0_80px_hsl(175_80%_50%/0.25)]"
            />
          </motion.div>

          {/* Corner deco */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 border border-accent/40 rotate-45"
            animate={{ rotate: [45, 90, 45], scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-3 -left-3 w-5 h-5 border border-primary/30 rotate-45"
            animate={{ rotate: [45, 0, 45], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Scene transition vignette */}
fix: resolve framer-motion duplicate animate — cinematic parallax hero        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          opacity: vignetteOpacity,
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, transparent 0%, hsl(220 15% 4% / 0.95) 100%)",
        }}
      />

      {/* Scroll CTA */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: scrollCTAOpacity }}
      >
        <span className="text-[10px] font-mono text-muted-foreground tracking-[3px] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
