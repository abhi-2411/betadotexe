import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>beta.exe</h2>
      <div className="list">
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="active search-button">Dashboard</li>
          </Link>
          <Link
            to="/tests"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-button">Tests</li>
          </Link>
          <Link
            to="/leaderboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-button">Leaderboard</li>
          </Link>
          <Link
            to="/reports"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-button">Reports</li>
          </Link>
        </ul>
      </div>
      <div className="bottom-links">
        <a href="#">Logout</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
