import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelEvents</h3>
            <p className="text-gray-400 mb-4">
              Creating unforgettable journeys and events since 2008.
            </p>
            {/* <div className="flex space-x-4"></div> */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Travel Planning
                </a>
              </li>
              <li>
                <a
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Event Management
                </a>
              </li>
              <li>
                <a
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Corporate Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-sm">
                  location_on
                </span>
                123 Travel Street, Suite 100, New York, NY 10001
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-sm">
                  phone
                </span>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-sm">
                  email
                </span>
                info@travelevents.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} TravelEvents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
