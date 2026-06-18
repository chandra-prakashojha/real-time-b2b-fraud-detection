
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/auth.css";

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
    <div className="auth-container">
      <form
        className="auth-card"
        onSubmit={handleSubmit}
      >
        <h2>Create Account</h2>

        {error && (
          <p className="error">{error}</p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;