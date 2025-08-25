"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  { q: "How can I track my order?", a: "You can track your order using the tracking link sent to your email after purchase." },
  { q: "What is the return policy?", a: "We offer 30-day money back guarantee for unused products in original packaging." },
  { q: "Do you ship internationally?", a: "Yes, we ship to selected countries. Shipping fees apply." },
  { q: "How can I contact support?", a: "You can contact support via email, live chat, or phone." },
  { q: "Can I change my shipping address after ordering?", a: "Yes, you can update the shipping address within 2 hours of placing the order." },
  { q: "Are there any discounts for bulk orders?", a: "Yes, we offer special discounts for bulk purchases. Contact support for details." },
  { q: "How secure is my payment information?", a: "All transactions are encrypted and processed securely via trusted payment gateways." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto bg-gradient-to-b from-white to-gray-50 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <button
              className="w-full flex justify-between items-center py-3 px-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors duration-200"
              onClick={() => toggle(index)}
            >
              {faq.q}
              {openIndex === index ? (
                <IoIosArrowUp className="text-blue-600 text-xl" />
              ) : (
                <IoIosArrowDown className="text-blue-600 text-xl" />
              )}
            </button>
            {openIndex === index && (
              <div className="py-3 px-4 text-gray-700 border-t bg-blue-50 transition-all duration-200 rounded-b-lg">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
