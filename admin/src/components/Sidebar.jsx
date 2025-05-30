import React from "react";
import { NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { toast } from "react-toastify";


const Sidebar = ({ setToken }) => {
  return (
    <div className="bg-[#fffdf4] w-full sm:w-1/5 min-h-[auto] sm:min-h-screen shadow-md border-r border-gray-200 flex sm:flex-col justify-between">
      {/* Top Section */}
      <div className="flex flex-col sm:items-start items-center sm:gap-y-8 gap-y-4 py-4 sm:py-6 px-4 sm:px-6 w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#217041] flex items-center gap-1">
          <div className="h-9 w-9 bg-[#217041] text-white flex items-center justify-center rounded-full -rotate-[31deg] ml-[-12px]">
            F
          </div>
          <span className="text-gray-800">oodLand</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-y-2 w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 transition font-bold px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-[#abf9cd] text-[#217041]"
                  : "text-gray-700 hover:text-[#217041] hover:bg-[#f4f4f4]"
              }`
            }
          >
            <FaSquarePlus className="text-xl" />
            <span>Add Item</span>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `flex items-center gap-3 transition font-bold px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-[#abf9cd] text-[#217041]"
                  : "text-gray-700 hover:text-[#217041] hover:bg-[#f4f4f4]"
              }`
            }
          >
            <FaListAlt className="text-xl" />
            <span>List</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 transition font-bold px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-[#abf9cd] text-[#217041]"
                  : "text-gray-700 hover:text-[#217041] hover:bg-[#f4f4f4]"
              }`
            }
          >
            <MdFactCheck className="text-xl" />
            <span>Orders</span>
          </NavLink>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 sm:pl-6 sm:mb-10">
        <button
   onClick={() => {
    setToken('');
    toast.info("Logged out successfully");
  }}
          className="flex items-center gap-3 text-red-600 hover:text-red-800 transition"
        >
          <BiLogOut className="text-xl" />
          <span className="font-bold cursor-pointer">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
