import React from 'react';
import Link from 'next/link';
import '../app/globals.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome to GovTech Connect</h1>
        <p className="description">
          Bridging the gap between government projects and emerging tech talent.
        </p>
        <div className="button-group">
          <Link href="/login" className="button login-button">
            Login
          </Link>
          <Link href="/signup" className="button signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
