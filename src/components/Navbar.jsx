"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>

        {session ? (
          <>
            <Link href="/dashboard/add-product">Add Product</Link>
            <button 
              onClick={() => signOut()} 
              className="bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
