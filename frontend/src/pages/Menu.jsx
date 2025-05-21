import React, { useState, useContext, useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { ShopContext } from "../context/ShopContext";
import { categories } from "../assets/data";
import Title from "../components/Title";
import Item from "../components/Item";

const Menu = () => {
  const { foods } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...foods];
    if (search) {
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length) {
      filtered = filtered.filter((food) => category.includes(food.category));
    }
    return filtered;
  };

  const applySorting = (foodList) => {
    const sortedFoods = [...foodList];
    switch (sortType) {
      case "low":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return aPrice - bPrice; // sort in ascending order
        });
      case "high":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return bPrice - aPrice;// sort in desending order
        });
      default:
        return sortedFoods;
    }
  };

  const toggleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setFilteredFoods(sorted);
    setCurrentPage(1);
  }, [category, sortType, foods, search]);

  const getPaginatedFoods = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredFoods.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  return (
    <div className="bg-[#fffdf4] pt-24 min-h-screen">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* 🔍 Search Box */}
        <div className="w-full max-w-2xl flex items-center justify-center mx-auto">
          <div className="inline-flex items-center justify-center bg-[#ebf9dc] w-full rounded-full p-3 sm:p-4 px-4 sm:px-5">
            <div className="text-base sm:text-lg cursor-pointer text-gray-600">
              <RiSearch2Line />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className="border-none outline-none w-full text-sm sm:text-base pl-3 sm:pl-4 bg-transparent text-gray-800 placeholder:text-gray-400"
            />
            <div
              onClick={toggleShowCategories}
              className="flex items-center justify-center cursor-pointer text-base sm:text-lg pl-2 text-gray-600"
            >
              <LuSettings2 />
            </div>
          </div>
        </div>

        {/* 🧃 Categories Filter */}
        {showCategories && (
          <div className="my-6">
            <h3 className="text-sm sm:text-base md:text-lg mb-4 font-bold hidden sm:flex">
              Select by Category
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-4">
              {categories.map((cat) => (
                <label key={cat.name} className="relative cursor-pointer">
                  <input
                    type="checkbox"
                    value={cat.name}
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    className="hidden peer"
                  />
                  <div className="peer-checked:ring-2 peer-checked:ring-red-500 bg-[#ebf9dc] hover:shadow-md transition-shadow rounded-2xl px-4 py-3 flex items-center gap-3 w-[160px] sm:w-[180px] justify-start">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="object-cover h-12 w-12 rounded-full"
                    />
                    <span className="text-sm  sm:text-base font-medium text-gray-800 peer-checked:underline peer-checked:text-green-600">
                      {cat.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* 🍽️ Food Section */}
        <div className="mt-10 space-y-6">
          {/* Title and Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <Title
              title1="Food"
              title2="Selection"
              titleStyles="!pb-0 xl:text-start"
            />
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">Sort By:</span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="text-sm p-2.5 outline-none bg-[#ebf9dc] text-[#7B7B7B] rounded ring-1 ring-slate-900/10"
              >
                <option value="relevant">Relevant</option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Foods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pl-11">
            {getPaginatedFoods().length > 0 ? (
              getPaginatedFoods().map((food) => (
                <Item food={food} key={food._id} />
              ))
            ) : (
              <p className="capitalize">No food found for selected filters</p>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-14 mb-10 gap-2 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`text-sm font-semibold bg-[#217041] text-white px-5 py-2 rounded-full transition-all cursor-pointer ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#217041] text-white"
                    : "bg-white text-gray-800 border-gray-300"
                } hover:bg-[#217041] hover:text-white transition-all`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`text-sm font-semibold bg-[#217041] text-white px-5 py-2 rounded-full transition-all cursor-pointer ${
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
