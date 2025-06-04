import React, { useContext, useState } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const Item = ({ food }) => {
  const { currency,addToCart} = useContext(ShopContext);
  const [size, setSize] = useState(food.sizes[0]); // default size
  return (
    <div>
      <div className="flex rounded-xl bg-[#ebf9dc] relative">
        {/* photo */}
        <div className="flex items-center justify-center m-6 rounded-full absolute top-0 bottom-0 -left-[88px]">
          <img
            src={food.image}
            alt=""
            height={155}
            width={155}
            className="object-contain aspect-square rounded-xl"
          />
        </div>
        {/* info */}
        <div className="mx-4 pl-20">
          {/* Title and description */}
          <div className="py-3">
            <h4 className="text-[16px] font-[700] line-clamp-1 mb-1">
              {food.name}
            </h4>
            <div className="flex items-center justify-between pb-2">
              <h5 className="text-[14px] font-[500]">{food.category}</h5>
              <div className=" flex items-center justify-start gap-x-1 text-[#217041] text-[14px] font-[700]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </div>
            </div>
            <p className="line-clamp-2">{food.description}</p>
          </div>
          {/* FOOD size */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1">
              {[...food.sizes]
                .sort((a, b) => {
                  const order = ["H", "F", "S", "M", "L", "XL"];
                  return order.indexOf(a) - order.indexOf(b);
                })
                .map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setSize(item)} // to update selected size
                    className={`${
                      item === size ? "ring-2 ring-[#217041] cursor-pointer" : ""
                    } cursor-pointer h-6 w-6 bg-[#fffdf4] text-xs font-semibold rounded-sm`}
                  >
                    {item}
                  </button>
                ))}
            </div>
            <button onClick={()=>addToCart(food._id, size)} className="flex items-center justify-center gap-x-1 text-[18px] bg-[#217041] text-white rounded-sm p-[3px] cursor-pointer">
              <TbShoppingBagPlus />
            </button>
          </div>
          {/* order info  */}
          <div className="flex items-center justify-between rounded-xl pb-3 text-[13px] font-semibold">
            <div className="flex items-center justify-between gap-1">
              <h5>Prep</h5>
              <p className="text-xs relative top-[1px]">20m</p>
            </div>
            <hr className="h-4 w-[1px] bg-[#404040]/10 border-none" />
            <div className="flex items-center justify-center gap-1">
              <h5 className="ml-6">Price:</h5>
              {/* Dynamicaally update the price */}
              <p className="text-xs text-[#217041] relative top-[1px]">
                {currency}
                {food.price[size]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
