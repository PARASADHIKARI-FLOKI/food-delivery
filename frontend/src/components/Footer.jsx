import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-neutral-800 px-4 sm:px-6 lg:px-8 py-12 pb-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Discover flavors that awaken your taste buds.
        </h2>
        <p className="text-sm text-neutral-600 mb-8 max-w-3xl">
          Experience a variety of dishes made with the freshest ingredients and
          bold, authentic flavors. Enjoy a delicious journey.
        </p>

        <hr className="mb-8 border-neutral-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand + Subscribe */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center gap-1 text-2xl font-semibold">
                <div className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full font-bold text-2xl rotate-[345deg]">
                  F
                </div>
                <span className="text-gray-800 font-semibold text-xl">oodLand</span>
              </Link>
            </div>
            <p className="text-neutral-600 mb-4">
              Looking for something delicious? Explore a variety of mouthwatering meals,
              crafted to satisfy your cravings and bring joy to every occasion.
            </p>

            {/* Subscribe Form */}
            <form className="flex flex-col sm:flex-row items-center bg-green-100 rounded-full p-1 w-full max-w-md mt-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent px-4 py-2 text-sm rounded-full outline-none w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 text-sm font-semibold rounded-full hover:bg-green-800 transition mt-2 sm:mt-0 sm:ml-2"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>About Us</li>
              <li>Fresh Foods</li>
              <li>Popular Foods</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Our Community</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>Terms and Conditions</li>
              <li>Special Offers</li>
              <li>Customer Reviews</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              Contact Number: <span className="font-medium">123-456-7890</span>
            </p>
            <p className="mb-4">
              Email Address: <span className="font-medium">info@foodland.com</span>
            </p>
            <div className="flex space-x-4 text-lg text-neutral-600 cursor-pointer">
              <FaFacebookF className="hover:text-green-700 transition" />
              <FaInstagram className="hover:text-green-700 transition" />
              <FaTwitter className="hover:text-green-700 transition" />
              <FaYoutube className="hover:text-green-700 transition" />
              <FaLinkedinIn className="hover:text-green-700 transition" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="bg-[#ebf9dc] text-black text-center text-sm mt-8 py-2 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; 2025 <strong>FoodLand</strong></span>
          <span>|</span>
          <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
