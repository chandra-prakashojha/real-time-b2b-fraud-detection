import "../../styles/landing.css";

function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="dashboard-preview-section"
    >
      <div className="container">

        {/* Section Header */}
        <div className="dashboard-preview-header">

          <span className="section-tag">
            Security Intelligence
          </span>

          <h2>
            Complete Visibility.
            <br />
            <span>One Unified Dashboard.</span>
          </h2>

          <p>
            Monitor fraud activity, API threats, risk levels and
            security events from a centralized intelligence platform.
          </p>

        </div>


        {/* Dashboard Browser */}
        <div className="dashboard-browser">

          {/* Browser Header */}
          <div className="dashboard-browser-header">

            <div className="browser-controls">

              <span className="browser-dot red"></span>
              <span className="browser-dot yellow"></span>
              <span className="browser-dot green"></span>

            </div>

            <div className="browser-address">
              fraudshield.enterprise / dashboard
            </div>

            <div className="browser-status">
              LIVE PREVIEW
            </div>

          </div>


          {/* Dashboard */}
          <div className="dashboard-preview-content">

            {/* Dashboard Header */}
            <div className="preview-dashboard-title">

              <div>
                <h3>
                  Security Intelligence
                </h3>

                <p>
                  Real-time fraud monitoring
                </p>
              </div>

              <span className="live-indicator">
                <span></span>
                Monitoring
              </span>

            </div>


            {/* Risk Cards */}
            <div className="preview-metrics">

              <div className="preview-metric-card">
                <span>Total Alerts</span>
                <strong>1,284</strong>
                <small>+12.4% this week</small>
              </div>

              <div className="preview-metric-card">
                <span>High Risk Users</span>
                <strong>24</strong>
                <small>Active investigations</small>
              </div>

              <div className="preview-metric-card">
                <span>Fraud Events</span>
                <strong>187</strong>
                <small>Detected automatically</small>
              </div>

              <div className="preview-metric-card">
                <span>Protected APIs</span>
                <strong>99.9%</strong>
                <small>Security coverage</small>
              </div>

            </div>


            {/* Analytics */}
            <div className="preview-analytics">

              <div className="preview-panel">

                <div className="preview-panel-header">
                  <span>Fraud Activity</span>
                  <span>Last 7 days</span>
                </div>

                <div className="preview-chart">

                  <div className="chart-line"></div>

                  <div className="chart-line chart-line-two"></div>

                  <div className="chart-grid"></div>

                </div>

              </div>


              <div className="preview-panel">

                <div className="preview-panel-header">
                  <span>Threat Severity</span>
                  <span>Distribution</span>
                </div>

                <div className="severity-preview">

                  <div className="severity-ring">
                    <span>187</span>
                    <small>Events</small>
                  </div>

                  <div className="severity-list">

                    <div>
                      <span className="severity-dot critical"></span>
                      Critical
                      <strong>18%</strong>
                    </div>

                    <div>
                      <span className="severity-dot high"></span>
                      High
                      <strong>27%</strong>
                    </div>

                    <div>
                      <span className="severity-dot medium"></span>
                      Medium
                      <strong>35%</strong>
                    </div>

                    <div>
                      <span className="severity-dot low"></span>
                      Low
                      <strong>20%</strong>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Recent Alerts */}
            <div className="preview-alerts">

              <div className="preview-alert-header">

                <h3>
                  Recent Security Events
                </h3>

                <span>
                  View all
                </span>

              </div>


              <div className="preview-alert-row">

                <span className="alert-severity high">
                  HIGH
                </span>

                <div>
                  <strong>
                    Suspicious Login Velocity
                  </strong>

                  <small>
                    Multiple authentication attempts detected
                  </small>
                </div>

                <span className="alert-time">
                  2 min ago
                </span>

              </div>


              <div className="preview-alert-row">

                <span className="alert-severity medium">
                  MEDIUM
                </span>

                <div>
                  <strong>
                    Abnormal API Request Pattern
                  </strong>

                  <small>
                    Unusual request frequency detected
                  </small>

                </div>

                <span className="alert-time">
                  8 min ago
                </span>

              </div>


              <div className="preview-alert-row">

                <span className="alert-severity critical">
                  CRITICAL
                </span>

                <div>
                  <strong>
                    Account Lockout Triggered
                  </strong>

                  <small>
                    Repeated failed authentication attempts
                  </small>

                </div>

                <span className="alert-time">
                  14 min ago
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Indicators */}
        <div className="dashboard-preview-footer">

          <span>
            Real-time monitoring
          </span>

          <span>
            AI-powered risk analysis
          </span>

          <span>
            Automated threat detection
          </span>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;