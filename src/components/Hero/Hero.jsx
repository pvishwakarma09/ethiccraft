import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider5 from "../../assets/slider5.png";
import slider4 from "../../assets/slider4.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider2 from "../../assets/silder2.jpg";
import slider1 from "../../assets/slider1.jpg";

function Hero() {
  return (
    <>
      <section className="w-full">
        <Carousel
          className="h-full"
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
        >
          <div>
            <img
              src={slider5}
              alt="Slide 5"
              className="h-screen w-full object-cover lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
            />
          </div>
          <div>
            <img
              src={slider4}
              alt="Slide 4"
              className="h-screen w-full object-cover lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
            />
          </div>
          <div>
            <img
              src={slider3}
              alt="Slide 3"
              className="h-screen w-full object-cover lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
            />
          </div>
          <div>
            <img
              src={slider2}
              alt="Slide 2"
              className="h-screen w-full object-cover lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
            />
          </div>
          {/* <div>
            <img
              src={slider1}
              alt="Slide 1"
              className="h-screen w-full object-cover lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
            />
          </div> */}
        </Carousel>
      </section>

      <br />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-900/10 backdrop-blur-lg rounded-xl p-6 text-black border border-white/20 hover:bg-green-800/20 hover:text-blue-600 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 mb-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-700">
                Empowering minds through knowledge and wisdom
              </p>
            </div>

            <div className="bg-green-900/10 backdrop-blur-lg rounded-xl p-6 text-black border border-white/20 hover:bg-green-800/20 hover:text-blue-600 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 mb-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-700">
                Building strong communities through collaboration
              </p>
            </div>

            <div className="bg-green-900/10 backdrop-blur-lg rounded-xl p-6 text-black border border-white/20 hover:bg-green-800/20 hover:text-blue-600 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 mb-4"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Ambience</h3>
              <p className="text-gray-700">
                Creating inspiring environments for growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
