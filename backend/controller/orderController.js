import orderModel from "../models/orderModel.js";
import userMdel from "../models/userModel.js";
import Stripe from 'stripe';

// Global Variables
const currency = 'npr'; // Use 'npr' (Nepalese Rupee) as ISO 4217 currency code
const Delivery_Charges = 10;

// Stripe gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// PLACING ORDER USING COD METHOD
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

// PLACING ORDER USING STRIPE METHOD
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price[item.size] * 277 * 100), // USD to NPR and to paisa
      },
      quantity: item.quantity,
    }));

    // Add Delivery Charges
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: Math.round(Delivery_Charges * 277 * 100),
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// VERIFY STRIPE PAYMENT (TEMPORARY METHOD)
const verifyStripe = async (req, res) => {
  const {orderId,success,userId}=req.body
  try {
    if(success === "true"){
        await orderModel.findByIdAndUpdate(orderId,{payment:true})
        await userMdel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true})
    }else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false})
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ALL ORDERS DATA FOR ADMIN PANEL
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// USER ORDERS FOR FRONTEND
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

// UPDATE ORDER STATUS FROM ADMIN PANEL
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  verifyStripe,
  allOrders,
  userOrders,
  updateStatus,
};
