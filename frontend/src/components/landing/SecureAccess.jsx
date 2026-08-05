
import "../../styles/landing.css";

function SecureAccess({
  formData,
  handleChange,
  handleSubmit,
  error,
  navigate,
}) {
  return (
   <section id="access" className="secure-access">

      <div className="container">

        <div className="access-wrapper">

          {/* Left Side */}

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

            <div className="demo-info glass">

              <h3>Demo Environment</h3>

              <p>
                Experience the complete platform using the
                administrator account provided for demonstration
                purposes.
              </p>

              <strong>Email:</strong>

              <p>
                admin@fraudshield.com
              </p>

              <strong>Password:</strong>

              <p>
                ********
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="access-form glass">

            <h2>
              Welcome Back
            </h2>

            <p>
              Sign in to continue
            </p>

            {error && (
              <p className="error">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit}>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                className="primary-btn"
                type="submit"
              >
                Secure Login
              </button>

            </form>

            <p className="register-link">

              Don't have an account?

              <span
                onClick={() => navigate("/register")}
              >
                Register
              </span>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SecureAccess;