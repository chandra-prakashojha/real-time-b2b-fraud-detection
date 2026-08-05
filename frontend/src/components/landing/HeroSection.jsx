import "./../../styles/landing.css";

function HeroSection() {
  return (
  <section id="hero" className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <span className="hero-tag">
            🛡 Enterprise API Security Platform
          </span>

          <h1>
            Protect Every
            <span> API Request </span>
            Before It Becomes
            <br />
            A Threat.
          </h1>

          <p>
            FraudShield Enterprise is an AI-powered security platform
            designed to safeguard modern APIs against fraud, credential
            abuse, automated attacks, and behavioral anomalies. Combining
            intelligent monitoring with machine learning, it delivers
            enterprise-grade protection while providing complete visibility
            into your organization's API ecosystem.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Secure Login
            </button>

            <button className="secondary-btn">
              Explore Platform
            </button>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="hero-image">

          <div className="browser-window glass">

            <div className="browser-top">

              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>

            </div>

            <div className="browser-content">

              <div className="status-box">

                <h4>Threat Status</h4>

                <h2>LOW</h2>

              </div>

              <div className="mini-grid">

                <div className="mini-card glass">

                  <h3>18,542</h3>

                  <p>API Requests</p>

                </div>

                <div className="mini-card glass">

                  <h3>12</h3>

                  <p>Active Alerts</p>

                </div>

                <div className="mini-card glass">

                  <h3>99.2%</h3>

                  <p>Detection Rate</p>

                </div>

                <div className="mini-card glass">

                  <h3>24/7</h3>

                  <p>Monitoring</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="scroll-indicator">

        <span>Scroll to Discover</span>

        <div className="scroll-arrow">
          ↓
        </div>

      </div>

    </section>
  );
}

export default HeroSection;