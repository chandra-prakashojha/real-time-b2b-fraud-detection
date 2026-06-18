import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import RiskCards from "../components/RiskCards";
import AlertTable from "../components/AlertTable";
import api from "../services/api";

import SeverityPieChart from
"../components/charts/SeverityPieChart";

import FraudTrendChart from
"../components/charts/FraudTrendChart";

import "../styles/dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalAlerts: 0,
    highRiskUsers: 0,
    fraudEvents: 0,
    activeUsers: 0,
  });

const [alerts, setAlerts] = useState([]);

const [severityData, setSeverityData] =
  useState([]);

  const [fraudTrendData, setFraudTrendData] =
  useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Dashboard Statistics
        const statsResponse = await api.get(
          "/dashboard/stats"
        );

        console.log(
          "Dashboard Stats:",
          statsResponse.data
        );

        setStats(statsResponse.data);

        // Alerts
      const alertsResponse = await api.get(
  "/dashboard/alerts"
);

        console.log(
          "Alerts:",
          alertsResponse.data
        );

        setAlerts(alertsResponse.data);

        const analyticsResponse =
  await api.get(
    "/dashboard/analytics"
  );

console.log(
  "Severity Response:",
  analyticsResponse.data
    .severityDistribution
);

setSeverityData(
  analyticsResponse.data
    .severityDistribution
);

const trendResponse =
  await api.get(
    "/dashboard/fraud-trends"
  );

console.log(
  "Trend Response:",
  trendResponse.data
);

setFraudTrendData(
  trendResponse.data
);

      } catch (error) {
        console.error(
          "Dashboard Error:",
          error
        );
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "20px",
        }}
      >
<RiskCards stats={stats} />

<SeverityPieChart
  data={severityData}
/>

<FraudTrendChart
  data={fraudTrendData}
/>

<AlertTable alerts={alerts} />
      </div>
    </div>
  );
}

export default Dashboard;