import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen snap-start flex items-center justify-center px-4 py-24 bg-gradient-to-br from-[#1e1b2e] via-[#0f0f1a] to-[#1b1f32] text-white overflow-hidden"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-15%] w-96 h-96 bg-purple-700 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-pink-500 opacity-20 blur-[100px] rounded-full z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }}
        className="will-change relative z-10 w-full max-w-5xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Let’s Connect</h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Reach out to discuss opportunities, ideas, or just to chat. I'm always open to good conversations.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: About You */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-accent" size={22} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-gray-300">New York, United States</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="text-accent" size={22} />
              <div>
                <h4 className="font-semibold">Availability</h4>
                <p className="text-sm text-gray-300">Open to internships & New Grad (2026) SWE roles</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="text-accent" size={22} />
              <div>
                <h4 className="font-semibold">Let’s Chat</h4>
                <p className="text-sm text-gray-300">Open to collabs or fun ideas</p>
              </div>
            </div>
          </div>

          {/* Right: Links + Email */}
          <div className="space-y-6">
            <a
              href="mailto:danish@example.com"
              className="block w-full bg-accent/10 hover:bg-accent/20 text-white text-sm px-6 py-4 rounded-lg border border-accent/30 transition text-center"
            >
              ✉️ ds968@cornell.edu
            </a>
            <a
              href="https://github.com/danish-safdariyan"
              target="_blank"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition"
            >
              <Github className="text-accent" />
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-gray-400">@danish-safdariyan</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/danishsafdariyan"
              target="_blank"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition"
            >
              <Linkedin className="text-accent" />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-400">@danishsafdariyan</div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
