import { motion } from "framer-motion";
import photo1 from "../assets/photo1.png";
// import CornellMakerLogo from "../assets/logos/cornell-maker-logo.png";

const leadership = [
  {
    org: "Aga Khan Youth and Sports Board",
    logo: photo1,
    role: "Logistics Coordinator",
    date: "Jan 2023 – Jul 2023 · 7 mos",
    location: "USA",
    points: [
      "Managed multi-state logistics for youth sports events.",
      "Coordinated volunteer schedules, communications, and on-site support.",
    ],
  },
  {
    org: "Cornell Maker Club (CMC)",
    logo: photo1,
    role: "Designer & Developer",
    date: "Jan 2024 – May 2025",
    location: "Ithaca, NY",
    points: [
      "Enhanced the club’s website, boosting engagement by 40%.",
      "Designed promotional materials, increasing event attendance by 30%.",
    ],
  },
  // …add Academic Assistant, CSMore, etc.
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-[#131927] via-black to-[#0e0b1f] text-white snap-start"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Leadership & Roles</h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {leadership.map((l, i) => (
          <motion.div
            key={l.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-6"
          >
            <img
              src={l.logo}
              alt={l.org}
              className="w-16 h-16 object-contain rounded-full bg-white/10 p-2 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold">{l.role}</h3>
              <p className="text-gray-400 text-sm mb-1">
                {l.org} · {l.date} · {l.location}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {l.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
