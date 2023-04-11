import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="development" />
      <Button name="calendar" />
      <Button name="Books" />
    </div>
  );
};

export default ButtonList;
