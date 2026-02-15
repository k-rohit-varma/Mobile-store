import express from "express";
import {
  admin_register,
  user_login,
  user_logout,
  user_me,
  user_register,
} from "../controllers/user_controller.js";
import { user_middleware } from "../middlewarre/user_middleware.js";
import { mobile_middleware } from "../middlewarre/mobile_middleware.js";

const user_routes = express.Router();

user_routes.post("/register", mobile_middleware, user_register);
user_routes.post("/login", user_login);
user_routes.post("/logout", user_logout);
user_routes.get("/me", user_middleware, user_me);
user_routes.post("/admin", admin_register);
export default user_routes;
