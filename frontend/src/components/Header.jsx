import React, { useState, useEffect, useRef } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-teal-600 text-2xl font-bold">
              HealthAI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
            <Link to="/health-tracking" className="text-gray-700 hover:text-teal-600">Health Tracking</Link>
            <Link to="/ai-analysis" className="text-gray-700 hover:text-teal-600">AI Analysis</Link>
            <Link to="/expert-care" className="text-gray-700 hover:text-teal-600">Expert Care</Link>
            <Link to="/diet-plans" className="text-gray-700 hover:text-teal-600">Diet Plans</Link>

            {/* User Icon or Login Button */}
            <div className="ml-4">
              {isAuthenticated ? (
                <User className="w-6 h-6 text-teal-600 cursor-pointer" />
              ) : (
                <button
                  onClick={() => navigate("/signup")}
                  className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 mr-10" /> : <Menu className="h-6 w-6 mr-10" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div ref={menuRef} className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
              <Link to="/health-tracking" className="text-gray-700 hover:text-teal-600">Health Tracking</Link>
              <Link to="/ai-analysis" className="text-gray-700 hover:text-teal-600">AI Analysis</Link>
              <Link to="/expert-care" className="text-gray-700 hover:text-teal-600">Expert Care</Link>
              <Link to="/diet-plans" className="text-gray-700 hover:text-teal-600">Diet Plans</Link>
              {!isAuthenticated && (
                <button
                  onClick={() => navigate("/signup")}
                  className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;