"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaStar, FaShippingFast, FaLock, FaCartPlus, FaHeart } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        // Current product fetch
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);

        // Related products fetch (same type/category, exclude current)
        if (data?.type) {
          const relatedRes = await fetch(`/api/products?type=${data.type}`);
          const relatedData = await relatedRes.json();
          const filtered = relatedData.filter((p) => p._id !== data._id);
          setRelated(filtered.slice(0, 3));
        }
      } catch (error) {
        console.error("❌ Failed to fetch product or related:", error);
      }
    };

    if (id) loadProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Main Product Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>


        {/* Content */}
        <div className="p-6 sm:p-10 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            <span className="text-2xl font-bold text-indigo-600 whitespace-nowrap">
              ${product.price}
            </span>
          </div>

          {/* Rating & Features */}
          <div className="flex items-center gap-4 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${i < (product.rating || 4) ? "text-yellow-400" : "text-gray-300"
                  }`}
              />
            ))}
            <span className="text-gray-600 text-sm">({product.reviews || 120} Reviews)</span>
          </div>

          {product.shortDesc && (
            <p className="text-gray-600 text-lg mb-4">{product.shortDesc}</p>
          )}

          {product.details && (
            <p className="text-gray-700 leading-relaxed mb-6">{product.details}</p>
          )}

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
            <div>
              <span className="font-semibold text-gray-900">Quantity:</span>{" "}
              {product.quantity}
            </div>
           
          </div>

          {/* Features Icons */}
          <div className="flex gap-6 mb-6 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <FaShippingFast className="text-blue-500" /> Free Shipping
            </div>
            <div className="flex items-center gap-1">
              <FaLock className="text-red-500" /> Secure Payment
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2">
              <FaCartPlus /> Add to Cart
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
              <FaHeart /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <div
                key={p._id}
                className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="rounded-xl object-cover w-full h-48 sm:h-56 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-gray-900 font-semibold mt-3 line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-indigo-600 font-bold text-sm">${p.price}</p>
                <Link
                  href={`/products/${p._id}`}
                  className="bg-indigo-600 text-white px-4 py-2 mt-3 rounded hover:bg-indigo-700 text-center transition flex items-center justify-center gap-1"
                >
                  <FaCartPlus /> View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
