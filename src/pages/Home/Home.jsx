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
    { number: '$2.5M+', label: 'Total Volume Traded', icon: '💰', color: 'from-green-400 to-emerald-600' },
    { number: '10,000+', label: 'Active Investors', icon: '👥', color: 'from-blue-400 to-cyan-600' },
    { number: '150+', label: 'Successful Projects', icon: '🚀', color: 'from-purple-400 to-violet-600' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡', color: 'from-yellow-400 to-orange-600' }
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
      {/* Hero Section with Particle Background */}
      <section className='hero-section relative min-h-screen overflow-hidden'>
        {/* Animated Particle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        <div className='container relative z-10 flex items-center min-h-screen py-20'>
          <div className='grid lg:grid-cols-2 gap-16 items-center w-full'>
            {/* Hero Content */}
            <div className='space-y-8 text-center lg:text-left'>
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold/20 to-amber-500/20 border border-gold/40 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-gold rounded-full mr-3 animate-ping"></div>
                <span className="text-gold text-sm font-bold tracking-wider">ELITE CRYPTO PLATFORM</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  <span className="block">FALCO</span>
                  <span className="block bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-pulse">
                    REVOLUTION
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                  Where <span className="text-gold font-bold">Visionaries</span> Create the 
                  <span className="text-gold font-bold"> Next Generation</span> of Digital Assets
                </p>
              </div>

              {/* Dynamic Stats Display */}
              <div className="relative">
                <div className={`bg-gradient-to-r ${stats[currentStat].color} p-1 rounded-2xl`}>
                  <div className="bg-black/80 backdrop-blur-sm rounded-xl p-8">
                    <div className="flex items-center justify-center lg:justify-start space-x-6">
                      <div className="text-6xl animate-bounce">{stats[currentStat].icon}</div>
                      <div className="text-center lg:text-left">
                        <div className="text-4xl font-black text-white mb-2">{stats[currentStat].number}</div>
                        <div className="text-gray-300 font-medium">{stats[currentStat].label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  to="/create-token"
                  className="group relative px-10 py-5 bg-gradient-to-r from-gold to-amber-500 text-black font-black rounded-2xl text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-gold/50 transform"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-3">🚀</span>
                    LAUNCH NOW
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                
                <button className="px-10 py-5 border-2 border-gold text-gold font-black rounded-2xl text-lg hover:bg-gold hover:text-black transition-all duration-500 backdrop-blur-sm">
                  EXPLORE TOKENS
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300 font-medium">AUDITED SMART CONTRACTS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300 font-medium">24/7 PREMIUM SUPPORT</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className='relative flex justify-center lg:justify-end'>
              <div className="relative">
                {/* Main Logo */}
                <div className="relative z-10">
                  <img 
                    src="https://photos.pinksale.finance/file/pinksale-logo-upload/1756183262709-0df3b8b4e8a5cdaa2a70aba07bbc4c3e.png" 
                    className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl animate-float" 
                    alt="FalcoX - Empowering Your Crypto Journey" 
                  />
                </div>
                
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 animate-spin-slow blur-xl"></div>
                
                {/* Floating Orbs */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-bounce blur-sm"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full animate-pulse blur-sm"></div>
                <div className="absolute top-1/2 -left-16 w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full animate-ping blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-gold rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-4 bg-gold rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent transform -skew-y-12"></div>
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <span className="text-gold text-sm font-bold tracking-wider">WHY CHOOSE FALCOX</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              <span className="text-gold">PREMIUM</span> FEATURES
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Experience the most advanced cryptocurrency platform designed for serious investors and innovators.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Deploy',
                description: 'Launch your token in under 60 seconds with our revolutionary smart contract technology.',
                highlight: 'INSTANT',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: '🛡️',
                title: 'Fort Knox Security',
                description: 'Military-grade encryption and multi-signature wallets protect every transaction.',
                highlight: 'BULLETPROOF',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: '🧠',
                title: 'AI Analytics',
                description: 'Advanced machine learning algorithms provide real-time market insights.',
                highlight: 'SMART',
                color: 'from-purple-400 to-violet-500'
              },
              {
                icon: '💎',
                title: 'VIP Access',
                description: 'Exclusive early access to premium token launches before public release.',
                highlight: 'EXCLUSIVE',
                color: 'from-blue-400 to-cyan-500'
              },
              {
                icon: '🌍',
                title: 'Global Network',
                description: 'Connect with elite investors and projects from 50+ countries worldwide.',
                highlight: 'WORLDWIDE',
                color: 'from-pink-400 to-rose-500'
              },
              {
                icon: '🎯',
                title: 'Precision Trading',
                description: 'Execute trades with microsecond precision using our optimized infrastructure.',
                highlight: 'ACCURATE',
                color: 'from-indigo-400 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl hover:border-gold/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gold/20 text-gold text-xs font-black rounded-full border border-gold/30">
                    {feature.highlight}
                  </div>
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              TRUSTED BY <span className="text-gold">LEGENDS</span>
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                quote: "FalcoX revolutionized our token launch. We raised $2M in the first hour with zero technical issues.",
                author: "Sarah Chen",
                role: "CEO, CryptoVentures",
                avatar: "👩‍💼",
                rating: 5
              },
              {
                quote: "The most sophisticated platform I've encountered. ROI exceeded all expectations by 300%.",
                author: "Marcus Rodriguez",
                role: "Investment Director",
                avatar: "👨‍💼",
                rating: 5
              },
              {
                quote: "Perfect blend of security and speed. This is undoubtedly the future of decentralized finance.",
                author: "Dr. Emily Watson",
                role: "Blockchain Researcher",
                avatar: "👩‍🔬",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-3xl">
                  <div className="flex text-gold text-2xl mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <div className="text-white font-bold text-lg">{testimonial.author}</div>
                      <div className="text-gold text-sm font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="text-center">
            <p className="text-gray-400 mb-12 text-lg">POWERED BY INDUSTRY LEADERS</p>
            <div className="flex justify-center items-center space-x-16 opacity-60">
              <div className="text-3xl font-black text-gray-500">BINANCE</div>
              <div className="text-3xl font-black text-gray-500">ETHEREUM</div>
              <div className="text-3xl font-black text-gray-500">POLYGON</div>
              <div className="text-3xl font-black text-gray-500">CHAINLINK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Explorer Section */}
      <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <span className="text-gold text-sm font-bold tracking-wider">INVESTMENT OPPORTUNITIES</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              DISCOVER <span className="text-gold">PREMIUM</span> TOKENS
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Explore exclusive token launches and investment opportunities curated by our expert team of analysts.
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8 lg:mb-0">
              <button
                type="button"
                className={`px-8 py-4 font-black rounded-2xl transition-all duration-300 text-sm lg:text-base ${
                  activeTable === 'all' 
                    ? 'bg-gradient-to-r from-gold to-amber-500 text-black shadow-2xl shadow-gold/50 scale-105' 
                    : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
                }`}
                onClick={() => handleButtonClick('all')}
              >
                🔥 ALL TOKENS
              </button>

              <button
                type="button"
                className={`px-8 py-4 font-black rounded-2xl transition-all duration-300 text-sm lg:text-base ${
                  activeTable === 'owner' 
                    ? 'bg-gradient-to-r from-gold to-amber-500 text-black shadow-2xl shadow-gold/50 scale-105' 
                    : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
                }`}
                onClick={() => handleButtonClick('owner')}
              >
                💎 YOUR PORTFOLIO
              </button>

              {tags.slice(0, 4).map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={`px-6 py-4 font-black rounded-2xl transition-all duration-300 text-sm ${
                    activeTable === `Tag ${tag}` 
                      ? 'bg-gradient-to-r from-gold to-amber-500 text-black shadow-2xl shadow-gold/50 scale-105' 
                      : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
                  }`}
                  onClick={() => handleButtonClick(`Tag ${tag}`)}
                >
                  {tag.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="createrightbtn">
              <Link
                to="/create-token"
                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-gold to-amber-500 text-black font-black rounded-2xl text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-gold/50"
              >
                <span className="mr-3 text-xl">🚀</span>
                LAUNCH TOKEN
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="container text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
              READY TO <span className="text-gold">DOMINATE</span> THE FUTURE?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light">
              Join the elite circle of investors who've already transformed their financial destiny. 
              Your empire starts with a single decision.
            </p>
            
            {/* Urgency Element */}
            <div className="inline-flex items-center px-8 py-4 bg-red-500/20 border border-red-500/40 rounded-full mb-12 backdrop-blur-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-ping"></div>
              <span className="text-red-400 font-bold text-lg">EXCLUSIVE ACCESS ENDING IN 48 HOURS</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <Link
                to="/create-token"
                className="group relative px-16 py-6 bg-gradient-to-r from-gold to-amber-500 text-black font-black rounded-2xl text-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-gold/50"
              >
                <span className="relative z-10">START YOUR EMPIRE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              
              <button className="px-16 py-6 border-2 border-gold text-gold font-black rounded-2xl text-2xl hover:bg-gold hover:text-black transition-all duration-500 backdrop-blur-sm">
                LEARN MORE
              </button>
            </div>

            {/* Final Trust Signals */}
            <div className="flex justify-center items-center space-x-12 text-gray-500">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔒</span>
                <span className="font-bold">BANK-LEVEL SECURITY</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <span className="font-bold">INSTANT SETUP</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌟</span>
                <span className="font-bold">5-STAR RATED</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;