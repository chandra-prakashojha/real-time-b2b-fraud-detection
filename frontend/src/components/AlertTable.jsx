function AlertTable({ alerts }) {
  return (
    <div
      style={{
        marginTop: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Recent Fraud Alerts</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Alert Type</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <tr key={alert._id}>
                <td>{alert.alertType}</td>
                <td>{alert.severity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">
                No Alerts Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;