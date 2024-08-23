import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error("No MongoDB URI found in .env file");
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};
