import React from "react";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  let navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registerform");
  };

  const handleLogin = () => {
    navigate("/loginform");
  };

  return (
    <div>
      <p>Profile</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Profile;
