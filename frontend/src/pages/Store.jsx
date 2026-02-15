import React, { useContext } from "react";
import { user_context } from "../context/user_context";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card.jsx";
import Settings from "../components/Settings.jsx";
import Topbar from "../components/Topbar.jsx";

const Store = () => {
  const { user, mobiles, view, setView } = useContext(user_context);
  const navigate = useNavigate();
  if (!user) {
    <h1> Loading .... </h1>;
    navigate("/");
    return;
  }
  return (
    <div>
      <div>
        <Topbar setView={setView} />
        <div className="flex flex-row w-screen  ">
          <div className="border w-12/12 min-h-auto ">
            <h1 className="text-2xl font-bold m-10">All Mobiles</h1>
            <div className="flex flex-row flex-wrap gap-10 p-12 justify-around  ">
              {mobiles.map((mobile) => {
                if (user?.is_admin === true) {
                  if (mobile?.is_sold == view)
                    return <Card key={mobile.id} mobile={mobile} />;
                } else if (mobile?.is_sold == false)
                  return <Card key={mobile.id} mobile={mobile} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
