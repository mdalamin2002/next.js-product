"use client";

export default function AboutUs() {
  return (
    <section
      className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 sm:py-12 lg:py-16"
      id="about"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
          About Us
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in delay-150">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">My Shop</span>! We are a passionate team committed to delivering{" "}
          <span className="text-gray-900 font-medium">high-quality products</span> and exceptional customer service. Our mission is to provide the{" "}
          <span className="text-gray-900 font-medium">best shopping experience</span> for our customers with trust, reliability, and care.
        </p>

        {/* Optional CTA Button */}
        <div className="mt-4 sm:mt-6 lg:mt-8">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 hover:shadow-md transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
