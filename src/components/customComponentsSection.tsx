import React from "react";
import CustomButton from "./customComponeents/customButton/CustomButton";

const CustomComponents = () => {
  return (
    <div>
      <CustomButton
        handlClick={() => {
          alert("you clicked me");
        }}
        mt="1em"
      />
    </div>
  );
};

export default CustomComponents;
