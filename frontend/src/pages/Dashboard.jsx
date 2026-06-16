import Navbar from "../components/Navbar";
import RiskCards from "../components/RiskCards";
import AlertTable from "../components/AlertTable";
import "../styles/dashboard.css";

function Dashboard() {
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
        <RiskCards />
        <AlertTable />
      </div>
    </div>
  );
}

export default Dashboard;