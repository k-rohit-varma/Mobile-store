import React, { useContext } from "react";
import { user_context } from "../context/user_context";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const Protected_route = ({ children }) => {
  const { user } = useContext(user_context);
  const navigation = useNavigate();
  if (!user) {
    //alert("You need to login to access this page");
    navigation("/");
    return <Home />;
  }
  return children;
};

export default Protected_route;
