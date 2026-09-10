
import "../../styles/landing.css";

function Footer() {
  return (
    <footer className="landing-footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand">

            <div className="footer-logo">
              <span>◇</span>
              FraudShield Enterprise
            </div>

            <p>
              AI-powered API Security & Real-Time Fraud Detection
              platform helping organizations secure modern APIs
              through intelligent monitoring, behavioral analysis,
              and enterprise-grade protection.
            </p>

          </div>


          {/* Platform */}

          <div className="footer-column">

            <h3>
              Platform
            </h3>

            <ul>

              <li>
                <a href="#features">
                  API Security
                </a>
              </li>

              <li>
                <a href="#features">
                  Threat Detection
                </a>
              </li>

              <li>
                <a href="#dashboard">
                  Live Monitoring
                </a>
              </li>

              <li>
                <a href="#dashboard">
                  Fraud Analytics
                </a>
              </li>

            </ul>

          </div>


          {/* Solutions */}

          <div className="footer-column">

            <h3>
              Solutions
            </h3>

            <ul>

              <li>
                <a href="#access">
                  Enterprise APIs
                </a>
              </li>

              <li>
                <a href="#access">
                  Authentication
                </a>
              </li>

              <li>
                <a href="#features">
                  Rate Limiting
                </a>
              </li>

              <li>
                <a href="#features">
                  Machine Learning
                </a>
              </li>

            </ul>

          </div>


          {/* Project */}

          <div className="footer-column">

            <h3>
              Project
            </h3>

            <ul>

              <li>
                <a href="#workflow">
                  Architecture
                </a>
              </li>

              <li>
                <a href="#dashboard">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#access">
                  Secure Access
                </a>
              </li>

              <li>
                <a href="#hero">
                  Back to Top
                </a>
              </li>

            </ul>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2026 FraudShield Enterprise.
            All Rights Reserved.
          </p>

          <span>
            AI-Powered API Security & Fraud Detection
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;