import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
      <div className="container mx-auto px-6 text-center mt-32">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12">
          Whether you have a question, a suggestion, or just want to share your love for books, we're here to listen!
        </p>

        <div className="flex flex-col md:flex-row justify-around mb-12">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FaPhoneAlt className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
            <p className="text-gray-600 mt-2">+923300000000</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FaEnvelope className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
            <p className="text-gray-600 mt-2">contact@yourwebsite.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
            <p className="text-gray-600 mt-2">123 Book Street, Novel City, 45678</p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
  );
};

export default Contact;
