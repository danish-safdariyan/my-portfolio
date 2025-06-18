import { motion } from "framer-motion";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
// …import as many as you like

const photos = [photo1, photo2 /* …etc */];

export default function Photos() {
  return (
    <section
      id="photos"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-black via-[#0e0b1f] to-black text-white snap-start"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Photography</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={src}
              alt={`Photo ${i + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
