import React from 'react'
import { NavLink } from "react-router-dom"
import { FaSquarePlus } from "react-icons/fa6"
import { MdFactCheck } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
import { FaListAlt } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className='bg-[#fffdf4] min-h-screen w-full sm:w-1/5 shadow-md border-r border-gray-200 flex flex-col justify-between'>

      {/* Top section: Logo + Nav Links */}
      <div className='flex flex-col items-center sm:items-start gap-y-8 py-6 px-4'>

        {/* Logo */}
        <div className='text-2xl font-bold text-[#217041] hidden sm:flex items-center gap-1'>
          <div className='h-9 w-9 bg-[#217041] text-white flex items-center justify-center rounded-full -rotate-[31deg]'>
            F
          </div>
          <span className='rotate-0 text-gray-800'>oodLand</span>
        </div>

        {/* Navigation */}
        <div className='flex flex-col gap-y-6 w-full sm:pl-6'>
          <NavLink to='/' className='flex items-center gap-3 text-gray-700 hover:text-[#217041] transition'>
            <FaSquarePlus className='text-xl' />
            <span className='font-bold'>Add Item</span>
          </NavLink>
          <NavLink to='/list' className='flex items-center gap-3 text-gray-700 hover:text-[#217041] transition'>
            <FaListAlt className='text-xl' />
            <span className='font-bold'>List</span>
          </NavLink>
          <NavLink to='/oders' className='flex items-center gap-3 text-gray-700 hover:text-[#217041] transition'>
            <MdFactCheck className='text-xl' />
            <span className='font-bold'>Orders</span>
          </NavLink>
        </div>
      </div>

      {/* Bottom Logout */}
      <div className='p-4 sm:pl-6'>
        <button className='flex items-center gap-3 text-red-600 hover:text-red-800 transition'>
          <BiLogOut className='text-xl mb-28' />
          <span className='font-bold cursor-pointer mb-28'>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
