import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page-container">
      <h1>Dashboard Overview</h1>
      <div className="dashboard-widgets">
        <div className="widget">
          <h2>Total Users</h2>
          <p>150</p>
        </div>
        <div className="widget">
          <h2>Total Appointments</h2>
          <p>200</p>
        </div>
        <div className="widget">
          <h2>Total Therapists</h2>
          <p>20</p>
        </div>
        <div className="widget">
          <h2>Pending Appointments</h2>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
