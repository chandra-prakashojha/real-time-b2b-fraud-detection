
import "../../styles/landing.css";

function ChallengeSection() {
  return (
   <section id="challenge" className="challenge">
      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Why API Security Matters
          </span>

          <h2>
            Modern Businesses Face
            <span> Evolving Cyber Threats</span>
          </h2>

        </div>

        <div className="challenge-grid">

          <div className="challenge-left">

            <p>
              APIs have become the backbone of modern applications,
              connecting users, services, and business operations across
              digital ecosystems. As organizations continue to expand
              their online presence, APIs process millions of requests
              every day, making them one of the most attractive targets
              for cybercriminals.
            </p>

            <p>
              Traditional security solutions often rely on predefined
              rules that struggle to detect sophisticated attacks such as
              credential stuffing, brute-force attempts, automated bot
              traffic, and abnormal user behavior. These evolving threats
              require intelligent systems capable of understanding
              behavioral patterns rather than simply matching known attack
              signatures.
            </p>

          </div>

          <div className="challenge-right">

            <div className="glass challenge-card">

              <h3>
                Why Organizations Need
                Intelligent Protection
              </h3>

              <ul>

                <li>
                  Detect suspicious API behavior before it escalates.
                </li>

                <li>
                  Prevent credential abuse and brute-force attacks.
                </li>

                <li>
                  Continuously monitor user activity in real time.
                </li>

                <li>
                  Strengthen security without impacting performance.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ChallengeSection;