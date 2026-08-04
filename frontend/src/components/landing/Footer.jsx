
import "../../styles/landing.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">

            <h2>🛡 FraudShield Enterprise</h2>

            <p>
              AI-powered API Security & Real-Time Fraud Detection
              platform helping organizations secure modern APIs
              through intelligent monitoring, behavioral analysis,
              and enterprise-grade protection.
            </p>

          </div>

          <div className="footer-column">

            <h3>Platform</h3>

            <ul>

              <li>API Security</li>

              <li>Threat Detection</li>

              <li>Live Monitoring</li>

              <li>Fraud Analytics</li>

            </ul>

          </div>

          <div className="footer-column">

            <h3>Solutions</h3>

            <ul>

              <li>Enterprise APIs</li>

              <li>Authentication</li>

              <li>Rate Limiting</li>

              <li>Machine Learning</li>

            </ul>

          </div>

          <div className="footer-column">

            <h3>Project</h3>

            <ul>

              <li>Documentation</li>

              <li>Architecture</li>

              <li>GitHub</li>

              <li>Contact</li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 FraudShield Enterprise.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;