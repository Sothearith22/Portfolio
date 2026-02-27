import { NavLink } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
  const { toggleTheme } = useTheme()

  const linkClass = ({ isActive }) =>
    `px-3 py-2 ${isActive ? 'text-blue-500 font-bold' : ''}`

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
      <div className="flex justify-center items-center gap-6 p-4">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/skills" className={linkClass}>Skills</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        <button onClick={toggleTheme}>🌙</button>
      </div>
    </nav>
  )
}