import express from "express";
import {
  create_mobile,
  get_all_mobiles,
  get_by_id,
} from "../controllers/mobile_controller.js";
import { user_middleware } from "../middlewarre/user_middleware.js";
import { mobile_middleware } from "../middlewarre/mobile_middleware.js";
const mobile_router = express.Router();

mobile_router.post("/create", mobile_middleware, create_mobile);
mobile_router.get("/get", user_middleware, get_all_mobiles);
mobile_router.post("/get_id", user_middleware, get_by_id);

//need to add update and delete routes for mobile only by admin and also need to add get single mobile route for user and admin both
export default mobile_router;
