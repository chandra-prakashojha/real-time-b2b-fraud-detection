
import "../../styles/landing.css";

function WorkflowSection() {
  return (
    <section className="workflow">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Security Workflow
          </span>

          <h2>
            Every API Request Passes Through
            <span> Multiple Security Layers</span>
          </h2>

          <p className="workflow-intro">
            FraudShield Enterprise follows a layered security approach where
            every incoming API request is analyzed through multiple intelligent
            checkpoints before reaching the application.
          </p>

        </div>

        <div className="workflow-grid">

          <div className="workflow-step">
            <div className="step-number">01</div>
            <h3>Authentication</h3>
            <p>
              Every request is authenticated using JWT before accessing protected resources.
            </p>
          </div>

          <div className="workflow-step">
            <div className="step-number">02</div>
            <h3>Behavior Analysis</h3>
            <p>
              User activity and request behavior are continuously analyzed for suspicious patterns.
            </p>
          </div>

          <div className="workflow-step">
            <div className="step-number">03</div>
            <h3>Rate Limiting</h3>
            <p>
              Intelligent Redis-powered controls prevent brute-force attacks and request flooding.
            </p>
          </div>

          <div className="workflow-step">
            <div className="step-number">04</div>
            <h3>AI Risk Detection</h3>
            <p>
              Machine learning evaluates every request and generates a dynamic fraud risk score.
            </p>
          </div>

          <div className="workflow-step">
            <div className="step-number">05</div>
            <h3>Threat Response</h3>
            <p>
              Suspicious activities trigger real-time alerts and are immediately visible on the dashboard.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkflowSection;