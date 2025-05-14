import React from 'react';
import { TbHomeFilled } from 'react-icons/tb';
import { IoMdListBox } from 'react-icons/io';
import { IoMailOpen } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = ({ containerStyles, toggleMenu }) => {
  const navItems = [
    { to: '/', label: 'Home', icon: <TbHomeFilled /> },
    { to: '/menu', label: 'Menu', icon: <IoMdListBox /> },
    { to: '/contact', label: 'Contact', icon: <IoMailOpen /> },
  ];

  return (
    <nav className={containerStyles}>
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={label}
          to={to}
          onClick={toggleMenu}
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md transition ${
              isActive ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <span className="text-xl">{icon}</span>
          <span className="text-sm">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
