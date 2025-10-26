"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b text-gray-900 border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tight">
          <span className="text-gray-900"></span>Shop
        </Link>

        {/* Center: Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-1 mx-8">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-orange-500 transition"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative group">
            <ShoppingCart
              size={24}
              className="text-gray-700 group-hover:text-orange-500 transition"
            />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </Link>

          <Link href="/account">
            <User size={24} className="text-gray-700 hover:text-orange-500 transition" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link
              href="/"
              className=" hover:text-orange-500 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/products"
              className=" hover:text-orange-500 transition"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="/about"
              className=" hover:text-orange-500 transition"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className=" hover:text-orange-500 transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center space-x-10 bg-white py-2 border-t border-gray-100 text-sm font-medium">
        <Link href="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-orange-500 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-orange-500 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-orange-500 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
