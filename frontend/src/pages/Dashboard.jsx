import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import RiskCards from "../components/RiskCards";
import AlertTable from "../components/AlertTable";
import api from "../services/api";

import "../styles/dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalAlerts: 0,
    highRiskUsers: 0,
    fraudEvents: 0,
    activeUsers: 0,
  });

  const [alerts, setAlerts] = useState([]);

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

        <AlertTable alerts={alerts} />
      </div>
    </div>
  );
}

export default Dashboard;