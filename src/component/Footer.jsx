import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 space-y-10 md:space-y-0">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-blue-400">Trend Bazaar</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Your one-stop shop for all your favorite products. From men's wear
              to luxury goods, we offer quality products and seamless shopping.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Support: support@trendbazaar.in
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Contact Us
            </h3>
            <p className="mt-2 text-gray-400">Ahmedabad, Gujarat</p>
            <p className="text-gray-400">Phone: +91-1234567890</p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-gray-700 text-center">
          <p className="text-gray-500">
            &copy; 2024 <span className="text-blue-400">Trend Bazaar</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
