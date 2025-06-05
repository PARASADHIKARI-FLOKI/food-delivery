import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { RiShoppingBasketLine, RiUserLine } from 'react-icons/ri';
import { CgMenuLeft } from 'react-icons/cg';
import { FaRegWindowClose } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';
import { ShopContext } from '../context/ShopContext';

const Header = () => {
  const { getCartCount, navigate, token, setToken } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setShowLogout(false);
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

        {/* Right Icons */}
        <div className="flex items-center gap-8 ">
          {/* Cart */}
          <Link to="/cart" className="relative flex items-center text-xl">
            <RiShoppingBasketLine />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {getCartCount()}
            </span>
          </Link>

          {/* Login/Profile */}
          {token ? (
            <div className="relative">
              <IoPersonCircle
                className="text-3xl cursor-pointer text-gray-700 hover:text-black mr-[-100px] mb-0.5"
                onClick={() => setShowLogout(prev => !prev)}
              />
              {showLogout && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md z-50">
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 text-sm font-medium border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 transition"
            >
              Login <RiUserLine />
            </Link>
          )}

          {/* Hamburger Icon (mobile only) */}
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
        {/* Top Bar: Logo + Close Button */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Link to="/" onClick={toggleMenu} className="flex items-center gap-1 text-xl font-semibold">
            <div className="w-9 h-9 bg-green-700 text-white flex items-center justify-center rounded-full font-bold text-xl rotate-[345deg]">
              F
            </div>
            <span className="text-gray-800 font-semibold">oodLand</span>
          </Link>

          <button onClick={toggleMenu} className="text-2xl text-gray-600 hover:text-black cursor-pointer">
            <FaRegWindowClose />
          </button>
        </div>

        {/* Navbar Links */}
        <Navbar toggleMenu={toggleMenu} containerStyles="flex flex-col gap-4 px-4 mt-4" />
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="xl:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </header>
  );
};

export default Header;
