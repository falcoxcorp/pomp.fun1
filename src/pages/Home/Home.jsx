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
      <section className='hero-section animated-gradient particles-bg'>
        <div className='container hero-content'>
          <div className='row'>
            <div className='col-md-8'>
              <h1 className='hero-title glow-text'>
                LAUNCH ON SONEIUM
                <br />
                <span style={{color: 'var(--neon-blue)'}}>THE FUTURE IS HERE</span>
              </h1>
              <h2 className='hero-subtitle'>
                Falco-X: Where Innovation Meets Opportunity on Soneium Network
              </h2>
              <div className='hero-description'>
                <p style={{marginBottom: '1rem', fontSize: '1.3rem', color: '#e0e0e0'}}>
                  🚀 <strong>FIRST-TO-MARKET</strong> token launchpad on Soneium - Sony's revolutionary blockchain
                </p>
                <p style={{marginBottom: '1rem', fontSize: '1.1rem'}}>
                  Experience <span style={{color: 'var(--neon-pink)', fontWeight: 'bold'}}>lightning-fast transactions</span> and minimal fees while accessing exclusive investment opportunities in the next-generation blockchain ecosystem.
                </p>
                <p style={{fontSize: '1rem', fontStyle: 'italic', color: '#b0b0b0'}}>
                  "Be among the first to capitalize on Soneium's groundbreaking technology. Early adopters always win."
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
                <Link to="/create-token">
                  <button className='cta-button' style={{fontSize: '1.1rem', padding: '1.2rem 2.5rem'}}>
                    🚀 LAUNCH YOUR TOKEN
                  </button>
                </Link>
                <button className='cta-button' style={{background: 'var(--secondary-gradient)', fontSize: '1rem', padding: '1rem 2rem'}}>
                  💎 EXPLORE OPPORTUNITIES
                </button>
              </div>
            </div>
            <div className='col-md-4' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className='mystery-card' style={{textAlign: 'center', maxWidth: '300px'}}>
                <img 
                  src="https://photos.pinksale.finance/file/pinksale-logo-upload/1756183262709-0df3b8b4e8a5cdaa2a70aba07bbc4c3e.png" 
                  alt="Falco-X Elite Logo" 
                  style={{width: '120px', height: '120px', marginBottom: '1rem', filter: 'drop-shadow(0 0 20px var(--neon-blue))'}}
                />
                <h3 style={{color: 'var(--neon-blue)', fontFamily: 'Orbitron', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                  SONEIUM PIONEER
                </h3>
                <p style={{color: '#888', fontSize: '0.9rem'}}>
                  First-mover advantage on Sony's blockchain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className='section-container section-dark'>
        <div className='container'>
          <h2 className='section-title'>PLATFORM STATISTICS</h2>
          <p className='section-subtitle'>
            Real-time metrics showcasing Falco-X's growing dominance on Soneium
          </p>
          <div className='stats-grid'>
            <div className='stat-card'>
              <span className='stat-value glow-text'>$2.4B+</span>
              <div className='stat-description'>Total Volume Traded</div>
            </div>
            <div className='stat-card'>
              <span className='stat-value glow-text'>1,247</span>
              <div className='stat-description'>Active Tokens</div>
            </div>
            <div className='stat-card'>
              <span className='stat-value glow-text'>89%</span>
              <div className='stat-description'>Successful Launches</div>
            </div>
            <div className='stat-card'>
              <span className='stat-value glow-text'>24/7</span>
              <div className='stat-description'>Market Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='section-container section-light'>
        <div className='container'>
          <h2 className='section-title'>HOW IT WORKS</h2>
          <p className='section-subtitle'>
            Launch your token in minutes with our streamlined process designed for Soneium's efficiency
          </p>
          <div className='steps-grid'>
            <div className='step-card'>
              <div className='step-number'>1</div>
              <h3 className='step-title'>CREATE TOKEN</h3>
              <p className='step-description'>
                Design your token with our intuitive interface. Set tokenomics, upload assets, and configure launch parameters in minutes.
              </p>
            </div>
            <div className='step-card'>
              <div className='step-number'>2</div>
              <h3 className='step-title'>DEPLOY ON SONEIUM</h3>
              <p className='step-description'>
                Leverage Soneium's lightning-fast deployment with minimal gas fees. Your token goes live instantly with full security.
              </p>
            </div>
            <div className='step-card'>
              <div className='step-number'>3</div>
              <h3 className='step-title'>ATTRACT INVESTORS</h3>
              <p className='step-description'>
                Our platform automatically markets your token to our investor network. Watch as early adopters discover your project.
              </p>
            </div>
            <div className='step-card'>
              <div className='step-number'>4</div>
              <h3 className='step-title'>SCALE & SUCCEED</h3>
              <p className='step-description'>
                As your token gains traction, benefit from automatic liquidity provision and listing on major DEXs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className='section-container section-dark'>
        <div className='container'>
          <h2 className='section-title'>SUCCESS STORIES</h2>
          <p className='section-subtitle'>
            Discover how projects have achieved extraordinary returns on Falco-X
          </p>
          <div className='success-grid'>
            <div className='success-card'>
              <div className='success-header'>
                <img src="https://via.placeholder.com/50x50/4facfe/ffffff?text=SC" alt="SoneCoin" className='success-logo' />
                <div>
                  <h3 className='success-name'>SoneCoin (SONC)</h3>
                  <p style={{color: '#888', fontSize: '0.9rem'}}>Gaming Token</p>
                </div>
              </div>
              <div className='success-performance'>+2,847% ROI</div>
              <p className='success-description'>
                Launched with $50K market cap, now trading at $1.4M. First gaming token on Soneium achieved massive adoption through strategic partnerships.
              </p>
            </div>
            <div className='success-card'>
              <div className='success-header'>
                <img src="https://via.placeholder.com/50x50/f093fb/ffffff?text=NX" alt="NeXus" className='success-logo' />
                <div>
                  <h3 className='success-name'>NeXus (NXS)</h3>
                  <p style={{color: '#888', fontSize: '0.9rem'}}>DeFi Protocol</p>
                </div>
              </div>
              <div className='success-performance'>+1,923% ROI</div>
              <p className='success-description'>
                Revolutionary DeFi protocol that leveraged Soneium's speed to become the fastest-growing yield farming platform.
              </p>
            </div>
            <div className='success-card'>
              <div className='success-header'>
                <img src="https://via.placeholder.com/50x50/667eea/ffffff?text=AI" alt="AIVerse" className='success-logo' />
                <div>
                  <h3 className='success-name'>AIVerse (AIV)</h3>
                  <p style={{color: '#888', fontSize: '0.9rem'}}>AI Token</p>
                </div>
              </div>
              <div className='success-performance'>+3,156% ROI</div>
              <p className='success-description'>
                AI-powered ecosystem token that utilized Soneium's efficiency to process millions of AI transactions daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soneium Advantages */}
      <section className='section-container section-light'>
        <div className='container'>
          <h2 className='section-title'>SONEIUM ADVANTAGES</h2>
          <p className='section-subtitle'>
            Discover why Soneium is the superior choice for token launches and trading
          </p>
          <div className='advantages-grid'>
            <div className='advantage-card'>
              <span className='advantage-icon'>⚡</span>
              <h3 className='advantage-title'>LIGHTNING SPEED</h3>
              <p className='advantage-description'>
                Sub-second transaction finality with Soneium's advanced consensus mechanism. Trade and launch tokens faster than ever before.
              </p>
            </div>
            <div className='advantage-card'>
              <span className='advantage-icon'>💰</span>
              <h3 className='advantage-title'>MINIMAL FEES</h3>
              <p className='advantage-description'>
                Gas fees 99% lower than Ethereum. Launch tokens for under $1 and trade with negligible costs.
              </p>
            </div>
            <div className='advantage-card'>
              <span className='advantage-icon'>🏢</span>
              <h3 className='advantage-title'>SONY BACKING</h3>
              <p className='advantage-description'>
                Built by Sony with enterprise-grade infrastructure. Benefit from decades of technological innovation and reliability.
              </p>
            </div>
            <div className='advantage-card'>
              <span className='advantage-icon'>🌐</span>
              <h3 className='advantage-title'>GLOBAL REACH</h3>
              <p className='advantage-description'>
                Access Sony's massive ecosystem including gaming, entertainment, and technology sectors worldwide.
              </p>
            </div>
            <div className='advantage-card'>
              <span className='advantage-icon'>🔒</span>
              <h3 className='advantage-title'>ENTERPRISE SECURITY</h3>
              <p className='advantage-description'>
                Military-grade security protocols with Sony's proven track record in protecting digital assets and user data.
              </p>
            </div>
            <div className='advantage-card'>
              <span className='advantage-icon'>🚀</span>
              <h3 className='advantage-title'>EARLY ADOPTION</h3>
              <p className='advantage-description'>
                Be among the first to build on Soneium. Early projects receive maximum exposure and community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <main className="section-container section-dark" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div className="container">
          <h2 className='section-title'>INVESTMENT OPPORTUNITIES</h2>
          <p className='section-subtitle'>
            Discover the next generation of tokens launching on Soneium's revolutionary blockchain
          </p>
          
          <div className="relative flex flex-col gap-4 lg:gap-6 mb-8 lg:mb-10">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="buttonbox relative flex flex-wrap lg:flex-nowrap space-x-2 lg:space-x-4 h-10 border border-base dark:border-[#55496E] rounded-full shadow-md mb-4 lg:mb-0" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center h-10 px-4 text-center font-medium rounded-full overflow-hidden whitespace-nowrap text-ellipsis text-xs sm:text-sm lg:text-base ${activeTable === 'all' ? 'cta-button' : 'text-[#fff] dark:text-purple-500 hover:bg-gray-400'}`}
                  onClick={() => handleButtonClick('all')}
                >
                  🌟 {t('All')}
                </button>

                <button
                  type="button"
                  className={`items-center justify-center h-10 px-9 text-center font-medium rounded-full overflow-hidden whitespace-nowrap lg:text-base ${activeTable === 'owner' ? 'cta-button' : 'text-[#fff] dark:text-purple-500 hover:bg-gray-400'}`}
                  onClick={() => handleButtonClick('owner')}
                >
                  💎 {t('Your Contributions')}
                </button>
                {tags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    className={`items-center justify-center h-10 px-9 text-center font-medium rounded-full overflow-hidden whitespace-nowrap lg:text-base ${activeTable === `Tag ${tag}` ? 'cta-button' : 'text-[#fff] dark:text-purple-500 hover:bg-gray-400'}`}
                    onClick={() => handleButtonClick(`Tag ${tag}`)}
                  >
                    {t(tag)}
                  </button>
                ))}
              </div>

              <div className="createrightbtn mt-4 lg:mt-0">
                <Link
                  to="/create-token"
                  className="cta-button inline-block font-bold text-center shadow-lg transition-all duration-200 ease-in-out text-xs sm:text-sm lg:text-base"
                  style={{textDecoration: 'none', color: 'white'}}
                >
                  🚀 {t('createToken')}
                </Link>
              </div>
            </div>

            <div className="mt-0">
              <CardList activeTable={activeTable} />
            </div>
          </div>
        </div>
      </main>

      {/* Community Section */}
      <section className='section-container section-light'>
        <div className='container'>
          <h2 className='section-title'>COMMUNITY VOICES</h2>
          <p className='section-subtitle'>
            Hear from successful investors and creators who chose Falco-X on Soneium
          </p>
          <div className='testimonials-grid'>
            <div className='testimonial-card'>
              <p className='testimonial-text'>
                "Falco-X on Soneium changed everything for me. The speed and low fees allowed me to experiment with token launches without breaking the bank. My first project did 10x in two weeks!"
              </p>
              <div className='testimonial-author'>
                <img src="https://via.placeholder.com/50x50/4facfe/ffffff?text=MK" alt="Mike Chen" className='author-avatar' />
                <div className='author-info'>
                  <div className='author-name'>Mike Chen</div>
                  <div className='author-title'>Token Creator</div>
                </div>
              </div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>
                "As an early investor on Falco-X, I've seen consistent returns. The platform's integration with Soneium's ecosystem gives projects real utility and adoption potential."
              </p>
              <div className='testimonial-author'>
                <img src="https://via.placeholder.com/50x50/f093fb/ffffff?text=SR" alt="Sarah Rodriguez" className='author-avatar' />
                <div className='author-info'>
                  <div className='author-name'>Sarah Rodriguez</div>
                  <div className='author-title'>Crypto Investor</div>
                </div>
              </div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>
                "The Sony backing gives me confidence that Soneium and Falco-X are here to stay. I've moved most of my DeFi activities here and couldn't be happier with the performance."
              </p>
              <div className='testimonial-author'>
                <img src="https://via.placeholder.com/50x50/667eea/ffffff?text=DJ" alt="David Johnson" className='author-avatar' />
                <div className='author-info'>
                  <div className='author-name'>David Johnson</div>
                  <div className='author-title'>DeFi Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className='section-container section-dark'>
        <div className='container'>
          <h2 className='section-title'>SECURITY & TRUST</h2>
          <p className='section-subtitle'>
            Your investments are protected by enterprise-grade security and industry-leading audits
          </p>
          <div className='security-grid'>
            <div className='security-card'>
              <span className='security-icon'>🛡️</span>
              <h3 className='security-title'>SMART CONTRACT AUDITS</h3>
              <p className='security-description'>
                All contracts audited by leading security firms including CertiK and ConsenSys Diligence. Zero critical vulnerabilities found.
              </p>
            </div>
            <div className='security-card'>
              <span className='security-icon'>🔐</span>
              <h3 className='security-title'>MULTI-SIG SECURITY</h3>
              <p className='security-description'>
                Platform funds secured with multi-signature wallets requiring multiple approvals for any transaction.
              </p>
            </div>
            <div className='security-card'>
              <span className='security-icon'>🏦</span>
              <h3 className='security-title'>INSURANCE COVERAGE</h3>
              <p className='security-description'>
                $10M insurance coverage protecting user funds against smart contract exploits and platform risks.
              </p>
            </div>
            <div className='security-card'>
              <span className='security-icon'>📊</span>
              <h3 className='security-title'>TRANSPARENT OPERATIONS</h3>
              <p className='security-description'>
                Real-time transparency with public dashboards showing all platform metrics, fees, and treasury status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='cta-section'>
        <div className='container'>
          <div className='cta-content'>
            <h2 className='cta-title'>READY TO DOMINATE SONEIUM?</h2>
            <p className='cta-description'>
              Join the revolution. Launch your token on the fastest, most cost-effective blockchain backed by Sony's innovation.
            </p>
            <div className='cta-buttons'>
              <Link to="/create-token">
                <button className='cta-button' style={{fontSize: '1.1rem', padding: '1.2rem 2.5rem'}}>
                  🚀 LAUNCH YOUR TOKEN NOW
                </button>
              </Link>
              <button className='cta-button' style={{background: 'var(--secondary-gradient)', fontSize: '1rem', padding: '1rem 2rem'}}>
                💬 JOIN OUR COMMUNITY
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;