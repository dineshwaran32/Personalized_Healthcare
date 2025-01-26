import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how I manage my health. The AI insights are incredibly accurate!",
      author: "Sarah Johnson",
      role: "Fitness Enthusiast",
    },
    {
      quote: "The virtual consultations and personalized diet plans have helped me achieve my wellness goals faster than ever.",
      author: "Michael Chen",
      role: "Tech Professional",
    },
    {
      quote: "As a busy professional, having all my health data in one place has been a game-changer.",
      author: "Emma Rodriguez",
      role: "Business Executive",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-teal-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Quote className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
              <p className="text-xl text-gray-700 mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-700"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-700"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;