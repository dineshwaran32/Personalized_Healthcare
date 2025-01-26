import React from 'react';
import { Brain, Shield, Database, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: 'Advanced AI Analysis',
      description:
        'Our AI processes millions of data points to provide accurate health insights and predictions.',
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: 'Privacy First',
      description:
        'Your health data is encrypted and protected with state-of-the-art security measures.',
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: 'Comprehensive Data',
      description:
        'Integration with various health devices and platforms for a complete health picture.',
    },
    {
      icon: <Zap className="w-12 h-12 text-amber-600" />,
      title: 'Real-time Updates',
      description:
        'Get instant notifications and updates about your health status and recommendations.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/ai-analysis"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to AI Analysis
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Our AI Technology
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover how our advanced AI system helps you achieve better health
            outcomes through personalized analysis and recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Data Collection</h3>
                  <p className="text-teal-100">
                    We securely collect and analyze your health data from
                    various sources
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Pattern Recognition</h3>
                  <p className="text-teal-100">
                    Our AI identifies patterns and trends in your health data
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Analysis & Insights</h3>
                  <p className="text-teal-100">
                    Advanced algorithms process the data to generate
                    personalized insights
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Recommendations</h3>
                  <p className="text-teal-100">
                    You receive actionable recommendations based on your unique
                    health profile
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Begin your journey to better health with our AI-powered insights
            </p>
            <Link
              to="/ai-analysis"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Try AI Analysis Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
