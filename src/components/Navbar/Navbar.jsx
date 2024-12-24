import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm ${
        scrollPosition > 50 ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-black to-black">
            Ethiccraft
          </span>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>

            <Link
              to="/about"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              About Us
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>

            <Link
              to="/education"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Education
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>

            <Link
              to="/events"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Events
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>

            <Link
              to="/getinvolved"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Get Involved
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>
            <Link
              to="/contact"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact Us
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>

            <Link
              to="/resisternow"
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/donatenow"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Donate
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
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
          <div className="md:hidden flex flex-col space-y-1 px-4 py-3 bg-white shadow-md">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/education"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Education
            </Link>
            <Link
              to="/events"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Events
            </Link>
            <Link
              to="/getinvolved"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Get Involved
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>
            <Link
              to="/contact"
              className="nav-link group relative text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact Us
              <span className="absolute left-0 right-0 -top-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left group-hover:origin-right"></span>
            </Link>

            <Link
              to="/resisternow"
              className="  px-4 py-2 rounded-md flex justify-center bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/donatenow"
              className="px-4 py-2 rounded-md flex justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
