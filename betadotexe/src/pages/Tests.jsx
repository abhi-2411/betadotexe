import React from "react";
import Sidebar from "./Sidebar";
import "./Tests.css";
import "./Sidebar.css"; 

function Box({ title }) {
  return <div className="box">{title}</div>;
}

function Tests() {
  return (
    <div className="tests-container">
      <Sidebar />
      <div className="content-wrapper">
        <header className="header">
          <button className="notification-button">&#x1F514;</button>
          <div className="profile-picture"></div>
        </header>
        <main className="main-content">
          <div className="search-bar">
            <button className="sign-in-button">+ Sign in with credentials</button>
          </div>
          <div className="boxes">
            <Box title="Data Structures and Algorithms" />
            <Box title="Artificial Intelligence" />
            <Box title="Probability" />
            <Box title="Text" />
            <Box title="Text" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tests;
