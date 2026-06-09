import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-orange-500">
          Debanjan Bhaumik
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-orange-500 transition"
            >
              About
            </a>
          </li>


           <li>
            <a
              href="#education"
              className="hover:text-orange-500 transition"
            >
              Education
            </a>
          </li>


          <li>
            <a
              href="#skills"
              className="hover:text-orange-500 transition"
            >
              Skills
            </a>
          </li>


          <li>
            <a
              href="#certifications"
              className="hover:text-orange-500 transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-orange-500 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4">

          <div className="flex flex-col gap-4">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Education
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Projects
            </a>

            <a
              href="#certifications"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Certifications
            </a>

            

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;