
function LiveApiLogs({ logs }) {
  return (
    <div
      style={{
        marginTop: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >
      <h2>Live API Activity</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>IP Address</th>
          </tr>
        </thead>

        <tbody>
          {logs.length > 0 ? (
            logs.map((log) => (
              <tr key={log._id}>
                <td>{log.method}</td>
                <td>{log.endpoint}</td>
                <td>{log.ipAddress}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">
                No API Activity
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LiveApiLogs;