import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    org: "HODL Talent",
    role: "Software Engineer Intern",
    date: "Jun 2025 – Present · 1 mo",
    location: "Remote",
    points: [
      "Architected a modular web-scraping framework (Python + Selenium) that ingests thousands of remote-developer openings and exports type-safe JSON for analytics.",
      "Enhanced title and location parsing for Google Custom Search results—raising data-accuracy rates and reducing manual clean-up time.",
      "Curated a ranked pipeline of remote PHP-engineer roles, powering HODL Talent’s candidate-matching beta.",
      "Set up one-click VS Code debug profiles and Pydantic validation, slashing iteration cycles on scraper fixes.",
      "Prototyped an LLM-driven layer that tags, de-duplicates, and recommends jobs—laying the groundwork for AI-assisted placement at scale."
    ],
  },
  {
    org: "FinTech at Cornell",
    role: "Student Fellow & Research Assistant",
    date: "Jan 2025 – Present · 6 mos",
    location: "Remote",
    points: [
      "Conducted research at the intersection of AI/ML, finance, and reinforcement-learning optimization.",
      "Analyzed Chainlink’s business model and explored decentralized oracle mechanisms.",
      "Explored applications of robust control in corporate finance decision-making.",
    ],
  },
  {
    org: "FinTech at Cornell",
    role: "Research Assistant",
    date: "Jan 2024 – Present · 1 yr 6 mos",
    location: "Remote",
    points: [
      "Collaborated with faculty on financial-technology research within Cornell’s FinTech Initiative.",
      "Performed data analysis and literature reviews to support ongoing FinTech projects.",
      "Leveraged big-data and machine-learning techniques for quantitative insights.",
    ],
  },
  {
    org: "Rewriting the Code",
    role: "Member",
    date: "Oct 2024 – Present · 9 mos",
    location: "Remote",
    points: [
      "Active participant in a tech community dedicated to diversity, mentorship, and leadership.",
    ],
  },
  {
    org: "Cornell University",
    role: "Student Developer",
    date: "Apr 2024 – Present · 1 yr 3 mos",
    location: "Ithaca, NY",
    points: [
      "Designed and implemented registration portals and custom apps for Conference & Event Services.",
      "Enhanced user experience and efficiency—cut processing time by 25%.",
      "Trained staff on StarRez and internal platforms to ensure smooth adoption.",
    ],
  },
  {
    org: "Cornell University",
    role: "Academic Assistant",
    date: "Jun 2023 – Oct 2024 · 1 yr 5 mos",
    location: "Ithaca, NY",
    points: [
      "Assisted prospective students and parents with admissions inquiries, improving communication workflows.",
    ],
  },
  {
    org: "Goldman Sachs",
    role: "Virtual Insight Series Participant",
    date: "May – Jun 2024 · 2 mos",
    location: "Remote",
    points: [
      "Completed the four-week Virtual Insight Series, exploring Goldman Sachs’ firm culture and business divisions.",
      "Participated in virtual interactive sessions on Investment Banking, Global Markets, Asset Management, and Engineering.",
      "Attended workshops on resume-building, interview preparation, and career opportunities at Goldman Sachs.",
      "Connected with recruiters and affinity group members to expand professional network.",
    ],
  },
  {
    org: "Millennium",
    role: "Analyst, FinTech Challenge",
    date: "Apr 2024 · 1 mo",
    location: "New York, NY",
    points: [
      "Engineered and back-tested a Python + NumPy trading strategy, outperforming the S&P 500 by 142%.",
      "Optimized a CAPM-based portfolio, achieving a Sharpe Ratio 389% above benchmark.",
    ],
  },
  {
    org: "Aga Khan Youth and Sports Board",
    role: "Logistics Coordinator",
    date: "Jan – Jul 2023 · 7 mos",
    location: "USA",
    points: [
      "Managed logistics for multi-state youth sports events with 550+ participants.",
      "Coordinated transportation, lodging, and meals—reducing costs by 20%.",
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
              key={i}
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

