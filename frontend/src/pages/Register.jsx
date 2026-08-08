import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/register.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/register", formData);

      alert("Registration Successful. Please Login.");

      navigate("/");

    } catch (err) {

      console.log("Register Error:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="register-page">

      {/* Background glow */}

      <div className="register-glow register-glow-one"></div>

      <div className="register-glow register-glow-two"></div>


      {/* Brand */}

      <div className="register-brand">

        <span className="register-brand-icon">
          ◇
        </span>

        FraudShield

      </div>


      {/* Register Card */}

      <div className="register-card">

        <div className="register-header">

          <span className="register-tag">
            SECURE ACCESS
          </span>

          <h1>
            Create your account
          </h1>

          <p>
            Join FraudShield and access enterprise
            security intelligence.
          </p>

        </div>


        {error && (

          <div className="register-error">
            {error}
          </div>

        )}


        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          <div className="register-field">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="register-field">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="register-field">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a secure password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            className="register-submit"
          >
            Create Account
          </button>

        </form>


        <div className="register-footer">

          <span>
            Already have an account?
          </span>

          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Sign in
          </button>

        </div>

      </div>


      <div className="register-security">

        Protected by FraudShield Security

      </div>

    </div>

  );

}

export default Register;