import React from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-teal-600 text-2xl font-bold">HealthAI</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
            <Link to="/health-tracking" className="text-gray-700 hover:text-teal-600">Health Tracking</Link>
            <Link to="/ai-analysis" className="text-gray-700 hover:text-teal-600">AI Analysis</Link>
            <Link to="/expert-care" className="text-gray-700 hover:text-teal-600">Expert Care</Link>
            <Link to="/diet-plans" className="text-gray-700 hover:text-teal-600">Diet Plans</Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-teal-600 hover:text-teal-700"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                <User className="w-4 h-4 mr-2" />
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
              <Link to="/health-tracking" className="text-gray-700 hover:text-teal-600">Health Tracking</Link>
              <Link to="/ai-analysis" className="text-gray-700 hover:text-teal-600">AI Analysis</Link>
              <Link to="/expert-care" className="text-gray-700 hover:text-teal-600">Expert Care</Link>
              <Link to="/diet-plans" className="text-gray-700 hover:text-teal-600">Diet Plans</Link>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-teal-600 hover:text-teal-700"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;