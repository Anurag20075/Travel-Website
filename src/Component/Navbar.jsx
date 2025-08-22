import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent transition-all duration-300 hover:from-orange-400 hover:to-teal-500">
                Happiness Plan
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link to="/" className="text-gray-700 hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Ai Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-500 focus:outline-none"
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-2 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600"
              >
                Ai Chat
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
