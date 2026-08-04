
import "../../styles/landing.css";

function TrustSection() {
  return (
    <section className="trust">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Why Organizations Choose FraudShield
          </span>

          <h2>
            Security Designed For Modern
            <span> Enterprise Applications</span>
          </h2>

          <p className="section-description">
            FraudShield Enterprise combines intelligent monitoring,
            adaptive security controls, and real-time threat detection
            into a unified platform that helps organizations secure
            mission-critical APIs with confidence.
          </p>

        </div>

        <div className="trust-grid">

          <div className="trust-card glass">

            <h3>Enterprise Ready</h3>

            <p>
              Built using a scalable architecture capable of
              protecting enterprise-grade applications while
              maintaining high availability and performance.
            </p>

          </div>

          <div className="trust-card glass">

            <h3>AI-Driven Intelligence</h3>

            <p>
              Machine learning continuously analyzes API
              behavior to identify suspicious activities
              that traditional rule-based systems often miss.
            </p>

          </div>

          <div className="trust-card glass">

            <h3>Real-Time Visibility</h3>

            <p>
              Live dashboards, instant alerts, and centralized
              monitoring enable administrators to respond
              quickly to evolving security threats.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrustSection;