import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image?: string;
    github?: string;
    tags: string[];
    extra: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl bg-[#121223] text-white rounded-2xl border border-white/10 p-6 relative overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-6 text-xl text-gray-400 hover:text-white">
              ×
            </button>

            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            {/* Optional: Project image */}
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            )}

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-400">{project.extra}</p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="inline-block mt-6 text-accent font-medium text-sm hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
