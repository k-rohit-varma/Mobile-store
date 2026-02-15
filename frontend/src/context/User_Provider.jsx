import React from "react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { user_context } from "./user_context.js";
import App from "../App.jsx";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils.js";

const User_Provider = () => {
  const [user, setUser] = useState(null);
  const [mobiles, setMobiles] = useState(null);
  const [view, setView] = useState(false);

  useEffect(() => {
    async function fetch_user() {
      try {
        const response = await axios.get(BACKEND_URL + "/user/me", {
          withCredentials: true,
        });
        const all_mobiles = await axios.get(BACKEND_URL + "/mobile/get", {
          withCredentials: true,
        });

        if (response.status === 200) {
          const data = await response.data;
          setUser(data.user);
          setMobiles(all_mobiles.data.mobiles);
        }
      } catch (err) {
        console.log("Error fetching user", err);
      }
    }
    fetch_user();
  }, []);

  return (
    <>
      <user_context.Provider
        value={{ view, setView, user, setUser, mobiles, setMobiles }}
      >
        <App />
      </user_context.Provider>
    </>
  );
};

export default User_Provider;
