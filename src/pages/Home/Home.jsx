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
                UNLOCK THE VAULT
                <br />
                <span style={{color: 'var(--neon-blue)'}}>OF ELITE CRYPTO</span>
              </h1>
              <h2 className='hero-subtitle'>
                Where Legends Are Forged in Digital Gold
              </h2>
              <div className='hero-description'>
                <p style={{marginBottom: '1rem', fontSize: '1.3rem', color: '#e0e0e0'}}>
                  🔥 <strong>EXCLUSIVE ACCESS</strong> to the most coveted cryptocurrency investment opportunities
                </p>
                <p style={{marginBottom: '1rem', fontSize: '1.1rem'}}>
                  Join the <span style={{color: 'var(--neon-pink)', fontWeight: 'bold'}}>inner circle</span> of sophisticated investors who've discovered the secret to exponential wealth creation in the digital realm.
                </p>
                <p style={{fontSize: '1rem', fontStyle: 'italic', color: '#b0b0b0'}}>
                  "The future belongs to those who act today. The question isn't whether you'll invest in crypto... it's whether you'll do it before everyone else discovers what you already know."
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
                <Link to="/create-token">
                  <button className='cta-button' style={{fontSize: '1.1rem', padding: '1.2rem 2.5rem'}}>
                    🚀 LAUNCH YOUR EMPIRE
                  </button>
                </Link>
                <button className='cta-button' style={{background: 'var(--secondary-gradient)', fontSize: '1rem', padding: '1rem 2rem'}}>
                  💎 EXPLORE VAULT
                </button>
              </div>
            </div>
            <div className='col-md-4' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className='mystery-card' style={{textAlign: 'center', maxWidth: '300px'}}>
                <img 
                  src="https://photos.pinksale.finance/file/pinksale-logo-upload/1756183262709-0df3b8b4e8a5cdaa2a70aba07bbc4c3e.png" 
                  alt="FalcoX Elite Logo" 
                  style={{width: '120px', height: '120px', marginBottom: '1rem', filter: 'drop-shadow(0 0 20px var(--neon-blue))'}}
                />
                <h3 style={{color: 'var(--neon-blue)', fontFamily: 'Orbitron', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                  ELITE MEMBERS ONLY
                </h3>
                <p style={{color: '#888', fontSize: '0.9rem'}}>
                  Invitation-only access to premium investment opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='stats-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 stat-item'>
              <span className='stat-number glow-text'>$2.4B+</span>
              <div className='stat-label'>Total Volume Traded</div>
            </div>
            <div className='col-md-3 stat-item'>
              <span className='stat-number glow-text'>150K+</span>
              <div className='stat-label'>Elite Investors</div>
            </div>
            <div className='col-md-3 stat-item'>
              <span className='stat-number glow-text'>847%</span>
              <div className='stat-label'>Average ROI</div>
            </div>
            <div className='col-md-3 stat-item'>
              <span className='stat-number glow-text'>24/7</span>
              <div className='stat-label'>Market Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <main className="pl-5 pr-5 top-0 overflow-hidden" style={{background: 'var(--dark-gradient)', paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div className="flex flex-col pb-4 pt-[75px] xl:pt-[50px]">
          <div className="absolute top-0 left-0 z-0 w-90 h-[60vw] sm:h-[43vw] md:h-[33vw] "></div>

          {/* Section Header */}
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{
              fontFamily: 'Orbitron', 
              fontSize: '2.5rem', 
              background: 'var(--gold-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem'
            }}>
              EXCLUSIVE INVESTMENT VAULT
            </h2>
            <p style={{color: '#b0b0b0', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto'}}>
              Handpicked opportunities reserved for our most discerning investors. Each project undergoes rigorous vetting by our expert analysts.
            </p>
          </div>

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
    </>
  );
};

export default Home;
