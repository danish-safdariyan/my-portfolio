import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="relative min-h-screen px-6 py-24 flex flex-col lg:flex-row items-center justify-center gap-16 overflow-hidden bg-black text-white transition-colors duration-300">

      {/* ✅ Animated Background Orbs */}
      <motion.div
        className="absolute top-[8%] left-[6%] w-56 h-56 rounded-full bg-indigo-500 opacity-40 blur-[100px] z-0"
        animate={{ y: [0, 25, 0], x: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[50%] right-[0%] w-72 h-72 rounded-full bg-sky-500 opacity-35 blur-[120px] z-0"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-12%] left-[28%] w-[480px] h-[480px] rounded-full bg-pink-500 opacity-30 blur-[160px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* IMAGE BLOCK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="z-10"
      >
        <img
          src={profile}
          alt="Danish"
          className="w-60 h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl border-4 border-white dark:border-white/20"
        />
      </motion.div>

      {/* TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-2xl z-10"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hi, I'm Danish — a <strong className="text-indigo-500 dark:text-indigo-400">Computer Science</strong> student at Cornell University (Class of 2026) who enjoys building software that solves real problems. I'm especially interested in areas like <strong className="text-indigo-500 dark:text-indigo-400">machine learning</strong> and <strong className="text-indigo-500 dark:text-indigo-400">intelligent systems</strong>, where code and curiosity come together. I like figuring out how things work under the hood, and I care about writing <strong className="text-indigo-500 dark:text-indigo-400">clean</strong>, <strong className="text-indigo-500 dark:text-indigo-400">reliable</strong> software that people can actually use. As a first-generation college student from an underrepresented background, I'm especially passionate about using tech to build accessible, meaningful tools that make a difference.
        </p>

        <div className="text-sm text-gray-600 dark:text-gray-400 mt-6 italic">
          Fun fact: Probably overthinking this “fun fact” right now.
        </div>

        {/* ======= About me more!! to be added later ====== */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          {/* Curious about my leadership, community work, or creative side?{" "}
          <a href="/more" className="text-accent hover:underline">Learn more about me →</a> */}
        </p>
      </motion.div>
    </section>
  );
}
