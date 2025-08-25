"use client";
import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock } from "react-icons/fa";

const features = [
  { icon: <FaShippingFast />, title: "Free Shipping", desc: "Orders above $50", color: "text-blue-500" },
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Always ready to help", color: "text-green-500" },
  { icon: <FaMoneyBillWave />, title: "Money Back", desc: "30-day guarantee", color: "text-yellow-500" },
  { icon: <FaLock />, title: "Secure Payment", desc: "100% safe", color: "text-red-500" },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-10 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 animate-fade-in">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 animate-fade-in delay-200">
          We provide top-notch services and benefits for all our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-3 hover:scale-105 hover:shadow-2xl transition transform duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={`text-4xl ${feature.color}`}>
              {feature.icon}
            </div>
            <h4 className="font-semibold text-lg text-gray-800">{feature.title}</h4>
            <p className="text-gray-500 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
