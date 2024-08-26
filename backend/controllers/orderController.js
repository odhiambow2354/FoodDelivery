import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = "https://fooddeliveryfrontend-96ok.onrender.com/";

  try {
    const newOrder = new orderModel({
      userID: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { $currentDate: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "kes", // Use "kes" for Kenyan Shilling
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "kes", // Corrected to "kes"
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 2 * 100 * 100, // Ensure the correct multiplication for delivery charge
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: "true" });
      res.json({ success: true, message: "Payment is  successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong" });
  }
};

//users orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userID: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong" });
  }
};

//Listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong" });
  }
};
//api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Order status updated" });
  } catch {
    console.log(error);
    res.json({ success: false, message: "Something went wrong" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
