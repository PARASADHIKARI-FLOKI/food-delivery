import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = `$`;
  const delivery_charges = 10;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});
  const [foods, setFoods] = useState([]);
  const [token, setToken] = useState("");

  //adding items to cart
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          "http://localhost:5002/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  //update the  items quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          "http://localhost:5002/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let filtered = foods.find((food) => food._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += filtered.price[item] * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5002/api/product/list"
      );
      if (response.data.success) {
        setFoods(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //get usercart data
  const getUserCart=async(token)=>{
    try {
      const response=await axios.post("http://localhost:5002/api/cart/get",{},{headers:{token}})
      if(response.data.success){
        setCartItems(response.data.cartData)
      }
    } catch (error) {
       console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"))
    }
    getProductsData();
  }, []);

  const contextValue = {
    foods,
    currency,
    delivery_charges,
    navigate,
    addToCart,
    getCartCount,
    cartItems,
    setCartItems,
    updateQuantity,
    getCartAmount,
    token,
    setToken,
    getUserCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
