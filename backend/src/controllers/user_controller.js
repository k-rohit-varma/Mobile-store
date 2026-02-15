import { user_model } from "../db/user_model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const user_login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  const user = await user_model.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send({ message: "Invalid password" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  res.cookie("token", token);
  return res.status(200).send({ message: "Login successful", user, token });
};

export const user_register = async (req, res) => {
  const { name, email, password, phone_number } = req.body;
  if (!name || !email || !password || !phone_number) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  const existingUser = await user_model.findOne({ email });
  const secondUser = await user_model.findOne({ phone_number });
  if (existingUser || secondUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.status(500).json({ message: "Error generating salt" });
    }
    bcrypt.hash(password, salt, async (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }
      const newUser = new user_model({
        name,
        email,
        password: hashedPassword,
        phone_number,
      });
      await newUser.save();
      return res.status(201).json({
        message: "User registered successfully",
        user: newUser,
      });
    });
  });
};

export const user_logout = (req, res) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }
  res.cookie("token", "");
  return res.status(200).json({ message: "Logout successful" });
};

export const user_me = async (req, res) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }
  try {
    return res.status(200).json({ user: req.user });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
