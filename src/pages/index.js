import React from 'react';
import Link from 'next/link';
import '../app/index.css';

const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Link href="#intro" className="nav-link">Intro</Link>
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="/dashboard" className="nav-link">Go to App</Link>
        </nav>
      </header>

      <section id="intro" className="intro-section">
        <img src="/cover-image.jpg" alt="Cover" className="cover-image" />
        <h1 className="project-name">GovTech Connect</h1>
        <p className="project-tagline">Bridging the gap between government projects and emerging tech talent.</p>
        <Link href="/dashboard" className="cta-button">Get Started</Link>
      </section>

      <section id="features" className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="feature">
          <img src="/feature1.jpg" alt="Feature 1" className="feature-image" />
          <h3 className="feature-name">Feature 1</h3>
          <p className="feature-description">Description of feature 1.</p>
        </div>
        <div className="feature">
          <img src="/feature2.jpg" alt="Feature 2" className="feature-image" />
          <h3 className="feature-name">Feature 2</h3>
          <p className="feature-description">Description of feature 2.</p>
        </div>
        <div className="feature">
          <img src="/feature3.jpg" alt="Feature 3" className="feature-image" />
          <h3 className="feature-name">Feature 3</h3>
          <p className="feature-description">Description of feature 3.</p>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2 className="section-title">About</h2>
        <p className="about-description">
          The inspiration for this project came from a desire to provide newbie tech professionals with real-world experience while assisting government agencies with their tech needs. The project timeline includes planning, design, development, and testing phases, all aimed at creating a robust and user-friendly platform. This project is part of my Portfolio Project for Holberton School. 
        </p>
        <div className="team-links">
          <div className="team-member">
            <h3 className="team-name">Sylvester Samuel</h3>
            <Link href="https://linkedin.com/in/ninestars" target="_blank" className="team-link">LinkedIn</Link>
            <Link href="https://github.com/Sylvester009" target="_blank" className="team-link">GitHub</Link>
            <Link href="https://twitter.com/sylvester-samuel" target="_blank" className="team-link">Twitter</Link>
          </div>
          <div className="team-member">
            <h3 className="team-name">Arthur Tchaye</h3>
            <Link href="https://linkedin.com/in/arthur-tchaye" target="_blank" className="team-link">LinkedIn</Link>
            <Link href="https://github.com/arthur-tchaye" target="_blank" className="team-link">GitHub</Link>
            <Link href="https://twitter.com/arthur-tchaye" target="_blank" className="team-link">Twitter</Link>
          </div>
        </div>
        <Link href="https://github.com/your-repo" target="_blank" className="repo-link">GitHub Repository</Link>
      </section>
    </div>
  );
};

export default HomePage;
