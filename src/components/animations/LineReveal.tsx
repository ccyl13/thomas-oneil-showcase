import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LineRevealProps {
  className?: string;
  color?: string;
  delay?: number;
}

const LineReveal = ({ className = "w-16 h-1 rounded-full", color = "bg-primary", delay = 0.3 }: LineRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={`${className} ${color}`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      />
    </div>
  );
};

export default LineReveal;
