import React, { useState, useEffect } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { toast } from 'react-toastify';
import ManagerFaucetAbi from '../../helper/ManagerFaucetAbi.json';

const CreateToken = () => {
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    description: '',
    image: '',
    twitter: '',
    telegram: '',
    website: '',
    tags: [],
    router: '',
    initialBuy: '0'
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [showExtraOptions, setShowExtraOptions] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [createdTokenAddress, setCreatedTokenAddress] = useState('');

  const availableTags = [
    'DeFi', 'Gaming', 'NFT', 'Meme', 'AI', 'Web3', 'Metaverse', 'DAO'
  ];

  const contractAddress = '0x1234567890123456789012345678901234567890'; // Replace with actual contract address

  // Read available routers from contract
  const { data: routerData } = useReadContract({
    address: contractAddress,
    abi: ManagerFaucetAbi,
    functionName: 'getAllowedRouters',
    enabled: true
  });

  const { writeContract, data: hash, error, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed && hash) {
      setIsCreating(false);
      toast.success('Token created successfully!');
      // You might want to extract the token address from the transaction receipt
      setCreatedTokenAddress('0x...'); // Replace with actual token address from receipt
    }
  }, [isConfirmed, hash]);

  useEffect(() => {
    if (error) {
      setIsCreating(false);
      toast.error('Error creating token: ' + error.message);
    }
  }, [error]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
    setFormData(prev => ({
      ...prev,
      tags: selectedTags.includes(tag) 
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!formData.name || !formData.symbol || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsCreating(true);

    try {
      await writeContract({
        address: contractAddress,
        abi: ManagerFaucetAbi,
        functionName: 'createToken',
        args: [
          formData.name,
          formData.symbol,
          formData.description,
          formData.image,
          formData.twitter,
          formData.telegram,
          formData.website,
          selectedTags.join(','),
          formData.router
        ],
        value: parseEther(formData.initialBuy || '0')
      });
    } catch (err) {
      setIsCreating(false);
      toast.error('Error creating token: ' + err.message);
    }
  };

  if (createdTokenAddress) {
    return (
      <div className="premium-create-token-page">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="premium-success-box">
              <h3 className="text-3xl font-bold mb-4">Token Created Successfully! 🎉</h3>
              <p className="mb-4">
                Your token has been created and deployed to the blockchain.
              </p>
              <p className="mb-6">
                Token Address: <a href={`https://etherscan.io/address/${createdTokenAddress}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">{createdTokenAddress}</a>
              </p>
              <button 
                onClick={() => {
                  setCreatedTokenAddress('');
                  setFormData({
                    name: '',
                    symbol: '',
                    description: '',
                    image: '',
                    twitter: '',
                    telegram: '',
                    website: '',
                    tags: [],
                    router: '',
                    initialBuy: '0'
                  });
                  setSelectedTags([]);
                }}
                className="premium-submit-button"
              >
                Create Another Token
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-create-token-page">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="premium-form-container p-8">
            <div className="premium-form-header">
              <h1 className="premium-form-title">Create Your Token</h1>
              <p className="premium-form-subtitle">Launch your cryptocurrency with advanced features</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="premium-form-label">Token Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter token name"
                    className="premium-form-input w-full p-4 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="premium-form-label">Token Symbol *</label>
                  <input
                    type="text"
                    name="symbol"
                    value={formData.symbol}
                    onChange={handleInputChange}
                    placeholder="Enter token symbol"
                    className="premium-form-input w-full p-4 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="premium-form-label">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your token project"
                  rows="4"
                  className="premium-form-textarea w-full p-4 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="premium-form-label">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.png"
                  className="premium-form-input w-full p-4 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="premium-form-label">Twitter</label>
                  <input
                    type="url"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    placeholder="https://twitter.com/..."
                    className="premium-form-input w-full p-4 rounded-lg"
                  />
                </div>

                <div>
                  <label className="premium-form-label">Telegram</label>
                  <input
                    type="url"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleInputChange}
                    placeholder="https://t.me/..."
                    className="premium-form-input w-full p-4 rounded-lg"
                  />
                </div>

                <div>
                  <label className="premium-form-label">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className="premium-form-input w-full p-4 rounded-lg"
                  />
                </div>
              </div>

              <div className="premium-tags-section">
                <label className="premium-form-label">Tags</label>
                <div className="premium-tags-grid">
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className={`premium-tag-button ${
                        selectedTags.includes(tag) ? 'premium-tag-selected' : ''
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="premium-form-label">Router</label>
                <select
                  name="router"
                  value={formData.router}
                  onChange={handleInputChange}
                  className="premium-form-select w-full p-4 rounded-lg"
                >
                  <option value="">Select Router</option>
                  {routerData && routerData.map((router, index) => (
                    <option key={index} value={router}>
                      {router}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setShowExtraOptions(!showExtraOptions)}
                  className="premium-toggle-button mb-4"
                >
                  {showExtraOptions ? 'Hide' : 'Show'} Advanced Options
                </button>

                {showExtraOptions && (
                  <div className="premium-extra-options">
                    <div>
                      <label className="premium-form-label">Initial Buy (ETH)</label>
                      <input
                        type="number"
                        name="initialBuy"
                        value={formData.initialBuy}
                        onChange={handleInputChange}
                        placeholder="0.0"
                        step="0.001"
                        min="0"
                        className="premium-form-input w-full p-4 rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isCreating || isPending || isConfirming}
                  className="premium-submit-button"
                >
                  {isCreating || isPending || isConfirming ? 'Creating Token...' : 'Create Token'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;