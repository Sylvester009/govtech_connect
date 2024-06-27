import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <h1 className="dashboard-title">Dashboard</h1>
    <div className="card">
      <h2 className="card-title">Project Overview</h2>
      <p className="card-content">Details about current projects and tasks.</p>
    </div>
    <div className="card">
      <h2 className="card-title">Recent Activity</h2>
      <p className="card-content">Recent updates and activity logs.</p>
    </div>
  </div>
  );
};

export default Dashboard;
