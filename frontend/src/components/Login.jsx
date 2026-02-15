import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { user_context } from "../context/user_context";
import { useContext } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser, setMobiles } = useContext(user_context);
  const handle_login = async () => {
    if (!email || !password) {
      alert("Please provide email and password");
      return;
    }
    try {
      const url = BACKEND_URL + "/user/login";
      console.log("Sending login request to:", url);
      const response = await axios.post(
        url,
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      const all_mobiles = await axios.get(BACKEND_URL + "/mobile/get", {
        withCredentials: true,
      });
      setMobiles(all_mobiles.data.mobiles);
      if (response.status !== 200) {
        alert("Login failed: " + response.data.message);
      }
      // need to set user in golobal state
      setUser(response.data.user);
      setMobiles(all_mobiles.data.mobiles);
      navigate("/store");
    } catch (err) {
      alert("Error logging in", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black">
      <div
        className="w-full max-w-md bg-white/5 backdrop-blur-xl 
                    border border-white/10 rounded-2xl 
                    shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Login to explore latest smartphones
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-400 block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-black/40 
                     border border-gray-700 text-white 
                     focus:outline-none focus:ring-2 
                     focus:ring-green-400 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-400 block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl bg-black/40 
                     border border-gray-700 text-white 
                     focus:outline-none focus:ring-2 
                     focus:ring-green-400 transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handle_login}
          className="w-full py-3 rounded-xl 
                   bg-linear-to-r from-green-400 to-blue-500 
                   text-black font-semibold 
                   shadow-lg hover:shadow-2xl 
                   hover:-translate-y-1 
                   transition-all duration-300 cursor-pointer"
        >
          Login
        </button>

        {/* Footer */}
      </div>
    </div>
  );
};

export default Login;
