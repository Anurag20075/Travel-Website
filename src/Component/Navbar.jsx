import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent transition-all duration-300 hover:from-orange-400 hover:to-teal-500">
                Happiness Plan
              </span>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  Ai Chat
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:hidden">
            <button className="text-gray-700 hover:text-teal-500 focus:outline-none">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
