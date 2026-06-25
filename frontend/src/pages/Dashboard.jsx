import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import RiskCards from "../components/RiskCards";
import AlertTable from "../components/AlertTable";
import LiveApiLogs from "../components/LiveApiLogs";

import AttackNotification from "../components/AttackNotification";

import api from "../services/api";
import socket from "../services/socket";

import SeverityPieChart from
  "../components/charts/SeverityPieChart";

import FraudTrendChart from
  "../components/charts/FraudTrendChart";

import RiskDistributionChart from
  "../components/charts/RiskDistributionChart";

import "../styles/dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalAlerts: 0,
    highRiskUsers: 0,
    fraudEvents: 0,
    activeUsers: 0,
  });

  const [alerts, setAlerts] = useState([]);

 const [notification, setNotification] = useState({
  alertType: "TEST_ALERT",
  severity: "CRITICAL",
  message: "This is a test notification"
});

  const [apiLogs, setApiLogs] = useState([]);

  const [severityData, setSeverityData] =
    useState([]);

  const [fraudTrendData, setFraudTrendData] =
    useState([]);

  const [
    riskDistributionData,
    setRiskDistributionData
  ] = useState([]);

  // ===========================
  // Socket.IO
  // ===========================

  useEffect(() => {

    socket.on("connect", () => {
      console.log(
        "Connected to Socket.IO:",
        socket.id
      );
    });

   socket.on("new-alert", (alert) => {

  console.log(
    "Live Alert Received:",
    alert
  );

  setAlerts(prev => [
    alert,
    ...prev
  ]);

  setNotification(alert);

  setStats(prev => ({
    ...prev,
    totalAlerts:
      prev.totalAlerts + 1
  }));

  // Hide notification after 5 seconds
  setTimeout(() => {
    setNotification(null);
  }, 5000);

});

    socket.on("new-api-log", (log) => {

      console.log(
        "Live API Log:",
        log
      );

      setApiLogs(prev => [
        log,
        ...prev
      ]);

    });

    return () => {

      socket.off("connect");
      socket.off("new-alert");
      socket.off("new-api-log");

    };

  }, []);

  // ===========================
  // Dashboard API Calls
  // ===========================

  useEffect(() => {

    const fetchDashboardData = async () => {

      try {

        // Dashboard Stats
        const statsResponse =
          await api.get(
            "/dashboard/stats"
          );

        console.log(
          "Dashboard Stats:",
          statsResponse.data
        );

        setStats(
          statsResponse.data
        );

        // Alerts
        const alertsResponse =
          await api.get(
            "/dashboard/alerts"
          );

        console.log(
          "Alerts:",
          alertsResponse.data
        );

        setAlerts(
          alertsResponse.data
        );

        // Severity Chart
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

        // Fraud Trends
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

        // Risk Distribution
        const riskResponse =
          await api.get(
            "/dashboard/risk-distribution"
          );

        console.log(
          "Risk Distribution:",
          riskResponse.data
        );

        setRiskDistributionData(
          riskResponse.data
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
    padding: "20px"
  }}
>
  <AttackNotification
    notification={notification}
  />
</div>

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

        <RiskDistributionChart
          data={riskDistributionData}
        />

        <AlertTable
          alerts={alerts}
        />

        <LiveApiLogs
          logs={apiLogs}
        />

      </div>
    </div>
  );
}

export default Dashboard;