import express from "express";
import {
  create_customer,
  get_all_customers,
} from "../controllers/customer_contorller.js";
import { mobile_middleware } from "../middlewarre/mobile_middleware.js";
const customer_router = express.Router();

customer_router.post("/create", create_customer);
customer_router.get("/get_all", mobile_middleware, get_all_customers);

export default customer_router;
