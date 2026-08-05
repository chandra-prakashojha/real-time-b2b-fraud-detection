import "../../styles/landing.css";

function WorkflowSection() {
  const pipeline = [
    {
      step: "01",
      title: "JWT Authentication",
      description:
        "Validate every incoming request before allowing access to protected APIs."
    },
    {
      step: "02",
      title: "Redis Rate Limiting",
      description:
        "Monitor request frequency and prevent abuse or brute-force attempts."
    },
    {
      step: "03",
      title: "AI Risk Engine",
      description:
        "Analyze request behavior using machine learning anomaly detection."
    },
    {
      step: "04",
      title: "Risk Evaluation",
      description:
        "Generate LOW, MEDIUM or HIGH fraud risk scores in real time."
    },
    {
      step: "05",
      title: "Security Dashboard",
      description:
        "Visualize alerts, analytics and live security events for administrators."
    }
  ];

  return (
    <section
      id="workflow"
      className="workflow"
    >
      <div className="container">

        <div className="workflow-header">

          <span className="workflow-tag">
            Request Lifecycle
          </span>

          <h2>
            Every Request.
            <br />
            Every Layer.
            <br />
            Every Decision.
          </h2>

          <p>
            Every API request passes through multiple security
            checkpoints before reaching your application.
          </p>

        </div>

        <div className="pipeline">

          <div className="request-node">
            Client Request
          </div>

          {pipeline.map((item, index) => (

            <div
              className="pipeline-item"
              key={index}
            >

              <div className="pipeline-line" />

              <div className="pipeline-card">

                <span className="pipeline-step">
                  {item.step}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WorkflowSection;