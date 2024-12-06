import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <p className="text-xl font-semibold">{testimonial.name}</p>
        <p className="text-gray-500">{testimonial.role}</p>
      </div>
      <p className="text-gray-600 mt-4 italic">“{testimonial.text}”</p>
      <div className="flex justify-center mt-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
