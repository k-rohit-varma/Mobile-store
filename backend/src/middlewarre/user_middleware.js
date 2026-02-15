import jwt from "jsonwebtoken";
import { user_model } from "../db/user_model.js";

export const user_middleware = async (req, res, next) => {
  const token = req.cookies?.token;
  //console.log("Token in middleware:", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized middleware " });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("Decoded token in middleware:", decoded);
    const user = await user_model.findOne({ email: decoded.email });
    //console.log("User in middleware:", user);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found unauthorized in middleware" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token middleware " });
  }
};
