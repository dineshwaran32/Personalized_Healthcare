import React from 'react';
import { Activity, Brain, Heart, Utensils } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-12 h-12 text-teal-600" />,
      title: 'Health Tracking',
      description: 'Monitor your vital signs and daily activities with precision and ease.',
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: 'AI Analysis',
      description: 'Get personalized insights powered by advanced artificial intelligence.',
    },
    {
      icon: <Heart className="w-12 h-12 text-teal-600" />,
      title: 'Expert Care',
      description: 'Connect with healthcare professionals for virtual consultations.',
    },
    {
      icon: <Utensils className="w-12 h-12 text-teal-600" />,
      title: 'Diet Plans',
      description: 'Receive customized nutrition plans based on your health goals.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Health Management
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with healthcare expertise to provide you with the best possible care experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;