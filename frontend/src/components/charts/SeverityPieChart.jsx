
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#dc2626", // CRITICAL
  "#f97316", // HIGH
  "#eab308", // MEDIUM
  "#22c55e"  // LOW
];

function SeverityPieChart({ data }) {
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
      <h3>Alerts by Severity</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SeverityPieChart;