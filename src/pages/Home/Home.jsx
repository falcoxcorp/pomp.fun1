import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardList from '../../components/CardList/CardList';
import { tags } from '../../helper/Helper';

const Home = () => {
  const [activeTable, setActiveTable] = useState('all');
  const { t, i18n } = useTranslation();

  const handleButtonClick = (table) => {
    setActiveTable(table);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-text">🚀 Welcome to the Future</span>
              </div>
              <h1 className="hero-title">
                Discover the Power of
                <span className="gradient-text"> FalcoX</span>
              </h1>
              <h2 className="hero-subtitle">Empowering Your Crypto Journey</h2>
              <p className="hero-description">
                At FalcoX we connect marketing and market making with results that transform projects into
                success stories. We design precise solutions that generate natural attraction for investors, 
                ensuring solid and sustainable growth for our clients.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects Launched</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">$50M+</span>
                  <span className="stat-label">Total Volume</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Active Users</span>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/create-token" className="btn-primary">
                  <span>Launch Your Token</span>
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button className="btn-secondary">
                  <span>Watch Demo</span>
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card">
                <img 
                  src="https://photos.pinksale.finance/file/pinksale-logo-upload/1756183262709-0df3b8b4e8a5cdaa2a70aba07bbc4c3e.png" 
                  alt="FalcoX Logo" 
                  className="hero-logo"
                />
                <div className="card-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">
              <span>🔥 Trending Now</span>
            </div>
            <h2 className="section-title">Explore Top Projects</h2>
            <p className="section-description">
              Discover the most promising crypto projects and join the revolution
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-container">
            <div className="filter-tabs">
              <button
                type="button"
                className={`filter-tab ${activeTable === 'all' ? 'active' : ''}`}
                onClick={() => handleButtonClick('all')}
              >
                <span className="tab-icon">🌟</span>
                <span>{t('All')}</span>
              </button>

              <button
                type="button"
                className={`filter-tab ${activeTable === 'owner' ? 'active' : ''}`}
                onClick={() => handleButtonClick('owner')}
              >
                <span className="tab-icon">👤</span>
                <span>{t('Your Contributions')}</span>
              </button>

              {tags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={`filter-tab ${activeTable === `Tag ${tag}` ? 'active' : ''}`}
                  onClick={() => handleButtonClick(`Tag ${tag}`)}
                >
                  <span className="tab-icon">🏷️</span>
                  <span>{t(tag)}</span>
                </button>
              ))}
            </div>

            <div className="filter-actions">
              <Link to="/create-token" className="create-token-btn">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>{t('createToken')}</span>
              </Link>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-section">
            <CardList activeTable={activeTable} />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Why Choose FalcoX?</h2>
            <p className="section-description">
              Experience the next generation of decentralized finance
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Execute transactions at the speed of light with our optimized blockchain technology
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="feature-title">Secure & Trusted</h3>
              <p className="feature-description">
                Your assets are protected by military-grade encryption and smart contract audits
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">
                Join a thriving community of innovators and early adopters shaping the future
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
