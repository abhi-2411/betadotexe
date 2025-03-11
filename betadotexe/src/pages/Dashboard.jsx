import React from "react";

import "../pages-css/dashboard.css";
import "../components-css/Sidebar.css";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="main-content">
      <header>
        <h1>Hi Nitheesh!</h1>
        <div className="header-icons">
          <button className="login-button">Login</button>
          <span>🔍</span>
          <span>🔔</span>
          <NavLink to="/profile">
            <div className="profile-pic"></div>
          </NavLink>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="card profile element-box-shadow">
          <NavLink to="/profile">
            <h3>Profile</h3>
          </NavLink>
          <p>Name: </p>
          <p>Department: </p>
          <p>Course:</p>
          <div className="profile-placeholder"></div>
        </div>

        <div className="card test-status element-box-shadow">
          <h3>Test Status</h3>
          <p>
            <strong>43</strong> Total Tests | <strong>12</strong> Completed
          </p>
          <div className="status-grid">
            <div className="status-box">43 Tests</div>
            <div className="status-box">5 In Progress</div>
            <div className="status-box">26 Remaining</div>
          </div>
        </div>

        <div className="card time-spent element-box-shadow">
          <h3>Time Spent on Tests</h3>
          <p>
            <strong>54</strong> minutes
          </p>
        </div>

        <div className="card to-be-added element-box-shadow">
          <h3>To be Added</h3>
        </div>

        <div className="card test-performance element-box-shadow">
          <h3>Test Performance</h3>
          <p>Performance over the last 5 tests</p>
          <div className="performance-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
