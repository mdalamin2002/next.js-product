"use client";

import { useState, useEffect } from "react";
import { FaBox, FaList, FaSortNumericUp, FaImage, FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [details, setDetails] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productType, setProductType] = useState("");
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProductTypes = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data)) {
          const uniqueTypes = [...new Set(data.map((p) => p.type).filter(Boolean))];
          setTypes(uniqueTypes);
        }
      } catch (err) {
        console.error("Failed to fetch product types:", err);
      }
    };
    loadProductTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productType) {
      Swal.fire("Error", "Please select or enter a product type", "error");
      return;
    }

    setLoading(true);

    const uploadTime = new Date().toISOString();

    const newProduct = {
      name,
      shortDesc,
      details,
      imageUrl,
      price: parseFloat(price),
      quantity: parseInt(quantity) || 0,
      type: productType,
      uploadTime,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        Swal.fire("✅ Success", "Product added successfully!", "success");
        setName("");
        setShortDesc("");
        setDetails("");
        setImageUrl("");
        setPrice("");
        setQuantity("");
        setProductType("");
      } else {
        Swal.fire("❌ Error", "Failed to add product", "error");
      }
    } catch (err) {
      console.error("POST error:", err);
      Swal.fire("❌ Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white">
      <h1 className="text-3xl font-semibold mb-6 text-center text-green-700">
        Add New Product
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        
        {/* Product Name */}
        <div className="flex items-center border rounded-lg px-3">
          <FaBox className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Product Name"
            className="p-2 w-full outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Product Type */}
        <div className="flex gap-2">
          <div className="flex items-center border rounded-lg px-3 w-1/2">
            <FaList className="text-gray-500 mr-2" />
            <select
              className="p-2 w-full outline-none"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Select Type</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Or enter new type"
            className="border p-2 w-1/2 rounded-lg outline-none"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          />
        </div>

        {/* Quantity */}
        <div className="flex items-center border rounded-lg px-3">
          <FaSortNumericUp className="text-gray-500 mr-2" />
          <input
            type="number"
            placeholder="Quantity"
            className="p-2 w-full outline-none"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min={0}
          />
        </div>

        {/* Image URL */}
        <div className="flex items-center border rounded-lg px-3">
          <FaImage className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Product Image URL"
            className="p-2 w-full outline-none"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {/* Short Description */}
        <textarea
          placeholder="Short Description"
          className="border p-2 w-full rounded-lg outline-none"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          required
        ></textarea>

        {/* Details */}
        <textarea
          placeholder="Product Details"
          className="border p-2 w-full rounded-lg outline-none"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>

        {/* Price */}
        <div className="flex items-center border rounded-lg px-3">
          <FaDollarSign className="text-gray-500 mr-2" />
          <input
            type="number"
            placeholder="Price"
            className="p-2 w-full outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min={0}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg w-full shadow-md"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
