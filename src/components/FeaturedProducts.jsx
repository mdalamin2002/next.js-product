"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Info } from "lucide-react"; // React Icons
import Link from "next/link";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected an array from /api/products");
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
        ✨ Featured Products
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.length > 0 ? (
          products.slice(0, 8).map((p) => (
            <div
              key={p._id.toString()}
              className="bg-white border border-gray-100 rounded-2xl shadow-md 
              hover:shadow-xl transition-all duration-300 transform 
              hover:-translate-y-2 hover:border-indigo-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              {p.imageUrl && (
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-1">
                  {p.name}
                </h3>

                {p.shortDesc && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {p.shortDesc}
                  </p>
                )}

                {/* Price + Quantity */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-lg sm:text-xl font-bold text-indigo-600">
                    ${p.price}
                  </p>
                  <span className="text-xs sm:text-sm bg-indigo-50 text-indigo-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium">
                    Qty: {p.quantity || 1}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2 sm:gap-3">
                  <Link
                    href={`/products/${p._id.toString()}`}
                    className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 
                      bg-gradient-to-r from-blue-600 to-indigo-600 
                      text-white font-medium 
                      px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full 
                      hover:from-blue-700 hover:to-indigo-700 
                      transition-all duration-300"
                  >
                    <Info size={14} className="sm:w-4 sm:h-4" /> Details
                  </Link>
                  <button
                    className="inline-flex items-center justify-center gap-1 sm:gap-2 
                      bg-gray-100 text-gray-700 
                      px-3 py-1.5 sm:px-4 sm:py-2 
                      text-xs sm:text-sm rounded-full 
                      hover:bg-gray-200 transition-all duration-300"
                  >
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No products found.
          </p>
        )}
      </div>

      {/* View All Products */}
      <div className="text-center mt-10">
        <Link
          href="/products"
          className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 
            text-white px-6 py-2 rounded-full font-medium 
            hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
}
