import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const SectionReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.96,
    y: direction === "up" ? 70 : 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)", scale: 1 }
          : {}
      }
      transition={{
        duration: 0.9,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
        filter: { duration: 0.7 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
