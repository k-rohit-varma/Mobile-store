import React, { useContext } from "react";
import { handle_logout } from "../components/Logout.js";
import { user_context } from "../context/user_context.js";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings.jsx";
import Button from "./Button.jsx";

const Topbar = () => {
  const { user, setUser } = useContext(user_context);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row w-screen min-h-14.5 items-center justify-around border rounded-2xl border-amber-50">
        <h2 className=" text-2xl font-bold ">
          Welcome to Store : {user?.name}
        </h2>

        <Settings />

        <Button
          text={"Logout"}
          onClick={() => handle_logout(setUser, navigate)}
        />
      </div>
    </div>
  );
};

export default Topbar;
