import React, { useState } from "react";
import { motion } from "framer-motion";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }
    setError("");
    alert(`Thank you for donating ₹${amount}. Your message: "${message}"`);
    setAmount("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
          Donate Now
        </h3>
        <form onSubmit={handleSubmit} noValidate>
          {/* Donation Amount */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Amount:
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter donation amount"
              required
              className={`w-full p-2 mt-2 border rounded-md ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
          </motion.div>

          {/* Message */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700">
              Message (Optional):
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message (optional)"
              rows="3"
              className="w-full p-2 mt-2 border rounded-md border-gray-300"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Donate
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Donate;
