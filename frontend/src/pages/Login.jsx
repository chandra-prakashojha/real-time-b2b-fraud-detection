import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/auth.css";

import HeroSection from "../components/landing/HeroSection";
import ChallengeSection from "../components/landing/ChallengeSection";
import WorkflowSection from "../components/landing/WorkflowSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import DashboardSection from "../components/landing/DashboardSection";
import TrustSection from "../components/landing/TrustSection";
import SecureAccess from "../components/landing/SecureAccess";
import Footer from "../components/landing/Footer";
import LandingNavbar from "../components/landing/LandingNavbar";


import "../styles/landing.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const res = await api.post("/login", formData);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

 return (
 <div className="landing-page">

    <LandingNavbar />

    <HeroSection />

    <ChallengeSection />

    <WorkflowSection />

    <FeaturesSection />

    <DashboardSection />

    <TrustSection />

    <SecureAccess
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      navigate={navigate}
    />

    <Footer />

</div>
);
}

export default Login;