import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ mobile }) => {
  const navigation = useNavigate();

  return (
    <div
      onClick={() => navigation(`/overview/${mobile?._id}`)}
      className="
        w-64 
        h-105 
        bg-white 
        border border-gray-200 
        rounded-xl 
        hover:shadow-xl 
        transition duration-300 
        overflow-hidden
        cursor-pointer
        flex flex-col
      "
    >
      {/* Image Section */}
      <div className="h-56 bg-white flex items-center justify-center p-4">
        <img
          src={mobile?.image_url}
          alt={mobile?.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow px-4 pb-4">
        {/* Name */}
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-10">
          {mobile?.name}
        </h2>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-2 line-clamp-3 min-h-13.5">
          {mobile?.description}
        </p>

        {/* Spacer pushes price to bottom */}
        <div className="mt-auto">
          {mobile?.price && (
            <p className="text-lg font-bold text-gray-900 mt-3">
              ₹{mobile.price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
