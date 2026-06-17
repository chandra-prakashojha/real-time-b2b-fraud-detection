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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/dashboard/stats");

        console.log(response.data);

        setStats(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
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
        <AlertTable />
      </div>
    </div>
  );
}

export default Dashboard;