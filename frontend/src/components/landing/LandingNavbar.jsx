import { useState } from "react";
import "../../styles/landing.css";

function LandingNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="landing-navbar">

      <div className="landing-nav-container">

        {/* Logo */}

        <a
          href="#hero"
          className="landing-logo"
          onClick={closeMenu}
        >
          FraudShield
        </a>


        {/* Desktop Navigation */}

        <ul className="landing-nav-links">

          <li>
            <a href="#hero">
              Home
            </a>
          </li>

          <li>
            <a href="#challenge">
              Challenge
            </a>
          </li>

          <li>
            <a href="#workflow">
              Workflow
            </a>
          </li>

          <li>
            <a href="#features">
              Features
            </a>
          </li>

          <li>
            <a href="#dashboard">
              Dashboard
            </a>
          </li>

        </ul>


        {/* Desktop Secure Access */}

        <a
          href="#access"
          className="landing-login-btn"
        >
          Secure Access
        </a>


        {/* Mobile Menu Button */}

        <button
          type="button"
          className={`landing-menu-btn ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      {/* Mobile Navigation */}

      <div
        className={`landing-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <a
          href="#hero"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#challenge"
          onClick={closeMenu}
        >
          Challenge
        </a>

        <a
          href="#workflow"
          onClick={closeMenu}
        >
          Workflow
        </a>

        <a
          href="#features"
          onClick={closeMenu}
        >
          Features
        </a>

        <a
          href="#dashboard"
          onClick={closeMenu}
        >
          Dashboard
        </a>

        <a
          href="#access"
          className="mobile-access-btn"
          onClick={closeMenu}
        >
          Secure Access
        </a>

      </div>

    </nav>
  );
}

export default LandingNavbar;