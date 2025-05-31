import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

const Add = ({token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Curry");
  const [prices, setPrices] = useState([]);
  const [popular, setPopular] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addSizePrice = () => {
    setPrices([...prices, { size: "", price: "" }]);
  };

  const removeSizePrice = (index) => {
    setPrices(prices.filter((_, i) => i !== index));
  };
  const handlePriceChange = (index, field, value) => {
    const updatePrices = prices.map((item, i) =>
      i === index
        ? { ...item, [field]: field === "size" ? value.toUpperCase() : value }
        : item
    );
    setPrices(updatePrices);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("prices", JSON.stringify(prices));
      formData.append("category", category);
      formData.append("popular", popular);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:5002/api/product/add",
        formData,
        { headers: { token } }
      );
      console.log(response.data);
    } catch (error) {
      
    }
  };

  return (
    <div className="px-4 sm:px-10 py-10 min-h-screen">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-6 text-sm font-medium max-w-2xl"
      >
        {/* Product Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Product Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className=" px-4 py-2 rounded-md bg-[#fffdf4] text-gray-600 ring-1 ring-slate-200 cursor-pointer"
            >
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
                src={image ? URL.createObjectURL(image) : upload_icon}
                alt="Upload"
                className="w-16 h-16 object-cover rounded-lg  bg-[#fffdf4] ring-1 ring-slate-300 hover:ring-green-600/30 hover:ring-2"
              />
              <input
                onChange={handleImageChange}
                type="file"
                name="image"
                id="image"
                hidden
              />
            </label>
          </div>
        </div>

        {/* Size and Pricing */}
        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Size and Pricing
          </label>
          {prices.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <input
                onChange={(e) =>
                  handlePriceChange(index, "size", e.target.value)
                }
                value={item.size}
                type="text"
                placeholder="(S, M, L)"
                className="px-3 py-2 rounded bg-[#fffdf4] ring-1 ring-slate-200 w-24"
              />
              <input
                onChange={(e) =>
                  handlePriceChange(index, "price", e.target.value)
                }
                value={item.price}
                type="number"
                placeholder="Price"
                min={0}
                className="px-3 py-2 rounded bg-[#fffdf4] ring-1 ring-slate-200 w-24"
              />
              <button
                type="button"
                className="text-red-600 text-xl cursor-pointer"
              >
                <TbTrash onClick={() => removeSizePrice(index)} />
              </button>
            </div>
          ))}

          <button
            onClick={addSizePrice}
            type="button"
            className="mt-4 flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-green-700 hover:bg-green-800 rounded shadow cursor-pointer"
          >
            <FaPlus /> Add Sizing
          </button>
        </div>

        {/* Popular Checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input
            onChange={() => setPopular((prev) => !prev)}
            checked={popular}
            type="checkbox"
            id="popular"
            className="accent-green-700"
          />
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
          className="w-full sm:w-44 mt-6 bg-[#404040] text-white py-2.5 rounded-md hover:bg-[#2e2e2e] transition cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
