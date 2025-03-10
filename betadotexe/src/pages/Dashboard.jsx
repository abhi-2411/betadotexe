import React from "react";
import "../pages-css/dashboard.css";
import "../components-css/Sidebar.css";
const Dashboard = () => {
  return (
    <div className="main-content">
      <header>
        <h1>Hi Nitheesh!</h1>
        <div className="header-icons">
          <button>Login</button>
          <span>🔍</span>
          <span>🔔</span>
          <div className="profile-pic"></div>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="card profile">
          <h3>Profile</h3>
          <p>Name</p>
          <p>Department</p>
          <p>Course</p>
          <div className="profile-placeholder"></div>
        </div>

        <div className="card test-status">
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

        <div className="card time-spent">
          <h3>Time Spent on Tests</h3>
          <p>
            <strong>54</strong> minutes
          </p>
        </div>

        <div className="card to-be-added">
          <h3>To be Added</h3>
        </div>

        <div className="card test-performance">
          <h3>Test Performance</h3>
          <p>Performance over the last 5 tests</p>
          <div className="performance-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
