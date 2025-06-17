import React, { useEffect, useState } from "react";
import axios from "axios";
import { TfiPackage } from "react-icons/tfi";
import { toast } from "react-toastify";
import { currency } from "../App";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        "http://localhost:5002/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.orders);
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        "http://localhost:5002/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        fetchAllOrders();
      }
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="px-4 sm:px-8 py-10">
      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 p-5 bg-white rounded-xl shadow border border-gray-100"
          >
            {/* Icon */}
            <div className="flex items-center justify-center bg-[#ebf9dc] h-20 w-20 rounded-xl shrink-0 mx-auto sm:mx-0">
              <TfiPackage className="text-3xl text-[#217041]" />
            </div>

            {/* Order Info */}
            <div className="flex-1 flex flex-col gap-2 text-sm text-gray-700">
              {/* Items */}
              <div className="flex gap-2 flex-wrap">
                <span className="font-semibold">Items:</span>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1">
                  {order.items.map((item, index) => (
                    <p key={index}>
                      {item.name} x {item.quantity}{" "}
                      <span className="text-gray-500">"{item.size}"</span>
                      {index < order.items.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div>
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p>
                  <span className="font-semibold">Address:</span>{" "}
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state}, {order.address.country},{" "}
                  {order.address.zipcode}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {order.address.phone}
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="flex flex-col gap-1 text-sm text-gray-700 sm:text-right">
              <p>
                <span className="font-semibold">Total Items:</span>{" "}
                {order.items.length}
              </p>
              <p>
                <span className="font-semibold">Method:</span>{" "}
                {order.paymentMethod}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{" "}
                {order.payment ? "Done" : "Pending"}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            {/* Price & Status */}
            <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-green-700 font-bold">
                  {currency}
                  {order.amount}
                </span>
              </p>
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                className="px-3 py-1 mt-1 rounded-md border border-gray-300 bg-[#ebf9dc] text-sm focus:ring-2 focus:ring-green-500"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
