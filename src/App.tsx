import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/experience";
import Skills from "./pages/Skills";

// our new pages
import More from "./pages/More";
import Volunteering from "./pages/Volunteering";
import Leadership from "./pages/Leadership";
import Photos from "./pages/Photos";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
              <section id="home" className="snap-start"><Home /></section>
              <section id="about" className="snap-start"><About /></section>
              <section id="skills" className="snap-start"><Skills /></section>
              <section id="projects" className="snap-start"><Projects /></section>
              <section id="experience" className="snap-start"><Experience /></section>
              <section id="contact" className="snap-start"><Contact /></section>
            </main>
          }
        />

        {/* our “More” landing page */}
        <Route path="/more" element={<More />} />

        {/* the sub‐pages */}
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/blog" element={<Blog />} />

        {/* catch-all → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}