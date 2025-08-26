@tailwind base;
@tailwind components;
@tailwind utilities;

/* Advanced Typography and Visual Effects */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

/* Cryptobit-inspired color scheme */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --dark-gradient: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%);
  --gold-gradient: linear-gradient(135deg, #ffd700 0%, #ffb347 100%);
  --neon-blue: #00d4ff;
  --neon-purple: #b347ff;
  --neon-pink: #ff47b3;
}

/* Glowing text effects */
.glow-text {
  text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
  animation: pulse-glow 2s ease-in-out infinite alternate;
}

@keyframes pulse-glow {
  from { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
  to { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor; }
}

/* Animated gradient backgrounds */
.animated-gradient {
  background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Floating particles effect */
.particles-bg {
  position: relative;
  overflow: hidden;
}

.particles-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, var(--neon-blue), transparent),
    radial-gradient(2px 2px at 40px 70px, var(--neon-purple), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--neon-pink), transparent),
    radial-gradient(1px 1px at 130px 80px, var(--neon-blue), transparent),
    radial-gradient(2px 2px at 160px 30px, var(--neon-purple), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float-particles 20s linear infinite;
  opacity: 0.3;
}

@keyframes float-particles {
  0% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-20px) translateX(10px); }
  66% { transform: translateY(-10px) translateX(-10px); }
  100% { transform: translateY(0px) translateX(0px); }
}

/* Cryptobit-style hero section */
.hero-section {
  background: var(--dark-gradient);
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  font-size: 4.5rem;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: var(--neon-blue);
  margin-bottom: 2rem;
}

.hero-description {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Enigmatic cards */
.mystery-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mystery-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.mystery-card:hover::before {
  left: 100%;
}

.mystery-card:hover {
  transform: translateY(-10px);
  border-color: var(--neon-blue);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
}

/* Enhanced Card Styles */
.cards {
  position: relative;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.cards::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 212, 255, 0.1),
    rgba(179, 71, 255, 0.1),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
}

.cards:hover::before {
  left: 100%;
}

.cards:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: var(--neon-blue);
  box-shadow: 
    0 25px 50px rgba(0, 212, 255, 0.4),
    0 0 0 1px rgba(0, 212, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.cards .card-body {
  position: relative;
  z-index: 2;
  padding: 20px;
}

.cards .card-img-top {
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.cards:hover .card-img-top {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  border-color: var(--neon-blue);
}

.cards .card-title {
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
}

.cards:hover .card-title {
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
}

.cards .progress {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
}

.cards .progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: progress-shine 2s infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.cards .progress-bar {
  background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  transition: all 0.3s ease;
}

.cards:hover .progress-bar {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
}

.cards .card-text {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Rajdhani', sans-serif;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.cards:hover .card-text {
  color: rgba(255, 255, 255, 0.95);
}

.cards .price {
  color: var(--neon-blue);
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  font-family: 'Orbitron', monospace;
}

.cards .hardcap {
  color: var(--neon-pink);
  font-weight: 600;
  text-shadow: 0 0 8px rgba(255, 71, 179, 0.5);
}

.cards .MCap {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-family: 'Orbitron', monospace;
}

.cards .socialicon i {
  background: linear-gradient(145deg, #2a2a2a, #404040);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.cards .socialicon i:hover {
  background: var(--accent-gradient);
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
  color: white;
}

.cards hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  margin: 15px 0;
}

/* Floating animation for cards */
.cards {
  animation: float-card 6s ease-in-out infinite;
}

.cards:nth-child(2n) {
  animation-delay: -2s;
}

.cards:nth-child(3n) {
  animation-delay: -4s;
}

@keyframes float-card {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.cards:hover {
  animation-play-state: paused;
}
/* Investment CTA buttons */
.cta-button {
  background: var(--primary-gradient);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gold-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.cta-button:hover::before {
  left: 0;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

/* Stats section */
.stats-section {
  background: rgba(0, 0, 0, 0.8);
  padding: 4rem 0;
}

.stat-item {
  text-align: center;
  padding: 2rem;
}

.stat-number {
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: 900;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}

.stat-label {
  font-family: 'Rajdhani', sans-serif;
  color: #888;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}

body{ background:#282828;}
a{ font-size:15px !important;}
p{ font-size:15px !important;}
button{font-size:18px !important; text-transform: capitalize; font-weight:500 !important;}
.rightbox input{color: #fff;}
header{ box-shadow:none !important;}
header button{background:#fff!important; border-radius: 7px !important; padding: 5px 15px 8px !important;}
header .text-sm {font-size: 18px !important; font-weight: 500; padding: 0px 10px;    color: #fff !important;}
header .active{ color:#3e69cc;}
.bg-purple-600{background-color:#3a3a3a;}
.text-purple-200{color: rgb(255 255 255);}
main{padding:0px 70px !important;}
footer{ background:#000;  padding: 20px 0px !important;}
footer p{ color:#fff !important;}
.buttonbox{box-shadow:none; background:#404040; border: none; border-radius: 10px;    height: 40px;}
.lastbtn{padding: 10px 30px;}
.hover\:bg-purple-300:hover {background-color:#4c4c4c !important; color: #fff !important;}
.text-\[\#7A6EAA\] {color:#2a2a2a;}
.text-purple-700 {color:#2a2a2a; font-weight: 600;}
.text-purple-500{color:#2a2a2a; font-weight: 600;}
.bg-purple-500{background-color:#c1a444;    box-shadow: 1px 2px 1px #8f782e;}
.hover\:text-purple-500:hover{color:#c1a444 !important;}


.cardbox .bg-gray-300 {background: radial-gradient(circle, #c3c3c3 0%, rgb(131 131 131) 71%);}
.cardbox .text-gray-600{color:#2a2a2a;}
.cardbox .text-purple-600{color:#c1a444!important;}
.tname{ float:left;font-weight:700;}
.tshort{ float:right;margin-top: 5px; margin-bottom: 0px;    color:#2a2a2a;}
.tokenbox{ width:100%; display: inline-block;}

.pagination{ margin-top:20px; margin-bottom: 40px;}
.pagination .bg-gray-300{background-color:#cbcbcb !important;}
.cardbox .p-4{padding: 15px 10px;}
header button{ color:#000 !important;}
header button div{ color:#fff !important;}
header button svg{ color:#fff !important;}
header{ background:#282828 !important;    border-bottom: 1px solid #343434;}

.forminbox{ background:#1a1a1a; padding: 30px !important; border-radius:20px;border: 1px solid #505050;}
.tags-selection button:hover{ background:#fff; color:#000;}
.forminbox .text-lg {font-size: 16px; line-height: 0px;}
.tokenform{padding-top:70px !important;padding-bottom: 70px !important;}

.forminbox input {padding: 10px; margin-bottom: 16px; border: 1px solid #3e3e3e !important; background: #2c2c2c !important;margin-top: 2px;}
.forminbox textarea{padding: 10px;    margin-bottom: 16px;    border: 1px solid #3e3e3e !important; background: #2c2c2c !important;    margin-top: 2px;}
.forminbox select{padding: 10px;    margin-bottom: 16px;    border: 1px solid #3e3e3e !important; background: #2c2c2c !important;    margin-top: 2px;}
.rightbox{background: #2e2e2e !important;}

.forminbox textarea{border-color: #c5c5c5;background-color: #fff;}
.forminbox select{border-color: #c5c5c5;background-color: #fff;    padding: 10px;}
.forminbox .text-purple-900{color:#fff;    font-weight: 400;background:#424242; border:none;}
.tags-selection button{border-color:#b7b7b7;background-color:#efefef;}
.forminbox  .border-2 {border-width: 1px;}
.tags-selection .text-white{background:#c1a444!important; border-color: #c1a444;}
.formmain{background:#282828;}
.connectbutton button{background:#c1a444!important;  border-radius: 7px !important; padding: 7px 35px 11px !important; box-shadow: 1px 4px 3px #dfdfdf !important;}
.createrightbtn a {
    background: #ffffff !important;
    border-radius: 7px !important;
    padding: 8px 34px 10px !important;
    height: 40px;
    line-height: 24px;
    font-size: 18px !important;
    font-weight: 500 !important;
    color: #000;
}
.text-gold{color: rgb(255 255 255) !important;}
.createtokenbtn{ background:#fff;    color: #000;}
.marquee-link{color:#2a2a2a !important;}
header .text-gray-900{color:rgb(76 76 76) !important;}
header{padding: 0px 64px !important;}
/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: goldenrod;
}

input:checked + .slider:before {
  transform: translateX(26px);
}


.extraoptions .col-md-6{display: inline-grid; width:48%; float:left; margin-right:14px; margin-bottom:20px;}
.extraoptions .col-md-6 label{ padding-bottom:6px;}
.extraoptions .col-md-4{display: inline-grid; width:31%; float:left; margin-right:18px; margin-bottom:20px;}
.extraoptions .col-md-4 label{ padding-bottom:6px;}
.liquiditydiv{margin-right: 0px !important; width: 33% !important;}
.lastdiv{width:50% !important;margin-right:0px !important;}

.cards {
    flex-direction: row;
    background:#141414;
    border: 0;
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.18);
    padding: 14px;
    border: 1px solid #404040;
    border-radius: 10px;
}
.cards:hover{background:#343434 !important;}
.cards.dark {
  color: #fff;
}
.cards.card.bg-light-subtle .card-title {
  color: dimgrey;
}
.marquee-container{background-color: #f3f3f3 !important;border-bottom: 1px solid #cdcdcd;}
.price{display: inline-flex;}
.card-title{font-size:20px;margin-bottom:18px; text-transform: capitalize;}

.cards img {
  border-radius:5px;
  margin-right:10px;
  margin:0 auto;
  
}
.progress{ height:12px;background-color: #5e5e5e;    width: 100%;    margin-bottom: 1px;}
.hardcap{ float:right;}
.hardcapchainimg{width: 21px; float: left;}
.hardcap{ float:right;}
.card-body img{border: 2px solid #000; }
.chainlink img{ border:none !important;}
.card-body {
  justify-content: space-between;
  width: 100%;
}
.text-section {
  max-width: 100%;
}
.cta-section {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.cta-section .btn {
  padding: 0.3em 0.5em;
  /* color: #696969; */
}
.cards.bg-light-subtle .cta-section .btn {
  background-color: #898989;
  border-color: #898989;
}
.MCap{ float: right;    line-height: 35px;}
.per a{ color:#ebbf2e;}
@media screen and (max-width: 475px) {
  .cards {
    font-size: 0.9em;
  }
}
.progress-bar{background-color: #0079e1; font-size: 9px; line-height: 15px;}
.card-img-top{height: 173px; margin-bottom:8px !important;}
.symble{color:#c3c3c3; font-size: 14px;}
.card-text{margin-top:15px;height:50px; overflow: hidden;    color: #e5e5e5;}
.cards hr{display: inline-block; width: 100%; border-top:1px dashed #464646;}
.chainlink{ float: right; font-size: 13px;    margin-top:-1px;    margin-right: -8px;}
.chainimg {height:21px;  margin-top: 1px;  margin-right: 3px !important;}

.AdminPanel{ background: #141414;padding-top: 32px;}
.welcome{background: #141414;}
.AdminPanel ul{padding-left: 0px;}
.AdminPanel ul li{ border-bottom: 1px dashed #4c4c4c;}
.AdminPanel ul li:hover a{background: #ffffff !important;  padding-left: 10px; text-decoration: none;color: #000;}
.gbutton{background: #c1a444 !important;}
.hover\:bg-gray-400:hover{background-color: rgb(116 116 116) !important;}
.Running{ background: #fff !important; padding:5px 15px; color: #000;}
.subtext{ margin-top: 3px;;}
.Dashboard{ margin-bottom: 50px; padding-bottom: 45px; background: #141414;}
.Dashboard .bg-gray-200{background-color:rgb(54 54 54); box-shadow: none !important;}
.Dashboard h2{ color:#fff;}
.Dashboard p{ color:#fff;}
.rightbox .text-sm {
    font-size: 14px;
    line-height: 22px;
    color: #fff !important;
}
.rightbox .text-lg {
    font-size: 14px;
    line-height: 1.75rem;
    color: #fff;
    font-weight: 600 !important;
}
.rightbox input{background: #282828;
    padding: 10px 15px;
    border: 1px solid #565656;}
.bsbox button{ background:#fff !important;}
.bsbox .bg-gray-400 { --tw-bg-opacity: 1; background-color: rgb(126 126 126); color: #000 !important;}
.buttonbox button {
    border-radius: 8px;
    height: 40px;
    padding: 8px 13px;
    font-size: 16px !important;
    margin-left: 0px !important;
}

.PriceChart{margin-top: 15px;}
.PriceChart thead{background: #ddd;font-size: 16px;}
.PriceChart table tr td a{color: rgb(0 71 163) !important;}
.title{ font-size: 28px;margin-bottom: 20px;}
.pricechart tr td a{color: #004793;}
.pricetabel{ margin-bottom:50px;}
.pricechart thead{ background:#e7e7e7;}

.buysell .bg-gold{border-radius:5px; background: #fff; box-shadow: none; color: #000; }
.pricetabel {}
.buysell p{ color:#fff;}
.buysell label{ color:#fff;}
.pricechart tr th{font-size: 14px;}
.pricechart tr td{font-size: 14px;}
.sell{color:#fff;}
.buy{color:#fff;}
.buybox{ margin-bottom:50px;}
.boxc{    background: #343434;}
.boxc ul li{ color:#fff;}
.boxc ul li a{ color:#fff;font-size: 13px !important;  font-weight: 300;}
.boxc h3{color:#fff; font-size:22px !important; margin-bottom:15px; margin-top:15px;}
.lasstbutton {margin-top: 30px; background: #fff !important; color: #000 !important; border: none !important;}
.chartbox{ margin-top:20px;}
.receivedvalu{ float:right;}
.aboutdetais h1{ color:#fff; font-size:35px;}
.aboutdetais p{ color: #fff; font-size:16px !important; margin-bottom: 10px; line-height:28px; text-align:justify;}

.aboutdetais h1{ margin-bottom:20px;}
.slidersection{ padding:50px 0px;}

#particle-canvas {
  width: 100%;
  height: 100%;
  position: absolute !important; 
  top: 0;
  left: 0;
}
.videosec iframe{ border:1px solid #4c4c4c; border-radius:20px;}

.socialicon i{ background:#3e3e3e; padding:8px 8px; margin-right:5px; border-radius:5px;font-size: 18px;}
.socialicon i:hover{background:#fff; color:#000;}


.particles-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Push canvas behind the content */
}

canvas{background: #ffffff !important; border-radius: 20px !important; }
.boxc{padding: 15px; border: 1px solid #464646; border-radius: 10px;}
.boxc .socialicon i {
    background: #525252;
    padding: 6px 7px;
    margin-right: 5px;
    border-radius: 5px;
    font-size: 17px;
    color: #fff;
}
.boxc .socialicon i:hover{background: #ffffff;color: #000 !important;}
.tokenomic{ margin-top:25px;}

/* Premium Footer Styles */
.premium-footer {
  position: relative;
  background: var(--dark-gradient);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, var(--neon-blue), transparent),
    radial-gradient(2px 2px at 40px 70px, var(--neon-purple), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--neon-pink), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float-particles 25s linear infinite;
  opacity: 0.2;
}

.footer-content {
  position: relative;
  z-index: 2;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.footer-section:hover::before {
  left: 100%;
}

.footer-section:hover {
  transform: translateY(-5px);
  border-color: var(--neon-blue);
  box-shadow: 0 15px 35px rgba(0, 212, 255, 0.3);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.footer-logo-img {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 0 10px var(--neon-blue));
  transition: all 0.3s ease;
}

.footer-logo:hover .footer-logo-img {
  filter: drop-shadow(0 0 20px var(--neon-blue));
  transform: scale(1.1);
}

.footer-brand {
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 700;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(145deg, #2a2a2a, #404040);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--accent-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link:hover::before {
  opacity: 1;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.4);
  color: white;
}

.social-link i {
  position: relative;
  z-index: 1;
  font-size: 1.2rem;
}

.footer-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--neon-blue);
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--gold-gradient);
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 1rem;
}

.footer-links a::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: var(--neon-purple);
  font-size: 0.8rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.footer-links a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.footer-links a:hover {
  color: var(--neon-blue);
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
  padding-left: 1.5rem;
}

.footer-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.stat-number {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

.stat-label {
  font-family: 'Rajdhani', sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.footer-bottom {
  margin-top: 3rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  margin-bottom: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  margin: 0;
}

.elite-text {
  color: var(--neon-pink);
  font-weight: 600;
  text-shadow: 0 0 8px rgba(255, 71, 179, 0.5);
}

.footer-badges {
  display: flex;
  gap: 1rem;
}

/* Premium Navbar Styles */
.premium-navbar {
  position: relative;
  background: linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.premium-navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, var(--neon-blue), transparent),
    radial-gradient(2px 2px at 40px 70px, var(--neon-purple), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--neon-pink), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float-particles 25s linear infinite;
  opacity: 0.15;
  z-index: 1;
}

.premium-navbar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  z-index: 10;
}

.navbar-left,
.navbar-right {
  position: relative;
  z-index: 10;
}

.navbar-logo {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 0 15px var(--neon-blue));
  transition: all 0.3s ease;
  border-radius: 50%;
}

.navbar-logo:hover {
  filter: drop-shadow(0 0 25px var(--neon-blue));
  transform: scale(1.1) rotate(5deg);
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-link {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  overflow: hidden;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.1);
  animation: navbar-float 4s ease-in-out infinite;
}

.navbar-link:nth-child(2) {
  animation-delay: -1s;
}

.navbar-link:nth-child(3) {
  animation-delay: -2s;
}

.navbar-link:nth-child(4) {
  animation-delay: -3s;
}

.navbar-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gold-gradient);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.navbar-link:hover::before {
  left: 100%;
}

.navbar-link:hover::after {
  width: 80%;
}

.navbar-link:hover {
  color: white;
  text-shadow: 
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.6),
    0 0 30px rgba(0, 212, 255, 0.4);
  border-color: rgba(0, 212, 255, 0.6);
  background: rgba(0, 212, 255, 0.08);
  box-shadow: 
    0 0 25px rgba(0, 212, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  animation-play-state: paused;
}

.navbar-link.active {
  background: linear-gradient(135deg, rgba(193, 164, 68, 0.2), rgba(255, 179, 71, 0.2));
  border: 1px solid rgba(193, 164, 68, 0.4);
  color: white;
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.8),
    0 0 20px rgba(255, 215, 0, 0.6);
  box-shadow: 
    0 0 20px rgba(255, 215, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar-link.active::after {
  width: 100%;
  background: var(--gold-gradient);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
}

.connect-button-wrapper {
  position: relative;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.premium-wallet-button {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)) !important;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.75rem 1.5rem !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 4px 15px rgba(102, 126, 234, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.premium-wallet-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--primary-gradient), var(--gold-gradient));
  transition: left 0.3s ease;
  z-index: -1;
}

.premium-wallet-button:hover::before {
  left: 0;
}

.premium-wallet-button:hover {
  transform: scale(1.05);
  border-color: rgba(0, 212, 255, 0.8);
  background: rgba(0, 212, 255, 0.1) !important;
  box-shadow: 
    0 8px 30px rgba(0, 212, 255, 0.5),
    0 0 0 1px rgba(0, 212, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.9),
    0 0 20px rgba(0, 212, 255, 0.6);
}

/* Floating animation for navbar elements */
@keyframes navbar-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
}

/* Responsive navbar adjustments */
@media (max-width: 768px) {
  .navbar-links {
    gap: 0.5rem;
  }
  
  .navbar-link {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
  
  .navbar-logo {
    width: 40px;
    height: 40px;
  }
  
  .premium-wallet-button {
    padding: 0.5rem 1rem !important;
    font-size: 0.8rem;
  }
}

.security-badge,
.verified-badge,
.premium-badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.security-badge {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff88;
  border-color: rgba(0, 255, 136, 0.3);
}

.verified-badge {
  background: rgba(0, 212, 255, 0.1);
  color: var(--neon-blue);
  border-color: rgba(0, 212, 255, 0.3);
}

.premium-badge {
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  border-color: rgba(255, 215, 0, 0.3);
}

.security-badge:hover,
.verified-badge:hover,
.premium-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

/* Responsive Footer */
@media (max-width: 768px) {
  .premium-footer {
    padding: 3rem 0 1.5rem;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-section {
    padding: 1.5rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-badges {
    justify-content: center;
  }
  
  .footer-stats {
    flex-direction: row;
    justify-content: space-around;
  }
  
  .stat-item {
    flex: 1;
    margin: 0 0.5rem;
  }
}
.boxc p{ color:#e9e9e9; margin-top:8px;}
.tokeninfo{ margin-top:25px;}
.boxc ul li {
    /* line-height: 22px; */
    list-style: none;
    border-bottom: 1px dashed #505050;
    padding: 6px 0px;
    margin-top: 0px !important;
}
.boxc ul{ margin-left:-18px;}
.separetar{margin-top: 22px;  border-top: 1px solid #4c4c4c;}
.AllTransactions{ margin-top:20px;}
.detaillogo{ margin-top:20px;}
.detaillogo img{border:2px solid #afafaf; width: 80px; height:70px; border-radius: 10px;}
.tokenname{font-size: 22px; color: #fff; margin-top: 10px; font-weight:600;}
.progress{ margin-bottom:20px; margin-top:5px;}
.bonding{font-size: 13px !important; color:#40a7ff !important;}
.tokeninfo ul li span{ float:right;    color: #e9e9e9;}
.buysell button {font-size: 16px !important;}
.tpllogo img{float: left; width: 100%; height: 92px;}
.detaillogo{ width:100%;}
.lgs{ padding-left:0px;}
.lgs h1{ margin-top:61px;}
.tpllogo{background: linear-gradient(180deg, rgba(77, 77, 77, 1) 50%, rgba(32, 32, 32, 1) 50%); margin-bottom:20px;}
.buysell{padding-top: 18px; border-top: 1px dashed #4e4e4e;}
.connectbuttons button{background: #fff !important; font-size: 16px !important; color:#000 !important;}
.connectbuttons button .iekbcc0{ color:#000 !important;}
.successfullytoken p{color: #fff;}
.successbox {background: #323232;  padding: 60px; border: 1px solid #484848; border-radius: 10px;}
.successbox h3{ font-size:26px !important;    margin-bottom: 25px;}


@media only screen and (max-width: 980px) {
  main {padding: 0px 15px !important;}
  .max-w-xs {max-width: 100%;}
  .pt-\[75px\] {padding-top: 35px;}
  header{padding: 0px 10px !important;}
  .extraoptions .col-md-6{ width:100%;}
  .extraoptions .col-md-4{ width:100%;}
  .liquiditydiv{width:100% !important;}
  .lastdiv{width:100% !important;}
  .createrightbtn{margin-top: 35px;}
  header .text-sm{font-size: 15px !important; padding: 0px 8px; margin-left:0px !important;}
  header .w-8 {width:80px;}
  .hero-section{ padding:10px 0px 30px;}
  .hero-title{font-size:2.5rem !important;}
  .hero-subtitle{font-size:1.5rem !important;}
  .tpllogo img {float: left; width: auto; height: 70px; margin-right: 5px;}
  .lgs h1 {margin-top: 31px;}
  .buttonbox{    height: 80px; background:none;}
  .buttonbox button{border: 1px solid #6a6a6a; margin-right: 4px !important; margin-bottom: 4px !important;    height: 38px;}
}
@media only screen and (max-width: 540px) {
	header .text-sm {font-size: 12px;}
	header button{font-size: 13px !important;}
	.extraoptions .col-md-4{ width:100%;}
}

ul {
  list-style-type: disc;
  padding-left: 20px; /* Adjust this value for proper indentation */
}