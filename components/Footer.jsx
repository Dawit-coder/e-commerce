"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4"></h2>
          <p className="text-sm leading-relaxed">
            Your one-stop destination for fashion and electronics. Quality products, unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Shop</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-orange-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
