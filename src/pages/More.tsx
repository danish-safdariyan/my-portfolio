import { Camera, User, Pen, Briefcase, Image, Heart } from "lucide-react";
import { motion } from "framer-motion";

const tiles = [
  {
    title: "Experience",
    desc: "See my work across research, software, and strategy.",
    icon: <Briefcase size={24} />,
    href: "/#experience",
    internal: true,
  },
  {
    title: "Projects",
    desc: "Explore my portfolio of technical and creative projects.",
    icon: <Pen size={24} />,
    href: "/#projects",
    internal: true,
  },
  {
    title: "Volunteering",
    desc: "Work with youth, community service, and student programs.",
    icon: <Heart size={24} />,
    href: "/volunteering",
  },
  {
    title: "Leadership",
    desc: "Mentorship, organizing, and outreach roles I’ve held.",
    icon: <User size={24} />,
    href: "/leadership",
  },
  {
    title: "Photography",
    desc: "My visual storytelling through photography.",
    icon: <Camera size={24} />,
    href: "/photos",
  },
];

export default function More() {
  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#0e0b1f] via-black to-[#131927] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Learn More About Me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiles.map((tile, i) => (
            <motion.a
              key={i}
              href={tile.href}
              target={tile.internal ? "_self" : "_blank"}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow hover:border-accent transition"
            >
              <div className="text-accent mb-3">{tile.icon}</div>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition">
                {tile.title}
              </h3>
              <p className="text-sm text-gray-400">{tile.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
