import { motion } from "framer-motion";
import { BadgeCheck, Zap, Code2 } from "lucide-react";

const skills = [
  {
    category: "Machine Learning",
    icon: Zap,
    list: [
      { name: "PyTorch", level: "Advanced", note: "Deep learning + custom models" },
      { name: "TensorFlow", level: "Proficient", note: "Model building + deployment" },
      { name: "scikit-learn", level: "Advanced", note: "Classical ML, pipelines" },
    ],
  },
  {
    category: "Backend & Infra",
    icon: BadgeCheck,
    list: [
      { name: "Flask", level: "Proficient", note: "APIs, microservices" },
      { name: "Git/GitHub", level: "Expert", note: "Version control" },
      { name: "AWS", level: "Beginner", note: "S3, Lambda, CloudWatch" },
    ],
  },
  {
    category: "Programming Languages",
    icon: Code2,
    list: [
      { name: "Python", level: "Expert", note: "ML, web, data" },
      { name: "JavaScript", level: "Proficient", note: "Frontend + logic" },
      { name: "Java", level: "Proficient", note: "OOP, backend" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-[#0e0b1f] via-black to-[#131927] text-white overflow-hidden snap-start"
    >
      {/* ✅ Animated Background Orbs */}
      <motion.div
        className="will-change absolute top-[12%] left-[8%] w-64 h-64 rounded-full bg-[#818cf8] opacity-40 blur-[120px] z-0"
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="will-change absolute bottom-[-6%] right-[10%] w-72 h-72 rounded-full bg-[#d946ef] opacity-35 blur-[140px] z-0"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="will-change absolute bottom-[-14%] left-[32%] w-[500px] h-[500px] rounded-full bg-[#f43f5e] opacity-25 blur-[180px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
        className="will-change relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center"
      >
        {/* Title */}
        <h2 className="will-change text-4xl md:text-5xl font-bold text-center mb-14">Skills & Technologies</h2>

        {/* Skill Cards */}
        <div className="will-change grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {skills.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="will-change rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-lg hover:shadow-2xl hover:border-accent transition"
            >
              <div className="flex items-center gap-3 mb-5">
                <section.icon className="text-accent" />
                <h3 className="text-lg font-semibold">{section.category}</h3>
              </div>
              <ul className="space-y-4">
                {section.list.map((item, idx) => (
                  <li key={idx}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white/90">{item.name}</span>
                      <span className="text-xs text-accent bg-white/10 px-2 py-1 rounded-full">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{item.note}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}