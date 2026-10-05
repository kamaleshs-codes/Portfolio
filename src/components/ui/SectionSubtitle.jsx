import { motion } from "framer-motion";

export default function SectionSubtitle({ children }) {
  return (
    <motion.h3
      className='mt-8 mb-4 w-fit rounded-full border border-accent-dark px-6 py-2 text-md font-bold text-accent-dark'
      animate={{
        backgroundColor: [
          "rgba(0, 0, 0, 0)",
          "rgba(148, 255, 176, 1)",
          "rgba(148, 255, 176, 1)",
          "rgba(0, 0, 0, 0)",
        ],
      }}
      transition={{
        duration: 12,
        times: [0, 0.625, 0.625, 1],
        repeat: Infinity,
        ease: "easeInOut",
      }}>
      {children}
    </motion.h3>
  );
}
