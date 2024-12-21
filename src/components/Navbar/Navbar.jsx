import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? "bg-white shadow-md" : "bg-white "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r text-white rounded-lg p-2 from-blue-600 via-black to-black">
              Ethicraft
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:font-bold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:font-bold transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/education"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:font-bold transition-colors"
            >
              Education
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:font-bold transition-colors"
            >
              Events
            </Link>
            <Link
              to="/getinvolved"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:font-bold transition-colors"
            >
              Get Involved
            </Link>
            <Link
              to="/contactus"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600  hover:font-bold transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/resisternow"
              className=" bg-green-600 block px-3 py-2 rounded-lg text-white hover:text-blue-600 transition-colors"
            >
              Register
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Us
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/events"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Events
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
