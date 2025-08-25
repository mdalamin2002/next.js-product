"use client";

import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
        
        {/* Left Side - Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6 animate-fade-in delay-100">
            Have any questions or need help? We’d love to hear from you. 
            Reach out through the form or use the details below.
          </p>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600"/> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-500"/> khbidyut31@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-500"/> +880 1796 343 549
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md animate-fade-in delay-150">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows="4"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
