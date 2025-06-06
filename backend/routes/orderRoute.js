import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controller/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//for admin panel
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/userorders", authUser, userOrders);
orderRouter.post("/verifystripe", authUser, verifyStripe);

export default orderRouter;
