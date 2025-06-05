import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_charges, getCartAmount } = useContext(ShopContext);
  return (
    <div>
      <Title
        title1={"Cart"}
        title2={"Total"}
        titleStyles={
          "text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"
        }
      />
      <div className="flex items-center justify-between pt-3">
        <h5 className="text-[14px] md:text-[15px] mb-1 font-bold">SubTotal:</h5>
        <p className="text-[14px] md:text-[15px] mb-1 font-bold">
          {currency}
          {getCartAmount()}.00
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flex items-center justify-between pt-3">
        <h5 className="text-[14px] md:text-[15px] mb-1 font-bold">
          Shipping Fee:
        </h5>
        <p className="text-[14px] md:text-[15px] mb-1 font-bold">
          {getCartAmount() === 0
            ? "0.00"
            : `${currency}${delivery_charges}.00`}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flex items-center justify-between pt-3">
        <h5 className="text-[14px] md:text-[15px] mb-1 font-bold">Total:</h5>
        <p className="text-[14px] md:text-[15px] mb-1 font-bold">
          {currency}
          {getCartAmount() === 0 ? "0.00" : getCartAmount() + delivery_charges}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
    </div>
  );
};

export default CartTotal;
