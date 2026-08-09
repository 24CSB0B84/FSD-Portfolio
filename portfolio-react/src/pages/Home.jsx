import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="hero-section fade-in">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">PORTFOLIO</h1>
        <p className="hero-subtitle">I am Harshitha Vinjamuri</p>
      </div>
    </div>
  );
};

export default Home;
