import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Terminal, Lock, Wifi, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import profileImg from "@/assets/thomas-profile.png";
import TextReveal from "./animations/TextReveal";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rawScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.18]);
  const scale = useSpring(rawScale, { stiffness: 50, damping: 18 });
  const rawOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const vignetteOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const scrollCTAOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const pts = Array.from({ length: 120 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3, a: Math.random() * 0.5 + 0.1,
      ph: Math.random() * Math.PI * 2,
    }));
    let t = 0; let raf: number;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);
      const bg = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W,H)*0.8);
      bg.addColorStop(0, "#071519"); bg.addColorStop(0.5, "#040d10"); bg.addColorStop(1, "#020c0f");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      const gl = ctx.createRadialGradient(W*0.5, H*0.52, 0, W*0.5, H*0.52, W*0.4);
      gl.addColorStop(0, "rgba(0,255,200,0.06)"); gl.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);
      const gs = 60, ox = (t * 3) % gs, oy = (t * 2) % gs;
      ctx.strokeStyle = "rgba(0,255,200,0.025)"; ctx.lineWidth = 0.4;
      for (let x = -gs; x < W+gs; x+=gs) { ctx.beginPath(); ctx.moveTo(x+ox,0); ctx.lineTo(x+ox,H); ctx.stroke(); }
      for (let y = -gs; y < H+gs; y+=gs) { ctx.beginPath(); ctx.moveTo(0,y+oy); ctx.lineTo(W,y+oy); ctx.stroke(); }
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.ph += 0.015;
        if (p.x<0) p.x=W; if (p.x>W) p.x=0;
        if (p.y<0) p.y=H; if (p.y>H) p.y=0;
        const f = 0.55 + 0.45 * Math.sin(p.ph + t);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(180,255,235,${p.a*f})`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  const badges = [
    { icon: Lock, label: "Red Team" },
    { icon: Wifi, label: "WiFi Auditing" },
    { icon: Shield, label: "Web Pentesting" },
    { icon: Terminal, label: "OSINT" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </motion.div>
      <motion.div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: `radial-gradient(ellipse 70% 55% at ${50+mouseX*8}% ${50+mouseY*6}%, hsl(175 80% 50% / 0.09) 0%, transparent 70%)` }} />
      <motion.div className="absolute inset-0 pointer-events-none z-[2]" style={{ y: midY }}>
        <div className="absolute inset-0 scanline opacity-35" />
      </motion.div>
      <motion.div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20 sm:pt-0 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12" style={{ opacity }}>
        <motion.div className="flex-1 text-center lg:text-left" style={{ x: mouseX * -5, y: mouseY * -3 }}>
          <motion.div className="flex items-center gap-2 justify-center lg:justify-start mb-3 sm:mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">~/portfolio</span>
          </motion.div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4">
            <TextReveal delay={0.3}>Thomas</TextReveal>
            <br />
            <span className="text-gradient-primary"><TextReveal delay={0.5}>O&apos;Neil Álvarez</TextReveal></span>
          </h1>
          <motion.div className="flex items-center gap-2 justify-center lg:justify-start mb-4 sm:mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <p className="text-base sm:text-xl text-muted-foreground">Ethical Hacker &amp; Pentester</p>
          </motion.div>
          <motion.p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed" initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 1 }}>
            Pentester en <span className="text-primary font-semibold">SecureIT</span> · Formador en IA y Ciberseguridad en{" "}
            <span className="text-accent font-semibold">Racks Academy</span> · Ponente en{" "}
            <span className="text-accent font-semibold">RootedCON 2026</span>
          </motion.p>
          <motion.div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6 sm:mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.span key={label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 + i * 0.08 }} whileHover={{ scale: 1.08 }}>
                <Icon className="w-3 h-3" />{label}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="flex flex-wrap gap-3 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }}>
            <a href="#about" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm sm:text-base transition-all hover:glow-primary hover:scale-[1.03] active:scale-[0.98]">Sobre mí</a>
            <a href="#certifications" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-glow bg-secondary text-secondary-foreground font-semibold text-sm sm:text-base transition-all hover:bg-secondary/80 hover:scale-[1.03] active:scale-[0.98]">Certificaciones</a>
          </motion.div>
        </motion.div>
        <motion.div className="flex-shrink-0 relative" style={{ x: mouseX * 10, y: mouseY * 6 }} initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <motion.div className="absolute -inset-8 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, hsl(175 80% 50% / 0.16) 0%, transparent 70%)", filter: "blur(24px)" }} animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <div className="absolute -inset-3 rounded-full">
            <motion.div className="absolute inset-0 rounded-full border border-primary/25" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
            <motion.div className="absolute -inset-2 rounded-full border border-accent/15" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-lg animate-pulse-glow" />
          </div>
          <motion.div style={{ scale }}>
            <img src={profileImg} alt="Thomas O'Neil Álvarez" className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/40 shadow-[0_0_80px_hsl(175_80%_50%/0.25)]" />
          </motion.div>
          <motion.div className="absolute -top-4 -right-4 w-8 h-8 border border-accent/40 rotate-45" animate={{ rotate: [45, 90, 45], scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute -bottom-3 -left-3 w-5 h-5 border border-primary/30 rotate-45" animate={{ rotate: [45, 0, 45], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        </motion.div>
      </motion.div>
      <motion.div className="absolute inset-0 z-20 pointer-events-none" style={{ opacity: vignetteOpacity, background: "radial-gradient(ellipse 50% 40% at 50% 50%, transparent 0%, hsl(220 15% 4% / 0.95) 100%)" }} />
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} style={{ opacity: scrollCTAOpacity }}>
        <span className="text-[10px] font-mono text-muted-foreground tracking-[3px] uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
