import React from "react";
import reactSvg from "../../assets/react.svg";
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 z-10"></div>
      <img
        src={reactSvg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Marching Towards Values
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join us in our mission to create positive change through education,
          support, and inspiring environments.
          {/* Transform your potential into impact through our specialized programs */}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Explore Programs
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
