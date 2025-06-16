import orderModel from "../models/orderModel.js";
import userMdel from "../models/userModel.js";

//PLACING ORDER USING COD METHOD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userMdel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//PLACING ORDER USING STRIPE METHOD
const placeOrderStripe = async (req, res) => {
  try {
  } catch (error) {}
};

//VERIFY STRIPE PAYMENT (TEMPORARY METHOD)
const verifyStripe = async (req, res) => {
  try {
  } catch (error) {}
};

//ALL ORDERS DATA FOR ADMIN PANEL
const allOrders = async (req, res) => {
  try {
    
  } catch (error) {

  }
};

//user order for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//UPDATE ORDER STATUS FROM ADMIN PANEL
const updateStatus = async (req, res) => {
  try {
  } catch (error) {}
};

export {
  placeOrder,
  placeOrderStripe,
  verifyStripe,
  allOrders,
  userOrders,
  updateStatus,
};
