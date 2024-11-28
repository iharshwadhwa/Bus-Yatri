import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
  
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Login successful
        setMessage("Login successful!");
        
        // Store token and user details in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("username", data.user.username);
  
        window.location.href = "/dashboard"; // Redirect to a protected route
      } else {
        // Handle errors
        setMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div>
        <style>
        {`
          body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #ffffff, #6e8efb);
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }
          .signup-card {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            box-sizing: border-box;
            animation: fadeIn 1s ease-in-out;
            margin: auto;
          }
          h2 {
            color: #333;
            margin-bottom: 20px;
          }
          .form-group label {
            font-weight: 500;
            color: #333;
          }
          .form-control {
            padding: 12px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
            width: 100%;
            margin: 5px 0;
          }
          .btn-primary {
            background-color: #6e8efb;
            border: none;
            padding: 14px;
            border-radius: 5px;
            font-size: 18px;
            transition: background-color 0.3s ease;
            color: white;
            cursor: pointer;
          }
          .btn-primary:hover {
            background-color: #4a69bd;
          }
          p {
            font-size: 14px;
            color: black;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    <div className="login-container">
      <div className="imgcontainer">
        <img
          src="src/assets/img/busYatri-removebg-preview copy.png"
          alt="Bus Yatri Logo"
          className="avatar"
        />
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            id="psw"
            name="psw"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="text-black">
        Don't have an account? <a href="/signup">Register here</a>
      </p>
    </div>
    </div>
  );
};

export default Login;
