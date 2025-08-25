"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-10 sm:py-16 px-4 text-center text-white relative overflow-hidden rounded-lg shadow-lg">
      {/* Background Carousel for subtle animation */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        autoPlay
        interval={8000}
        stopOnHover={false}
        swipeable={false}
        dynamicHeight={false}
        className="absolute inset-0 -z-10 opacity-20"
      >
        <div className="bg-blue-500 h-full w-full" />
        <div className="bg-blue-400 h-full w-full" />
        <div className="bg-blue-600 h-full w-full" />
      </Carousel>

      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 animate-fade-in">
        Join Our Newsletter & Get 10% Off!
      </h2>
      <p className="mb-5 sm:mb-6 text-gray-100 animate-fade-in delay-200">
        Subscribe to stay updated with latest products and offers.
      </p>
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto animate-fade-in delay-400"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-3 rounded-md w-full sm:flex-1 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold shadow hover:bg-yellow-500 hover:shadow-lg transition w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
