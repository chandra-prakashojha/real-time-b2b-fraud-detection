import "../../styles/landing.css";

function LandingNavbar() {
  return (
    <nav className="landing-navbar">

      <div className="landing-nav-container">

        <div className="landing-logo">
          🛡 FraudShield
        </div>

        <ul className="landing-nav-links">

          <li><a href="#hero">Home</a></li>

          <li><a href="#challenge">Challenge</a></li>

          <li><a href="#workflow">Workflow</a></li>

          <li><a href="#features">Features</a></li>

          <li><a href="#dashboard">Dashboard</a></li>

        </ul>

        <button className="landing-login-btn">
          Secure Access
        </button>

      </div>

    </nav>
  );
}

export default LandingNavbar;