import React from "react";
import "../components-css/Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar element-box-shadow">
      <h2>beta.exe</h2>
      <div className="list">
        <ul>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="search-button">Dashboard</li>
          </NavLink>
          <NavLink
            to="/tests"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-buttonf">Tests</li>
          </NavLink>
          <NavLink
            to="/leaderboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-button">Leaderboard</li>
          </NavLink>
          <NavLink
            to="/reports"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="search-button">Reports</li>
          </NavLink>
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
