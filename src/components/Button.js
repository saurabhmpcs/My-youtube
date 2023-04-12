import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-3 m-2 bg-gray-300 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
