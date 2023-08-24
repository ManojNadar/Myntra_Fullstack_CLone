import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import userRouter from "./Routes/UserRouter.js";
import { Login, Register, currentuser } from "./Controllers/UserControllers.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", userRouter);

// user routers
app.post("/register", Register);
app.post("/login", Login);
app.post("/currentuser", currentuser);

const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("DB CONNECTED"))
    .catch(() => console.log("DB ERROR"));
}

app.listen(8000, () => {
  console.log(`successfully running on port 8000`);
});
