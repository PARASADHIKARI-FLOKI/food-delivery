import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Title from "../components/Title";
import Footer from "../components/Footer";

const Order = () => {
  const { token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        "http://localhost:5002/api/order/userorders",
        {},
        { headers: { token } }
      );
      //  console.log(response.data)
      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        // console.log(allOrdersItem)
        setOrderData(allOrdersItem);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-24">
      <div className="pt-6 pb-20">
        {/* title */}
        <Title title1={'Orders'} title2={'List'} title1Styles={'text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold'}/>
        {/* container */}
        {
          orderData.map((item,i)=>{
            <div key={i} className="p-2 rounded-xl bg-[#ebf9dc] mt-2">
              <div className="text-gray-700 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  <div className=" flex items-center justify-center p-2 bg-[#fffdf4] rounded-lg">
                  <img src={item.image} alt="" className="w-16" />
                  </div>
                  {/* order info */}
                  <div className="block w-full">
                    <h5 className="text-[14px] md:text-[15px] mb-1 font-bold capitalize line-clamp-1">{item.name}</h5>
                      <div className="flex gap-x-2 flex-col sm:flex-row sm:justify-between">
                         {/* price quantity size date payment */}
                         <div className="text-xs">
                          <div className="flex items-center gap-x-2 sm:gap-x-3">
                            <div className="flex items-center justify-center gap-x-2">
                              <h5 className="text-[14px] font-[500]">Price:</h5>
                              <p>{currency}{item.price[item.size]}</p>
                            </div>
                            <div className="flex items-center justify-center gap-x-2">
                              <h5 className="text-[14px] font-[500]">Quantity:</h5>
                              <p>{item.quantity}</p>
                            </div>
                            <div className="flex items-center justify-center gap-x-2">
                              <h5 className="text-[14px] font-[500]">Size:</h5>
                              <p>{item.size}</p>
                            </div>
                          </div>
                         </div>
                         <div className="flex items-center gap-x-2">
                              <h5 className="text-[14px] font-[500]">Date:</h5>
                              <p className="text-gray-400">{new Date(item.date).toDateString()}</p>
                         </div>
                         <div className="flex items-center gap-x-2">
                          <h5 className="text-[14px] font-[500]">Payment:</h5>
                         <p className="text-gray-400">{item.paymentMethod}</p>
                         </div>
                      </div>
                  
                  {/* status and button */}
                  <div className="flex flex-col gap-2 sm:pr-4">
                    <div className="flex items-center gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                      <p className="max-sm:text-xs">{item.status}</p>
                    </div>
                    <button onClick={loadOrderData} className="text-[14px] font-[500] bg-[#217041] text-white px-7 py-3.5 rounded-full transition-all !p-1 !text-xs">Track Order</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <Footer/>
    </div>
  )
};

export default Order;
