"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { FiPlusCircle, FiBox, FiHome, FiMenu, FiX } from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  if (status === "loading") return <p className="p-10">Loading...</p>;

  // if (!session) {
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       <button
  //         onClick={() => signIn()}
  //         className="px-6 py-2 bg-blue-600 text-white rounded-lg"
  //       >
  //         Login to continue
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ✅ Mobile Navbar */}
      <header className="lg:hidden bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-800 text-white flex flex-col gap-4 p-4 shadow-md">
          <Link
            href="/dashboard/add-product"
            className="flex items-center gap-2 hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            <FiPlusCircle /> Add Product
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            <FiBox /> All Products
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            <FiHome /> Back to Home
          </Link>
        </nav>
      )}

      {/* ✅ Sidebar (Desktop only) */}
      <aside className="hidden lg:block w-64 bg-gray-900 text-white p-6 space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard/add-product" className="flex items-center gap-3 hover:text-blue-400">
            <FiPlusCircle className="text-lg" /> Add Product
          </Link>
          <Link href="/products" className="flex items-center gap-3 hover:text-blue-400">
            <FiBox className="text-lg" /> All Products
          </Link>
          <Link href="/" className="flex items-center gap-3 hover:text-blue-400">
            <FiHome className="text-lg" /> Back to Home
          </Link>
        </nav>
      </aside>

      {/* ✅ Main Content */}
      <main className="flex-1 bg-gray-100 p-4 lg:p-8">{children}</main>
    </div>
  );
}
