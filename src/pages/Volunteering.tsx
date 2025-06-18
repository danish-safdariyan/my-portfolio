import { motion } from "framer-motion";
import photo1 from "../assets/photo1.png";
// import JubileeLogo from "../assets/logos/jubilee-logo.png";

const volunteering = [
  {
    org: "Cornell University",
    logo: photo1,
    role: "Mentor, Prepare Preorientation Program",
    date: "Jul 2023 – Aug 2023 · 2 mos",
    category: "Education",
    points: [
      `Program Overview: The "Prepare" program is a preorientation initiative designed to help international
       first-year and transfer undergraduate students transition smoothly to life at Cornell and in the U.S., 
       offering early move-in, mentorship, and resources before the standard new student orientation.`,
      `Mentor Role: As a mentor, I guided small groups of international students—both virtually and in person—
       helping them adjust to college life, navigate campus resources, and foster connections with peers.`,
    ],
  },
  {
    org: "Jubilee Monuments Corp.",
    logo: photo1,
    role: "Cornell University Representative, Ismaili Student Network (ISN)",
    date: "Aug 2022 – Aug 2023 · 1 yr 1 mo",
    category: "Community",
    points: [
      `Program Overview: The Ismaili Student Network (ISN) is a student-led org supporting 3,500+ Ismaili Muslim 
       students across 460+ U.S. campuses. It fosters community, career exploration, leadership & faith-based events.`,
      `Rep Role: Connected Cornell’s Ismaili students with the broader ISN network, facilitated communication 
       with regional boards, and encouraged engagement in professional & personal development opportunities.`,
      `Impact: Helped create a stronger sense of belonging, leadership growth, and academic/personal support 
       for participants.`,
    ],
  },
  // …you can add more entries here
];

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-[#0e0b1f] via-black to-[#131927] text-white snap-start"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Volunteering</h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {volunteering.map((v, i) => (
          <motion.div
            key={v.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-6"
          >
            <img
              src={v.logo}
              alt={v.org}
              className="w-16 h-16 object-contain rounded-full bg-white/10 p-2 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold">{v.role}</h3>
              <p className="text-gray-400 text-sm mb-1">
                {v.org} · {v.date}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {v.points.map((pt, j) => (
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
