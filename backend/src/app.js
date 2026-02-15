import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import user_routes from "./routes/user.js";
import { connectDb } from "./db/connect.js";
import mobile_router from "./routes/mobile.js";
import customer_router from "./routes/customer.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://mobile-store-frontend-bdkg.onrender.com", // frontend origin
    credentials: true,
  }),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/v1/user", user_routes);
app.use("/v1/mobile", mobile_router);
app.use("/v1/customer", customer_router);
connectDb();

// console.log("Frontend URL: " + process.env.FRONTEND_URL);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
