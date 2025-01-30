import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Redirect the user to the backend OAuth2 Google login endpoint
    window.location.href = "http://localhost:8088/oauth2/authorization/google"; // Adjust your backend URL if needed
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login to News Aggregator</h2>
        <div className="google-login-button">
          <button onClick={handleGoogleLogin} className="google-btn">
            <img
              src="src/assets/google.png"
              alt="Google Logo"
              className="google-icon"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
