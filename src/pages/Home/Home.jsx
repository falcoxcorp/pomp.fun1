import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardList from '../../components/CardList/CardList';
import { tags } from '../../helper/Helper';

const Home = () => {
  const [activeTable, setActiveTable] = useState('all');
  const [currentStat, setCurrentStat] = useState(0);
  const { t, i18n } = useTranslation();

  // Animated statistics
  const stats = [
    { number: '$2.5M+', label: 'Total Volume Traded', icon: '💰' },
    { number: '10,000+', label: 'Active Investors', icon: '👥' },
    { number: '150+', label: 'Successful Projects', icon: '🚀' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' }
  ];

  // Rotate stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (table) => {
    setActiveTable(table);
  };

  return (
    <>
      {/* Hero Section */}
      <section className='hero-section relative overflow-hidden'>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C1A444" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        <div className='container relative z-10 py-20 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Hero Content */}
            <div className='space-y-8'>
              {/* Exclusive Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold/20 to-yellow-500/20 border border-gold/30 rounded-full">
                <span className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse"></span>
                <span className="text-gold text-sm font-semibold">EXCLUSIVE ACCESS • LIMITED TIME</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  The Future of
                  <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-pulse">
                    Crypto Innovation
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Where <span className="text-gold font-semibold">Elite Investors</span> Discover 
                  <span className="text-gold font-semibold"> Game-Changing</span> Opportunities
                </p>
              </div>

              {/* Value Proposition */}
              <div className="space-y-4">
                <p className="text-lg text-gray-400 leading-relaxed">
                  Join the exclusive circle of investors who've already generated 
                  <span className="text-green-400 font-bold"> 10x-100x returns</span> through our 
                  revolutionary token launch platform.
                </p>
                
                {/* Animated Stats */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{stats[currentStat].icon}</div>
                    <div>
                      <div className="text-3xl font-bold text-gold">{stats[currentStat].number}</div>
                      <div className="text-gray-400">{stats[currentStat].label}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/create-token"
                  className="group relative px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/25"
                >
                  <span className="relative z-10">Launch Your Token</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <button className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-xl text-lg hover:bg-gold hover:text-black transition-all duration-300">
                  Explore Opportunities
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Audited & Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Instant Deployment</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className='relative'>
              <div className="relative z-10">
                <img 
                  src="https://photos.pinksale.finance/file/pinksale-logo-upload/1756183262709-0df3b8b4e8a5cdaa2a70aba07bbc4c3e.png" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl animate-float" 
                  alt="FalcoX - Empowering Your Crypto Journey" 
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-gold/20 to-transparent rounded-full animate-bounce"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why <span className="text-gold">Elite Investors</span> Choose FalcoX
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the exclusive advantages that have made FalcoX the preferred platform 
              for sophisticated crypto investors worldwide.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Instant Token Deployment',
                description: 'Launch your token in minutes with our advanced smart contract technology.',
                highlight: 'Deploy in 60 seconds'
              },
              {
                icon: '🔒',
                title: 'Military-Grade Security',
                description: 'Multi-signature wallets and audited smart contracts protect your investments.',
                highlight: '100% Secure'
              },
              {
                icon: '📈',
                title: 'Advanced Analytics',
                description: 'Real-time market data and AI-powered insights for optimal trading decisions.',
                highlight: 'AI-Powered'
              },
              {
                icon: '💎',
                title: 'Exclusive Access',
                description: 'Early access to premium token launches before they hit the public market.',
                highlight: 'VIP Only'
              },
              {
                icon: '🌐',
                title: 'Global Network',
                description: 'Connect with investors and projects from around the world.',
                highlight: '50+ Countries'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Execute trades and deployments at the speed of light with our optimized infrastructure.',
                highlight: 'Sub-second execution'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gold/50 transition-all duration-300 hover:scale-105">
                <div className="absolute top-4 right-4 px-3 py-1 bg-gold/20 text-gold text-xs font-bold rounded-full">
                  {feature.highlight}
                </div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted by <span className="text-gold">Industry Leaders</span>
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "FalcoX transformed our token launch. We raised $2M in the first hour.",
                author: "Sarah Chen",
                role: "CEO, CryptoVentures",
                avatar: "👩‍💼"
              },
              {
                quote: "The most sophisticated platform I've used. ROI exceeded all expectations.",
                author: "Marcus Rodriguez",
                role: "Investment Director",
                avatar: "👨‍💼"
              },
              {
                quote: "Security and speed combined perfectly. This is the future of DeFi.",
                author: "Dr. Emily Watson",
                role: "Blockchain Researcher",
                avatar: "👩‍🔬"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl">
                <div className="text-gold text-2xl mb-4">★★★★★</div>
                <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-bold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="text-center">
            <p className="text-gray-400 mb-8">Partnered with industry leaders</p>
            <div className="flex justify-center items-center space-x-12 opacity-50">
              <div className="text-2xl font-bold text-gray-600">BINANCE</div>
              <div className="text-2xl font-bold text-gray-600">ETHEREUM</div>
              <div className="text-2xl font-bold text-gray-600">POLYGON</div>
              <div className="text-2xl font-bold text-gray-600">CHAINLINK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Explorer Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Discover <span className="text-gold">Premium Opportunities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore exclusive token launches and investment opportunities curated by our expert team.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-12">
            <div className="buttonbox relative flex flex-wrap lg:flex-nowrap space-x-2 lg:space-x-4 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full shadow-2xl mb-4 lg:mb-0 p-1">
              <button
                type="button"
                className={`flex-1 flex items-center justify-center h-10 px-6 text-center font-medium rounded-full transition-all duration-300 text-sm lg:text-base ${
                  activeTable === 'all' 
                    ? 'bg-gradient-to-r from-gold to-yellow-500 text-black shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => handleButtonClick('all')}
              >
                🔥 All Tokens
              </button>

              <button
                type="button"
                className={`flex items-center justify-center h-10 px-6 text-center font-medium rounded-full transition-all duration-300 text-sm lg:text-base ${
                  activeTable === 'owner' 
                    ? 'bg-gradient-to-r from-gold to-yellow-500 text-black shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => handleButtonClick('owner')}
              >
                💎 Your Portfolio
              </button>

              {tags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={`flex items-center justify-center h-10 px-6 text-center font-medium rounded-full transition-all duration-300 text-sm lg:text-base ${
                    activeTable === `Tag ${tag}` 
                      ? 'bg-gradient-to-r from-gold to-yellow-500 text-black shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                  onClick={() => handleButtonClick(`Tag ${tag}`)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="createrightbtn">
              <Link
                to="/create-token"
                className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/25"
              >
                <span className="mr-2">🚀</span>
                Launch Your Token
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Token Cards */}
          <div className="mt-0">
            <CardList activeTable={activeTable} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to <span className="text-gold">Transform</span> Your Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join thousands of successful investors who've already discovered the power of FalcoX. 
              Your journey to financial freedom starts with a single click.
            </p>
            
            {/* Urgency Element */}
            <div className="inline-flex items-center px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-red-400 font-semibold">Limited Time: Exclusive Access Ending Soon</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/create-token"
                className="group relative px-12 py-5 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/25"
              >
                <span className="relative z-10">Start Your Journey Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <button className="px-12 py-5 border-2 border-gold text-gold font-bold rounded-xl text-xl hover:bg-gold hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Final Trust Signals */}
            <div className="flex justify-center items-center space-x-8 mt-12 text-gray-500">
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌟</span>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;