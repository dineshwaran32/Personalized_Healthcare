import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-teal-600 text-white rounded-full shadow-lg 
        hover:bg-teal-700 transition-all duration-300 transform hover:scale-110
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 z-30`}
      aria-label="Return to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ReturnToTop;