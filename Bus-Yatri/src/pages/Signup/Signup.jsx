import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(""); // Reset error
      setMessage(""); // Reset message

      const response = await axios.post("http://localhost:3000/auth/register", formData);
      setMessage(response.data.message); // Success message
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message); // API error message
      } else {
        setError("Something went wrong. Please try again.");
      }
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
      <div className="signup-card">
      <div className="imgcontainer">
        <img
          src="src/assets/img/busYatri-removebg-preview copy.png"
          alt="Bus Yatri Logo"
          className="avatar"
        />
      </div>
        <h2>Signup</h2>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-control"
              />
            </label>
          </div>
          <button type="submit" className="btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
