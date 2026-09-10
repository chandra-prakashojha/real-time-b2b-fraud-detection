import "../../styles/landing.css";

const features = [
  {
    number: "01",
    title: "AI Fraud Detection",
    description:
      "Continuously analyzes user behavior and API requests using machine learning to identify suspicious activities before they become security incidents."
  },
  {
    number: "02",
    title: "Enterprise Authentication",
    description:
      "Protect sensitive resources through secure JWT authentication and Role-Based Access Control for enterprise-grade access management."
  },
  {
    number: "03",
    title: "Real-Time Monitoring",
    description:
      "Track API traffic, suspicious requests, and security events instantly through a centralized monitoring dashboard."
  },
  {
    number: "04",
    title: "Adaptive Rate Limiting",
    description:
      "Prevent brute-force attacks and excessive traffic using intelligent Redis-powered request throttling."
  },
  {
    number: "05",
    title: "Threat Analytics",
    description:
      "Gain complete visibility into fraud trends, security alerts, and risk distribution through interactive analytics."
  },
  {
    number: "06",
    title: "Multi-Layer Protection",
    description:
      "Combine authentication, monitoring, AI detection, and intelligent security controls into one unified protection platform."
  }
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="features-section"
    >

      <div className="container">

        {/* Section Header */}

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


        {/* Feature Grid */}

        <div className="features-grid">

          {features.map((feature) => (

            <article
              key={feature.number}
              className="feature-card"
            >

              <div className="feature-number">
                {feature.number}
              </div>

              <div className="feature-content">

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>

              <div className="feature-line"></div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;