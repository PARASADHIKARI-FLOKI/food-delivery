import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { RiShoppingBasketLine, RiUserLine } from 'react-icons/ri';
import { CgMenuLeft } from 'react-icons/cg';
import { FaRegWindowClose } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="py-3 w-full fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-2xl font-semibold">
          <div className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full font-bold text-2xl rotate-[345deg]">
            F
          </div>
          <span className="text-gray-800 font-semibold text-xl">oodLand</span>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden xl:flex flex-1 justify-center">
          <Navbar
            toggleMenu={toggleMenu}
            containerStyles="flex gap-x-5 xl:gap-x-8 rounded-full px-2 py-1"
          />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" className="relative flex items-center text-xl">
            <RiShoppingBasketLine />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-1 text-sm font-medium border px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Login <RiUserLine />
          </Link>

          {/* Hamburger Icon (Mobile only) */}
          <button
            className="xl:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <CgMenuLeft />
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`xl:hidden fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-gray-600 hover:text-black">
            <FaRegWindowClose />
          </button>
        </div>

        {/* Navbar Links */}
        <Navbar toggleMenu={toggleMenu} containerStyles="flex flex-col gap-4 px-4" />
      </div>

      {/* Overlay Background */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="xl:hidden fixed inset-0 bg-opacity-30 z-40"
        />
      )}
    </header>
  );
};

export default Header;
