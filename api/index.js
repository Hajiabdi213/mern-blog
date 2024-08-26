import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("Mongo Db is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

// allow json to be sent
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is running at port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
