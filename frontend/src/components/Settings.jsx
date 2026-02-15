import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { user_context } from "../context/user_context";

// if salesman all mobiles only
// if admin show reports of sold,unsold and users data.
const Settings = () => {
  const navigation = useNavigate();
  const { user, setView } = useContext(user_context);
  if (user?.is_admin === false) {
    return <></>;
  }
  return (
    <div>
      <div className=" flex flex-row gap-3  h-auto  ">
        <Button
          text={"View Sold"}
          onClick={() => {
            console.log("clicked the sold");
            setView(true);
            navigation("/store");
          }}
        />
        <Button
          text={"View UnSold"}
          onClick={() => {
            setView(false);
            navigation("/store");
          }}
        />
        <Button
          text={"Make SalesMan"}
          onClick={() => navigation("/salesman_create")}
        />
        <Button
          text={"View Customers"}
          onClick={() => navigation("/view_all_customers")}
        />

        <Button
          text={"Create Mobile"}
          onClick={() => navigation("/create_mobile")}
        />
      </div>
    </div>
  );
};

export default Settings;
