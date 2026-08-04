
import "../../styles/landing.css";

const features = [
  {
    icon: "🧠",
    title: "AI Fraud Detection",
    description:
      "Continuously analyzes user behavior and API requests using machine learning to identify suspicious activities before they become security incidents."
  },
  {
    icon: "🔐",
    title: "Enterprise Authentication",
    description:
      "Protect sensitive resources through secure JWT authentication and Role-Based Access Control for enterprise-grade access management."
  },
  {
    icon: "⚡",
    title: "Real-Time Monitoring",
    description:
      "Track API traffic, suspicious requests, and security events instantly through a centralized monitoring dashboard."
  },
  {
    icon: "🚦",
    title: "Adaptive Rate Limiting",
    description:
      "Prevent brute-force attacks and excessive traffic using intelligent Redis-powered request throttling."
  },
  {
    icon: "📊",
    title: "Threat Analytics",
    description:
      "Gain complete visibility into fraud trends, security alerts, and risk distribution through interactive analytics."
  },
  {
    icon: "🛡",
    title: "Multi-Layer Protection",
    description:
      "Combine authentication, monitoring, AI detection, and intelligent security controls into one unified protection platform."
  }
];

function FeaturesSection() {
  return (
    <section className="features">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Platform Capabilities
          </span>

          <h2>
            Everything You Need To
            <span> Secure Modern APIs</span>
          </h2>

          <p className="section-description">
            FraudShield Enterprise combines intelligent monitoring,
            AI-driven fraud detection, and enterprise security controls
            into a single platform designed to protect modern API
            infrastructures.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div
              key={index}
              className="feature-card glass"
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;