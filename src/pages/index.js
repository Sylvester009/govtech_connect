import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to GovTech Connect</h1>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default HomePage;
