function AlertTable({ alerts }) {

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "CRITICAL":
        return "#dc2626";

      case "HIGH":
        return "#f97316";

      case "MEDIUM":
        return "#eab308";

      case "LOW":
        return "#22c55e";

      default:
        return "#6b7280";
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Recent Fraud Alerts
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f3f4f6",
            }}
          >
            <th style={{ padding: "12px" }}>
              Alert Type
            </th>

            <th style={{ padding: "12px" }}>
              Severity
            </th>

            <th style={{ padding: "12px" }}>
              Status
            </th>

            <th style={{ padding: "12px" }}>
              Message
            </th>

            <th style={{ padding: "12px" }}>
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <tr
                key={alert._id}
                style={{
                  borderBottom:
                    "1px solid #e5e7eb",
                }}
              >
                <td
                  style={{
                    padding: "12px",
                  }}
                >
                  {alert.alertType}
                </td>

                <td
                  style={{
                    padding: "12px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor:
                        getSeverityColor(
                          alert.severity
                        ),
                      color: "white",
                      padding:
                        "5px 10px",
                      borderRadius:
                        "20px",
                      fontWeight:
                        "bold",
                      fontSize:
                        "12px",
                    }}
                  >
                    {alert.severity}
                  </span>
                </td>

                <td
                  style={{
                    padding: "12px",
                  }}
                >
                  {alert.status ||
                    "OPEN"}
                </td>

                <td
                  style={{
                    padding: "12px",
                  }}
                >
                  {alert.message}
                </td>

                <td
                  style={{
                    padding: "12px",
                  }}
                >
                  {alert.createdAt
                    ? new Date(
                        alert.createdAt
                      ).toLocaleString()
                    : "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  padding: "20px",
                  textAlign:
                    "center",
                }}
              >
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