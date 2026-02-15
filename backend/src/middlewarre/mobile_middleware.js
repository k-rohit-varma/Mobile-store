import jwt from "jsonwebtoken";
import { user_model } from "../db/user_model.js";

export const mobile_middleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access in mobile middleware" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await user_model.findOne({ email: decoded?.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access in mobile middleware" });
    }
    if (user.is_admin === false) {
      return res.status(403).json({
        message: "Forbidden Access in mobile middleware Only admin is allowed",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error in mobile middleware" });
  }
};
