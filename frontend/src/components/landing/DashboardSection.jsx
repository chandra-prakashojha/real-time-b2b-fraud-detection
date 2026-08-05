
import "../../styles/landing.css";

function DashboardSection() {
  return (
    <section id="dashboard" className="dashboard-showcase">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Security Dashboard
          </span>

          <h2>
            Monitor Every Threat Through A
            <span> Unified Security Dashboard</span>
          </h2>

          <p className="section-description">
            FraudShield Enterprise provides administrators with a centralized
            dashboard that delivers complete visibility into security events,
            fraud trends, API traffic, and real-time threat intelligence,
            enabling faster detection and response.
          </p>

        </div>

        <div className="dashboard-preview glass">

          <div className="browser-bar">

            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>

            <p>
              https://dashboard.fraudshield.enterprise
            </p>

          </div>

          <div className="dashboard-placeholder">

            <h3>
              Dashboard Preview
            </h3>

            <p>
              Your actual dashboard screenshot
              will be placed here later.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardSection;