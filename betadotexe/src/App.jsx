import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tests from "./pages/Tests";
import Leaderboard from "./pages/Leaderboard";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="sex-container">
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </div>
  );
}
