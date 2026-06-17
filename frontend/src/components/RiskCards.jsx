function RiskCards({ stats }) {
  console.log("RiskCards Stats:", stats);
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
        <h1>{stats.totalAlerts}</h1>
      </div>

      <div className="card">
        <h3>High Risk Users</h3>
        <h1>{stats.highRiskUsers}</h1>
      </div>

      <div className="card">
        <h3>Fraud Events</h3>
        <h1>{stats.fraudEvents}</h1>
      </div>

      <div className="card">
        <h3>Active Users</h3>
        <h1>{stats.activeUsers}</h1>
      </div>
    </div>
  );
}

export default RiskCards;