import React from 'react';

const Header = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src="/header_img.png"
        alt="Header"
        className="w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
          Order your favourite food here
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6 drop-shadow-sm">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our chefs blend tradition with innovation to bring you flavorful, satisfying meals that cater to every taste — from classic favorites to modern delights.
        </p>
        <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
