import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setIsVisible(false), 150);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="absolute w-8 h-8 bg-teal-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 
          backdrop-blur-sm transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
        }}
      />
    </div>
  );
};

export default MouseFollower;