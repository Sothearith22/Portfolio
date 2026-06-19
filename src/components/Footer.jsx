import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#020817] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">Sothearith Kim</h3>
            <p className="mt-1 text-sm text-slate-400">
              Backend Developer | Information Technology Student
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/about"
              className="transition duration-300 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="transition duration-300 hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              to="/skills"
              className="transition duration-300 hover:text-cyan-400"
            >
              Skills
            </Link>

            <Link
              to="/contact"
              className="transition duration-300 hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Sothearith22"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your.email@example.com"
              className="transition duration-300 hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Sothearith Kim. Built with React &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
