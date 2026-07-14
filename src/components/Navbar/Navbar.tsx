import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Travel Articles
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#feature" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
        </ul>

        {/* Button */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}