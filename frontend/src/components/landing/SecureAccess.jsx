import "../../styles/landing.css";

function SecureAccess({
  formData,
  handleChange,
  handleSubmit,
  error,
  navigate,
}) {
  return (
    <section
      id="access"
      className="secure-access-section"
    >

      <div className="container">

        <div className="access-wrapper">

          {/* =========================
                LEFT SIDE
          ========================== */}

          <div className="access-content">

            <span className="section-tag">
              Secure Access Portal
            </span>

            <h2>
              Access The
              <span> FraudShield Enterprise</span>
              Dashboard
            </h2>

            <p>
              Sign in to access the centralized security dashboard,
              monitor live API activity, review fraud alerts, analyze
              security trends, and manage enterprise protection through
              an intelligent monitoring platform designed for modern
              businesses.
            </p>


            {/* Security capabilities */}

            <div className="access-highlights">

              <div className="access-highlight">

                <span className="access-highlight-number">
                  01
                </span>

                <div>
                  <h3>
                    Protected Access
                  </h3>

                  <p>
                    JWT authentication and role-based
                    authorization protect sensitive resources.
                  </p>
                </div>

              </div>


              <div className="access-highlight">

                <span className="access-highlight-number">
                  02
                </span>

                <div>
                  <h3>
                    Real-Time Intelligence
                  </h3>

                  <p>
                    Monitor fraud events, API activity and
                    security alerts from one centralized dashboard.
                  </p>
                </div>

              </div>


              <div className="access-highlight">

                <span className="access-highlight-number">
                  03
                </span>

                <div>
                  <h3>
                    Enterprise Security
                  </h3>

                  <p>
                    Multi-layer protection combines authentication,
                    rate limiting and AI-powered risk analysis.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
                LOGIN FORM
          ========================== */}

          <div className="access-form glass">

            <div className="access-form-header">

              <span className="access-form-tag">
                AUTHENTICATED ACCESS
              </span>

              <h2>
                Welcome Back
              </h2>

              <p>
                Sign in to continue to your security dashboard.
              </p>

            </div>


            {error && (

              <div className="access-error">
                {error}
              </div>

            )}


            <form onSubmit={handleSubmit}>

              <div className="access-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="access-field">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>


              <button
                className="primary-btn access-submit"
                type="submit"
              >
                Secure Login
              </button>

            </form>


            <div className="register-link">

              <span>
                Don't have an account?
              </span>

              <button
                type="button"
                onClick={() => navigate("/register")}
              >
                Create an account
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SecureAccess;