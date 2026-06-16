
function AlertTable() {
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
            <th>User</th>
            <th>Alert Type</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>john@gmail.com</td>
            <td>HIGH_LOGIN_VELOCITY</td>
            <td>MEDIUM</td>
          </tr>

          <tr>
            <td>admin@gmail.com</td>
            <td>ML_FRAUD_DETECTED</td>
            <td>HIGH</td>
          </tr>

          <tr>
            <td>user@gmail.com</td>
            <td>ACCOUNT_LOCKED</td>
            <td>CRITICAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;