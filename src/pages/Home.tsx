import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 snap-start overflow-hidden bg-gradient-to-br from-[#0e0b1f] via-black to-[#131927] text-white">

      {/* ✅ Animated Background Orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-60 h-60 rounded-full bg-[#a855f7] opacity-60 blur-[100px] z-0"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[40%] right-[5%] w-72 h-72 rounded-full bg-[#6366f1] opacity-50 blur-[100px] z-0"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full bg-[#f43f5e] opacity-40 blur-[160px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 👇 Main Hero Text Content */}
      <div className="z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
        >
          Danish Safdariyan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-8"
        >
          A software/AI/ML engineer who loves solving meaningful problems with code, data, and a bit of curiosity.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block text-sm px-6 py-3 bg-accent text-white rounded-full shadow hover:scale-105 transition"
        >
          ↓ View My Work
        </motion.a>
      </div>
    </section>
  );
}
