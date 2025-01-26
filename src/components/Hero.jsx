import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-600/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empower Your Health Journey with AI-Powered Insights
          </h1>
          <p className="text-xl text-teal-50 mb-8">
            Take control of your wellness with personalized health tracking, expert consultations, and AI-driven recommendations.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;