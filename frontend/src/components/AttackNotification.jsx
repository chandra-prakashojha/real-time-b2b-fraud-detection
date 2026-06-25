
function AttackNotification({ notification }) {

  if (!notification) return null;

  return (
    <div
      style={{
        background:
          notification.severity === "CRITICAL"
            ? "#fee2e2"
            : "#fef3c7",

        borderLeft:
          notification.severity === "CRITICAL"
            ? "6px solid #dc2626"
            : "6px solid #f59e0b",

        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >
      <h3>
        🚨 Attack Detected
      </h3>

      <p>
        <strong>Type:</strong>{" "}
        {notification.alertType}
      </p>

      <p>
        <strong>Severity:</strong>{" "}
        {notification.severity}
      </p>

      <p>
        {notification.message}
      </p>
    </div>
  );
}

export default AttackNotification;