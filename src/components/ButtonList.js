import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const List = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Development",
    "Calendar",
    "Books",
    "saurabh",
  ];

  return (
    <div className="flex">
      {List.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
