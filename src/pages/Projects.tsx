import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";
import Wandering_melody from "../assets/Wandering_melody.png";

const placeholderImg = "/trek-thumbnail.jpg";

const projects = [
  {
    title: "WanderingMelody",
    description:
      "A search engine that takes user inputs—location, age, and genre—then augments them with real-time weather data to deliver music recommendations that feel like a sonic journey through that place.",
    tags: ["Python", "Flask", "TF–IDF", "SVD", "VADER"],
    extra:
      "Theme-aware lyric matching with weather & age sentiment filters, popularity-ranked results, and on-page explanations for each recommendation.",
    github: "https://github.com/danish-safdariyan/wandering-melody",
    image: Wandering_melody,
  },
  {
    title: "Trek Through Infinity",
    description:
      "A niche, OCaml-powered calendar & task-management app with a clean Bogue GUI. Designed to give users a unified view of dates, events, and to-dos—all in one 35-day grid.",
    tags: ["OCaml", "Bogue", "Dune", "OUnit", "YAML"],
    extra:
      "Custom 35-day grid calendar, recurring events, integrated to-do lists, and test-driven design.",
    github: "https://github.com/danish-safdariyan/trek-through-infinity",
    // image: placeholderImg,
  },
  {
    title: "Enteqal",
    description:
      "A ride-sharing platform built for regions without Uber, featuring a Python-powered backend and native iOS (Swift) and Android (Kotlin) clients.",
    tags: ["Python", "Swift", "Kotlin", "Google Maps API", "WebSockets"],
    extra:
      "Ongoing development of core features: auth, map integration, ride matching, fare calculation, real-time tracking, and push notifications. Repo is private until public launch.",
    // github: "",
    // image: placeholderImg,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-[#0e0b1f] via-black to-[#131927] text-white overflow-hidden snap-start"
    >
      {/* ✅ Animated Background Orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-60 h-60 rounded-full bg-[#a855f7] opacity-50 blur-[100px] z-0"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-72 h-72 rounded-full bg-[#6366f1] opacity-40 blur-[120px] z-0"
        animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[35%] w-80 h-80 rounded-full bg-[#f43f5e] opacity-30 blur-[140px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl"
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(proj)}
            className="cursor-pointer bg-white/5 border border-white/10 p-6 rounded-xl shadow hover:border-accent hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-400 text-sm">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal isOpen={!!selected} onClose={() => setSelected(null)} project={selected} />
    </section>
  );
}
