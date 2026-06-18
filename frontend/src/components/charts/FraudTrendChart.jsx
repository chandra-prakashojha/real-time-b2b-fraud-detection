
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function FraudTrendChart({ data }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.08)",
        marginTop: "20px"
      }}
    >
      <h3>Fraud Alert Trends</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="alerts"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FraudTrendChart;