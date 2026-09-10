import "../../styles/landing.css";

function TrustSection() {
  const trustPoints = [
    {
      number: "01",
      title: "Enterprise Ready",
      description:
        "Built using a scalable architecture capable of protecting enterprise-grade applications while maintaining high availability and performance."
    },
    {
      number: "02",
      title: "AI-Driven Intelligence",
      description:
        "Machine learning continuously analyzes API behavior to identify suspicious activities that traditional rule-based systems often miss."
    },
    {
      number: "03",
      title: "Real-Time Visibility",
      description:
        "Live dashboards, instant alerts, and centralized monitoring enable administrators to respond quickly to evolving security threats."
    }
  ];

  return (
    <section
      id="trust"
      className="trust-section"
    >

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

          {trustPoints.map((point) => (

            <article
              key={point.number}
              className="trust-card"
            >

              <div className="trust-number">
                {point.number}
              </div>

              <div className="trust-content">

                <h3>
                  {point.title}
                </h3>

                <p>
                  {point.description}
                </p>

              </div>

              <div className="trust-accent"></div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustSection;