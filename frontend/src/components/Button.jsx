import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div onClick={onClick}>
      <p className="px-5 py-2 bg-black cursor-pointer text-white rounded-xl shadow-lg">
        {text}
      </p>
    </div>
  );
};

export default Button;
