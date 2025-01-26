import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">HealthAI</h3>
            <p className="text-sm">
              Empowering individuals to take control of their health journey through innovative technology and personalized care.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400">Home</a></li>
              <li><a href="#features" className="hover:text-teal-400">Features</a></li>
              <li><a href="#about" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-400">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-400">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HealthAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;