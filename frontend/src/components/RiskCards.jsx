
function RiskCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div className="card">
        <h3>Total Alerts</h3>
        <h1>128</h1>
      </div>

      <div className="card">
        <h3>High Risk Users</h3>
        <h1>12</h1>
      </div>

      <div className="card">
        <h3>Fraud Events</h3>
        <h1>43</h1>
      </div>

      <div className="card">
        <h3>Active Users</h3>
        <h1>890</h1>
      </div>
    </div>
  );
}

export default RiskCards;