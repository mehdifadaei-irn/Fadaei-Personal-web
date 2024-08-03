"use client";
import { motion } from "framer-motion";

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#10b981",
        // opacity: 0.2,
      }}
      transition={{
        duration: 4,
        ease: "easeOut",
      }}
      className="aspect-square bg-slate-900 border-neutral-900  z-0"
    />
  );
};
export default Tile;
