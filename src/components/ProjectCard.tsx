import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  extra: string;
};

export default function ProjectCard({ title, description, tags, extra }: Project) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.15 }}
        className="cursor-pointer bg-[#111] border border-white/10 p-6 rounded-xl shadow-md hover:shadow-accent/30 hover:border-accent transition-all"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold group-hover:text-accent transition">
            {title}
          </h3>
          <span className="text-sm text-accent font-medium">More →</span>
        </div>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded bg-white/10 text-white">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-[#1a1a1a] max-w-lg w-full rounded-lg p-6 relative border border-accent shadow-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-4 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            <p className="text-sm text-gray-400">{extra}</p>
          </div>
        </div>
      )}
    </>
  );
}
