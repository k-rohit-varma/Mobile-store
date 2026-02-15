import { useState } from "react";
import Topbar from "./Topbar";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useNavigate } from "react-router-dom";

const Make_Salesman = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      BACKEND_URL + "/user/register",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone_number,
      },
      { withCredentials: true },
    );
    console.log("response in salesman", response);
    if (response.status != 201) {
      return alert("error in creating ther salesman : ", response.data.message);
    } else {
      alert("user created successfully !!!");
      navigation("/store");
    }
  };

  return (
    <>
      <Topbar />

      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 border border-gray-800">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-white">
              Salesman Registration
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Enter details to create account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-indigo-500/40"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Secure Access • Store Dashboard
          </p>
        </div>
      </div>
    </>
  );
};

export default Make_Salesman;
