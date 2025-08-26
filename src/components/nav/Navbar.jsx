import React from 'react';
import { NavLink } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import logo from "../../assets/logo/logo.png";
import { useAccount } from 'wagmi';
import { admin } from '../../helper/Helper';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Use translation hook
  const { address } = useAccount()
  // Change language function
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="premium-navbar sticky top-0 z-50 backdrop-blur-md px-4">
      <div className="flex justify-between items-center h-[56px] lg:h-[80px] xl:h-[80px]">
        {/* Left side: Logo and Links (Board, Create Token) */}
        <div className="navbar-left flex items-center gap-5">
          <NavLink to="/" className="w-8 sm:w-[200px]">
            <h1><img src="./logo/logo.png" className="navbar-logo-enlarged" alt="logo" /></h1>
          </NavLink>
          <div className="navbar-links flex space-x-6" style={{marginLeft: '200px'}}>
            <NavLink
              to="/"
              className="navbar-link text-sm font-semibold font-bold"
            >
              {t('board')}
            </NavLink>
            <NavLink
              to="/create-token"
              className="navbar-link text-sm font-semibold font-bold"
            >
              {t('createToken')} {/* Use translation key */}
            </NavLink>
            {address == admin && <NavLink
              to="/admin-panel"
              className="navbar-link text-sm font-semibold font-bold"
            >
              {t('Admin')} {/* Use translation key */}
            </NavLink>}
            <NavLink
              to="/kyc"
              className="navbar-link text-sm font-semibold font-bold"
            >
              {t('KYC')} {/* Use translation key */}
            </NavLink>
            <a
              href="https://falcox.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link text-sm font-semibold font-bold"
            >
              Web Oficial
            </a>
          </div>
        </div>

        {/* Right side: ConnectButton and Language Selector */}
        <div className="navbar-right connectbuttons flex items-center gap-4">
          {/* Language Select */}
          {/* <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="px-4 py-2 rounded-md text-sm"
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select> */}

          <div className="connect-button-wrapper">
            <ConnectButton
            label={t('connect Wallet')} // Use translation key for button
            accountStatus="address"
            chainStatus="name"
            className="premium-connect-button text-sm px-4 py-2 rounded-full focus:ring-2 focus:ring-offset-2"
            >
            {({ isConnected, isConnecting }) => {
              let bgColor = isConnected ? 'bg-green-500' : 'bg-blue-500';
              let hoverColor = isConnected ? 'hover:bg-green-600' : 'hover:bg-blue-600';
              let statusText = isConnected ? t('walletConnected') : t('connectWallet'); // Translate status text

              return (
                <button
                  className="premium-wallet-button text-white rounded-full px-4 py-2"
                >
                  {isConnecting ? 'Connecting...' : statusText}
                </button>
              );
            }}
            </ConnectButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
