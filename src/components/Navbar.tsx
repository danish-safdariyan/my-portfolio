import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Assuming you have a Logo component or SVG

// import { Sun, Moon } from "lucide-react";


export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="
        fixed top-0 w-full z-50 
        bg-black/80 backdrop-blur-md border-b border-white/10 
        px-6 py-4 flex justify-between items-center 
        text-sm font-medium text-white
      ">
      {/*  Brand  */}
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <span className="hidden sm:inline font-bold text-lg">
          Danish Safdariyan
        </span>
      </Link>

      <div className="flex items-center gap-6 text-gray-700 dark:text-gray-300">
        <a href="#home" className="hover:text-accent transition">Home</a>
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#skills" className="hover:text-accent transition">Skills</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a href="#experiences" className="hover:text-accent transition">Experience</a>
        <a href="#contact" className="hover:text-accent transition">Contact</a>

{/* ========= theme Button here ========= */}
        {/* <button onClick={toggleTheme} className="ml-4 p-2 text-gray-700 dark:text-gray-200 hover:text-accent transition">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button> */}
      </div>
    </nav>
  );
}
