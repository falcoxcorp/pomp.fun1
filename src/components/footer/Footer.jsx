import React from 'react';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-particles"></div>
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <img 
                  src="https://photos.pinksale.finance/file/pinksale-logo-upload/1756183262709-0df3b8b4e8a5cdaa2a70aba07bbc4c3e.png" 
                  alt="FalcoX Logo" 
                  className="footer-logo-img"
                />
                <h3 className="footer-brand">FalcoX</h3>
              </div>
              <p className="footer-description">
                The premier destination for elite cryptocurrency investments. 
                Where legends are forged in digital gold.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa fa-telegram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa fa-globe"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Board</a></li>
                <li><a href="/create-token">Create Token</a></li>
                <li><a href="#">KYC</a></li>
                <li><a href="#">Whitepaper</a></li>
            {/* Investment Info */}
            <div className="footer-section">
              <h4 className="footer-title">Investment</h4>
              <ul className="footer-links">
                <li><a href="#">How to Invest</a></li>
                <li><a href="#">Risk Disclosure</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
                <li><a href="#">Roadmap</a></li>
            {/* Stats */}
            <div className="footer-section">
              <h4 className="footer-title">Platform Stats</h4>
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-number">$2.4B+</span>
                  <span className="stat-label">Total Volume</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150K+</span>
                  <span className="stat-label">Investors</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">847%</span>
                  <span className="stat-label">Avg ROI</span>
                </div>
              </div>
            </div>
          </div>
              </ul>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 FalcoX.com - All Rights Reserved. 
                <span className="elite-text">Elite Investment Platform</span>
              </p>
              <div className="footer-badges">
                <span className="security-badge">🔒 Secure</span>
                <span className="verified-badge">✓ Verified</span>
                <span className="premium-badge">💎 Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
            </div>
  )
}