import React from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = ({ testimonials, nextTestimonial, prevTestimonial, activeTestimonial }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Success Stories</h2>
        <div className="relative">
          <div className="flex items-center justify-between">
            <button onClick={prevTestimonial} className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden px-12">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
