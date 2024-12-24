import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
      <motion.div
        className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Heading Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          GET In <span className="text-green-600">Touch</span>
        </h2>
          <h4 className="text-xl font-medium mt-2 text-gray-600">
            Have a question for us?
          </h4>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address Section */}
          <motion.div
            className="space-y-6 p-4 border-l-4 border-indigo-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <p className="font-semibold text-gray-700">Address:</p>
              <p className="text-gray-600">
                Hare Krishna Hills, East of Kailash Sant Nagar South Delhi-{" "}
                110065
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Mobile:</p>
              <p className="text-gray-600">+91 886-083-0455</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email:</p>
              <p className="text-gray-600">info@ethiccraft.org</p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            className="space-y-6 p-4 border-l-4 border-gray-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Surname
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Contact"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows="3"
                placeholder="Your message here"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all ease-in-out duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
