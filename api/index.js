import express, { text } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("error is ", err);
  }); 
const app = express();
app.listen(5000, () => {
  console.log("Server is running on port 5000 ");
});
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
