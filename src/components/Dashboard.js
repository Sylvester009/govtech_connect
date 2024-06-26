import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/create-project">Create Project</Link>
      <Link href="/projects">View Projects</Link>
      <Link href="/profile">View Profile</Link>
    </div>
  );
};

export default Dashboard;
