import axios from "axios";
import { BACKEND_URL } from "../utils";

export const handle_logout = async (setUser, navigation) => {
  try {
    const response = await axios.post(
      BACKEND_URL + "/user/logout",
      {},
      { withCredentials: true },
    );
    if (response.status !== 200) {
      alert("Logged out failed: " + response.data.message);
    }
    setUser(null);
    navigation("/"); // redirect to home page
  } catch (err) {
    console.log("Error logging out", err);
  }
};
