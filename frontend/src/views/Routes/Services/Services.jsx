import React from "react";
import { useNavigate } from "react-router-dom";

const options = ["Anti Aging", "Pigmentation", "Sensitive Skin", "Pimple"];
const defaultOption = options[0];

function Services(props) {
  let navigate = useNavigate();

  const handleAntiAging = () => {
    navigate("/antiaging");
  };


  return (
    <div>
     <button onClick={handleAntiAging}>AntiAging</button>
    </div>
  );
}

export default Services;

