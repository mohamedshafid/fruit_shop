import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/db.js";
import { userRouter } from "./router/user.router.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running...");
});
