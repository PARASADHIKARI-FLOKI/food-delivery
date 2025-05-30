import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const Add = () => {
  const [prices, setPrices] = useState([]);
  return (
    <div className="px-4 sm:px-10 py-10 min-h-screen">
      <form className="flex flex-col gap-6 text-sm font-medium max-w-2xl">
        {/* Product Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Write here..."
            className="w-full px-4 py-2 rounded-md bg-[#fffdf4] ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Product Description
          </label>
          <textarea
            rows={5}
            placeholder="Write here..."
            className="w-full px-4 py-2 rounded-md bg-[#fffdf4] ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
          />
        </div>

        {/* Category + Upload + Sizes */}
        <div className="flex flex-col sm:flex-row">
          {/* Category */}
          <div className="flex-1">
            <label className="block mb-2 font-semibold text-gray-800">
              Category
            </label>
            <select className=" px-4 py-2 rounded-md bg-[#fffdf4] text-gray-600 ring-1 ring-slate-200">
              <option value="curry">Curry</option>
              <option value="pizza">Pizza</option>
              <option value="rice">Rice</option>
              <option value="deserts">Deserts</option>
              <option value="drinks">Drinks</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>

          {/* Upload Image */}
          <div className="flex gap-2 pt-2 items-end">
            <label
              htmlFor="image"
              className="cursor-pointer transition-all hover:scale-105"
            >
              <img
                src={upload_icon}
                alt="Upload"
                className="w-16 h-16 object-cover rounded-lg  bg-[#fffdf4] ring-1 ring-slate-300 hover:ring-green-600 hover:ring-2"
              />
              <input type="file" id="image" hidden />
            </label>
          </div>
        </div>

        {/* Size and Pricing */}
        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Size and Pricing
          </label>
          {prices.map((_, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <input
                type="text"
                placeholder="(S, M, L)"
                className="px-3 py-2 rounded bg-[#fffdf4] ring-1 ring-slate-200 w-24"
              />
              <input
                type="number"
                placeholder="Price"
                min={0}
                className="px-3 py-2 rounded bg-[#fffdf4] ring-1 ring-slate-200 w-24"
              />
              <button type="button" className="text-red-600 text-xl">
                <TbTrash />
              </button>
            </div>
          ))}

          <button
            type="button"
            className="mt-4 flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-green-700 hover:bg-green-800 rounded shadow"
          >
            <FaPlus /> Add Sizing
          </button>
        </div>

        {/* Popular Checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" id="popular" className="accent-green-700" />
          <label
            htmlFor="popular"
            className="text-sm text-gray-700 cursor-pointer"
          >
            Add to popular
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-44 mt-6 bg-[#404040] text-white py-2.5 rounded-md hover:bg-[#2e2e2e] transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
