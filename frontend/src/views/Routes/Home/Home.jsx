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
    </div>
  );
}

export default Home;
