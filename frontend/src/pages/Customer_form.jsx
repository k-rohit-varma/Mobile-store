import { useContext, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { user_context } from "../context/user_context.js";

const Customer_form = ({ mobile }) => {
  const { user, setMobiles } = useContext(user_context);
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    mobile_count: 1,
    mobile_id: mobile?._id,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "mobile_count" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Customer Data:", formData);
    const response = await axios.post(BACKEND_URL + "/customer/create", {
      name: formData?.name,
      phone_number: formData?.phone_number,
      mobile_count: formData?.mobile_count,
      mobile_id: formData?.mobile_id,
      salesman_id: user?._id,
    });
    console.log("response in customer cre", response);
    if (response.status === 201 || response.status === 200) {
      alert("customer purchased successfully");
      // check if mobile that is purchased changed or not !!.
      const all_mobiles = await axios.get(BACKEND_URL + "/mobile/get", {
        withCredentials: true,
      });
      setMobiles(all_mobiles.data.mobiles);
      navigation("/store");
    } else {
      return alert("Customer creationg error", response.data.message);
    }
  };
  if (mobile.is_sold === true) {
    return <> Mobile already sold </>;
  }
  return (
    <div className="bg-white text-black rounded-2xl shadow-md mt-6 p-6 border border-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Buyer Information
        </h3>
        <p className="text-sm text-gray-500">
          Please provide your details to continue purchase.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter 10-digit phone number"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            name="mobile_count"
            min="1"
            value={formData.mobile_count}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default Customer_form;
