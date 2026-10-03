import { motion } from "framer-motion";

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  zoom = 0.95,
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: zoom,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}>
      {children}
    </motion.div>
  );
}
