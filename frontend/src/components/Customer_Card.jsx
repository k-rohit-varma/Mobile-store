import React from "react";

const Customer_Card = ({ customer }) => {
  return (
    <div className=" gap-3 w-72 bg-[#1a1a1a] border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-indigo-500/20 transition duration-300">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">
          {customer.name || "No Name"}
        </h3>
        <p className="text-xs text-gray-400">Customer Details</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-3"></div>

      {/* Info Section */}
      <div className="space-y-3">
        {/* Phone */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Phone</span>
          <span className="text-white font-medium">
            {customer.phone_number || "-"}
          </span>
        </div>

        {/* Mobile Count */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Mobiles Purchased</span>
          <span className="text-indigo-400 font-semibold">
            {customer.mobile_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Customer_Card;
