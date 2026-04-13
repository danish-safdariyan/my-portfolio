import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    org: "Cornell Digital Agriculture Hackathon",
    role: "Most Innovative Idea: Winner",
    date: "March 2026",
    location: "Ithaca, NY",
    points: [
      "Built a low-cost AI-powered pest detection system using acoustic sensors and CNN-based audio classification to enable event-driven pest detection in real time, reducing reliance on scheduled pesticide spraying.",
    ],
  },
  {
    org: "HODL Talent",
    role: "Software Engineer Intern",
    date: "May 2025 – August 2025",
    location: "Remote",
    points: [
      "Built a production-grade Python system aggregating 1,000+ job listings per day, reducing manual data collection by 70% and supporting internal recruiting workflows.",
      "Designed an LLM-powered pipeline using OpenAI API, embeddings, and Pydantic to extract structured data and match resumes to roles, achieving ~85% agreement with recruiter evaluations.",
      "Scaled ingestion throughput by 10x through asynchronous scraping, API key rotation, and automated retry logic under rate limits.",
    ],
  },
  {
    org: "Cornell University, Conference & Event Services",
    role: "Student Developer",
    date: "Apr 2024 – Present",
    location: "Ithaca, NY",
    points: [
      "Developed custom event registration forms and web pages using HTML, CSS, and JavaScript in Cvent and WordPress, reducing form completion time by 25% across 100+ university events.",
      "Built Excel-based reporting dashboards with formulas and pivot tables to aggregate registration data from StarRez, automating manual reporting workflows and enabling real-time event performance tracking.",
    ],
  },
  {
    org: "FinTech at Cornell",
    role: "Student Fellow & Research Assistant",
    date: "Jan 2024 – Present",
    location: "Remote",
    points: [
      "Conducted research at the intersection of AI/ML, finance, and reinforcement-learning optimization.",
      "Analyzed Chainlink's business model and explored decentralized oracle mechanisms.",
      "Leveraged big-data and machine-learning techniques for quantitative insights across ongoing FinTech projects.",
    ],
  },
  {
    org: "Millennium Management LLC",
    role: "Analyst, FinTech Challenge",
    date: "Apr 2024",
    location: "New York, NY",
    points: [
      "Engineered and back-tested a Python + NumPy trading strategy, outperforming the S&P 500 by 142%.",
      "Optimized a CAPM-based portfolio, achieving a Sharpe Ratio 389% above benchmark.",
    ],
  },
  {
    org: "Aga Khan Youth and Sports Board",
    role: "Logistics Coordinator",
    date: "Jan – Jul 2023",
    location: "USA",
    points: [
      "Managed logistics for multi-state youth sports events with 550+ participants.",
      "Coordinated transportation, lodging, and meals, reducing costs by 20%.",
    ],
  },
];


export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-[#0e0b1f] via-black to-[#131927] text-white overflow-hidden snap-start"
    >
      {/* ✅ Animated Background Orbs */}
      {/* Top-left purple orb */}
      <motion.div
        className="will-change absolute top-[10%] left-[-12%] w-72 h-72 rounded-full bg-[#a855f7] opacity-45 blur-[120px] z-0"
        animate={{ y: [0, 20, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top-right indigo orb */}
      <motion.div
        className="will-change absolute top-[15%] right-[-12%] w-64 h-64 rounded-full bg-[#6366f1] opacity-40 blur-[100px] z-0"
        animate={{ y: [0, -15, 0], x: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom-left red orb */}
      <motion.div
        className="will-change absolute bottom-[15%] left-[-12%] w-80 h-80 rounded-full bg-[#f43f5e] opacity-30 blur-[140px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom-right purple orb */}
      <motion.div
        className="will-change absolute bottom-[20%] right-[-12%] w-56 h-56 rounded-full bg-[#a855f7] opacity-35 blur-[110px] z-0"
        animate={{ scale: [1, 1.05, 1], x: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid-left teal orb */}
      <motion.div
        className="will-change absolute top-[50%] left-[5%] w-56 h-56 rounded-full bg-[#14b8a6] opacity-30 blur-[100px] z-0"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid-right amber orb */}
      <motion.div
        className="will-change absolute bottom-[50%] right-[5%] w-64 h-64 rounded-full bg-[#facc15] opacity-25 blur-[120px] z-0"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Center subtle indigo orb */}
      <motion.div
        className="will-change absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#6366f1] opacity-10 blur-[180px] z-0"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="will-change relative z-10 max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        {/* Timeline wrapper with vertical line */}
        <div className="will-change relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-white/10 pl-10 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.org}-${exp.role}-${exp.date}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="will-change relative group before:absolute before:top-6 before:left-[-1.35rem] before:w-4 before:h-4 before:rounded-full before:bg-black before:border-2 before:border-accent shadow before:z-10"
            >
              <div className="will-change bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out group hover:border-accent hover:bg-white/10 hover:scale-[1.015]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <CalendarDays size={14} />
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-gray-300">{exp.org}</p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </p>
                <ul className="mt-3 text-sm text-gray-300 list-disc list-inside space-y-1">
                  {exp.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

