import React, { useContext, useState } from "react";
import Topbar from "../components/Topbar";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { user_context } from "../context/user_context";

const Mobile_customer_form = () => {
  const navigation = useNavigate();
  const { setMobiles } = useContext(user_context);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    brand: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const response = await axios.post(
      BACKEND_URL + "/mobile/create",
      {
        name: formData.name,
        description: formData.image_url,
        price: formData.price,
        image_url: formData.image_url,
        brand: formData.brand,
      },
      { withCredentials: true },
    );
    const new_mobiles = await axios.get(BACKEND_URL + "/mobile/get", {
      withCredentials: true,
    });
    if (response.status == 201 && new_mobiles.status == 200) {
      alert("Mobile created successfully");
      setMobiles(new_mobiles.data.mobiles);
      navigation("/store");
    } else {
      alert("Mobile creation failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Topbar />

      <div className=" text-black flex justify-center items-center py-10 px-4">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Add New Mobile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mobile Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter mobile name"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter mobile description"
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter price"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Paste image URL"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter brand name"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition duration-200"
            >
              Add Mobile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mobile_customer_form;
