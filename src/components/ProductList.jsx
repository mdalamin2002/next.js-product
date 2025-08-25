"use client";

import { useEffect, useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // console.log("GET /api/products:", data);

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

  // Filter products based on search term
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
        ✨ Our Products
      </h2>

      {/* Search Input */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-5 py-3 bg-gray-200 focus:bg-white rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p._id.toString()}
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              {p.imageUrl && (
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-1">
                  {p.name}
                </h3>

                {p.shortDesc && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {p.shortDesc}
                  </p>
                )}

                <p className="text-xl font-bold text-indigo-600 mb-6">
                  ${p.price}
                </p>

                {/* Button */}
                <a
                  href={`/products/${p._id.toString()}`}
                  className="mt-auto inline-block w-full sm:w-auto text-center 
             bg-gradient-to-r from-blue-600 to-indigo-600 
             text-white font-medium 
             px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base
             rounded-full 
             hover:from-blue-700 hover:to-indigo-700 
             transition-all duration-300"
                >
                  View Details
                </a>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
