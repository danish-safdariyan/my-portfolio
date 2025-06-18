// src/components/Logo.tsx
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={36}
      height={36}
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
      className="text-white"
    >
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />   
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      {/* Top semi-circle arc */}
      <path
        d="M2 32a30 30 0 0 1 60 0"
        stroke="url(#arcGrad)"
        strokeWidth="2"
        fill="none"
      />

      {/* Serif “D” */}
      <text
        x="15"
        y="45"
        fontFamily="'Playfair Display', serif"
        fontSize="47"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-2"
      >
        D
      </text>

      {/* Serif “S” overlapping */}
      <text
        x="29"
        y="59"
        fontFamily="'Playfair Display', serif"
        fontSize="47"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-6"
      >
        S
      </text>
    </motion.svg>
  );
}
