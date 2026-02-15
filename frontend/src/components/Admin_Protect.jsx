import React from "react";
import { useContext } from "react";
import { user_context } from "../context/user_context";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const Admin_Protect = ({ children }) => {
  const { user } = useContext(user_context);
  const navigation = useNavigate();
  if (!user || user.is_admin === false) {
    alert("Only admin allowed");
    return navigation("/store");
  }
  return children;
};

export default Admin_Protect;
