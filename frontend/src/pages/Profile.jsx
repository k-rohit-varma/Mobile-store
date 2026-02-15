import React, { useContext } from "react";
import { user_context } from "../context/user_context";

const Profile = () => {
  const { user } = useContext(user_context);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user.is_admin ? "Admin" : "Sales Man"}</p>
    </div>
  );
};

export default Profile;
