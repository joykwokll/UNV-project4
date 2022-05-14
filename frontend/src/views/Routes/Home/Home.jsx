import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  let navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={handleProfile}>Sign up now!</button>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&family=Londrina+Solid:wght@300;400&family=Quicksand:wght@300&display=swap');
      </style>
    </div>
  );
}

export default Home;
