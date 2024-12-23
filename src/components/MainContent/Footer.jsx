import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto text-center sm:text-left flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
        {/* Left Section: Brand and Description */}
        <div>
          <p className="text-4xl font-bold text-pink-500 transition duration-500 hover:text-pink-300">
            MyWebsite
          </p>
          <p className="text-sm mt-2 max-w-sm mx-auto sm:mx-0">
            Stay updated with the latest events, news, and offers. Never miss
            out on the fun!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          <div>
            <p className="text-md font-semibold text-gray-300 hover:text-pink-400 transition duration-300">
              Quick Links
            </p>
            <ul className="space-y-2 mt-2">
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pink-400 transition duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <p className="text-md font-semibold text-gray-300 hover:text-pink-400 transition duration-300">
              Subscribe
            </p>
            <form className="mt-2">
              <input
                type="email"
                className="p-2 rounded-md w-full sm:w-auto text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white mx-1 py-2 px-4 mt-2 rounded-md w-full sm:w-auto transition duration-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Event Countdown Timer */}
        <div className="mt-6 sm:mt-0">
          <p className="text-md font-semibold text-gray-300">
            Next Event Countdown
          </p>
          <div className="mt-2 text-lg font-bold text-pink-400">
            <span>12</span> Days <span>13</span> Hours <span>45</span> Minutes
          </div>
        </div>
      </div>

      {/* Bottom Section: Partners, Contact, and Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition duration-300"
            >
              Location
            </a>
          </div>

          {/* Partners and Sponsors */}
          <div className="flex space-x-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Sponsor"
              className="w-20 h-20 object-contain hover:scale-110 transition duration-300 ease-in-out"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Sponsor"
              className="w-20 h-20 object-contain hover:scale-110 transition duration-300 ease-in-out"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Sponsor"
              className="w-20 h-20 object-contain hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2025 MyWebsite. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-pink-700 text-black p-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 transition duration-300 transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
        </svg>
        Top
      </a>
    </footer>
  );
}

export default Footer;
