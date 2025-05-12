import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Mobile App', path: '/mobile-app' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'border-b-2 border-red-500 text-red-600'
      : 'hover:text-red-500';

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 ml-40">
            <img src={assets.logo} alt="logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={navLinkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Icons and Button */}
          <div className="flex items-center gap-4">
            <img src={assets.search_icon} alt="Search" className="h-6 cursor-pointer" />
            <div className="relative">
              <img src={assets.basket_icon} alt="Cart" className="h-6 cursor-pointer" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition hidden md:block">
              Sign In
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-4 pt-4 pb-6 space-y-3 text-gray-700 font-medium border-t">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                {item.name}
              </NavLink>
            </li>
          ))}
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Sign In
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
