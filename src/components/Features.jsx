import React from 'react';
import { Activity, Brain, Heart, Utensils } from 'lucide-react';

const features = [
  {
    icon: React.createElement(Activity, { className: 'w-12 h-12 text-teal-600' }),
    title: 'Health Tracking',
    description: 'Monitor your vital signs and daily activities with precision and ease.'
  },
  {
    icon: React.createElement(Brain, { className: 'w-12 h-12 text-teal-600' }),
    title: 'AI Analysis',
    description: 'Get personalized insights powered by advanced artificial intelligence.'
  },
  {
    icon: React.createElement(Heart, { className: 'w-12 h-12 text-teal-600' }),
    title: 'Expert Care',
    description: 'Connect with healthcare professionals for virtual consultations.'
  },
  {
    icon: React.createElement(Utensils, { className: 'w-12 h-12 text-teal-600' }),
    title: 'Diet Plans',
    description: 'Receive customized nutrition plans based on your health goals.'
  }
];

const Features = () => {
  return React.createElement(
    'section',
    { id: 'features', className: 'py-20 bg-gray-50' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-6' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 page-transition' },
        React.createElement(
          'h2',
          { className: 'text-3xl font-bold gradient-text mb-4' },
          'Comprehensive Health Management'
        ),
        React.createElement(
          'p',
          { className: 'text-gray-600 max-w-2xl mx-auto' },
          'Our platform combines cutting-edge technology with healthcare expertise to provide you with the best possible care experience.'
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
        features.map((feature, index) =>
          React.createElement(
            'div',
            {
              key: index,
              className: 'bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 card-hover hover-trigger',
              style: { animationDelay: `${index * 100}ms` }
            },
            React.createElement('div', { className: 'mb-4 animate-float' }, feature.icon),
            React.createElement('h3', { className: 'text-xl font-semibold mb-2 hover-underline' }, feature.title),
            React.createElement('p', { className: 'text-gray-600' }, feature.description),
            React.createElement(
              'div',
              { className: 'hover-target mt-4' },
              React.createElement(
                'a',
                { href: '#', className: 'text-teal-600 hover:text-teal-700 flex items-center' },
                'Learn more',
                React.createElement(
                  'svg',
                  { className: 'w-4 h-4 ml-2', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                  React.createElement('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                    d: 'M9 5l7 7-7 7'
                  })
                )
              )
            )
          )
        )
      )
    )
  );
};

export default Features;