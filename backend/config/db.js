import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://wycliffedev:wicky2354@cluster0.t8qqg.mongodb.net/food-delivery"
  );
  console.log("Database connected successfully");
};
