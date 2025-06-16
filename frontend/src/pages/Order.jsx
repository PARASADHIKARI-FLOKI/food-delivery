import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Footer from "../components/Footer";

const Order = () => {
  const { token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        "http://localhost:5002/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

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
    <div className="bg-[#fffdf4] pt-24 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="pt-6 pb-20">
          {/* Title */}
          <Title
            title1={"Orders"}
            title2={"List"}
            title1Styles={
              "text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"
            }
          />

          {/* Orders List */}
          {orderData.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-xl bg-[#ebf9dc] mt-2 "
            >
              {/* Image and Product Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#fffdf4] rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">{item.name}</h5>
                  <div className="text-xs text-gray-700 mt-1 flex flex-wrap gap-x-3">
                    <span className="font-semibold">
                      <span>Price:</span>{" "}
                      <span className="text-gray-500">{currency}{item.price[item.size]}</span>
                    </span>
                    <span className="font-semibold">
                      <span>Quantity:</span>{" "}
                      <span className="text-gray-500">{item.quantity}</span>
                    </span>
                    <span className="font-semibold">
                      <span>Size:</span>{" "}
                      <span className="text-gray-500">{item.size}</span>
                    </span>
                  </div>
                  <div className="text-xs mt-1">
                    <span className="font-semibold">Date:</span>{""} <span className="text-gray-500">{new Date(item.date).toDateString()}</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold">Payment:</span>{''} <span className="text-gray-500">{item.paymentMethod}</span>
                  </div>
                </div>
              </div>

              {/* Status and Track Button */}
              <div className="flex flex-col items-end justify-between gap-2">
                <div className="flex items-center text-xs text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  {item.status}
                </div>
                <button
                  onClick={loadOrderData}
                  className="text-xs font-medium bg-green-700 hover:bg-green-800 text-white px-4 py-1.5 rounded-full transition cursor-pointer"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Order;
