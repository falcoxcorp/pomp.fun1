import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { daimond, routers, tags } from '../../helper/Helper';
import degenFacetAbi from "../../helper/DegenFacetAbi.json";
import managerAbi from "../../helper/ManagerFaucetAbi.json";
import { waitForTransactionReceipt } from 'wagmi/actions';
import { useNavigate } from 'react-router-dom';
import { config } from '../../wagmiClient';

const CreateToken = () => {
  const { chain, address } = useAccount();
  const { writeContractAsync, isPending, isSuccess } = useWriteContract();

  // Fetch available routers from contract
  const { data: availableRouters } = useReadContract({
    abi: managerAbi,
    address: daimond[1868],
    functionName: 'getRouters',
    chainId: 1868
  });

  const [tokenName, setTokenName] = useState('');
  const [tickerSymbol, setTickerSymbol] = useState('');
  const [imageURl, setImageURl] = useState('');
  const [videoURl, setVideoURl] = useState('');
  const [description, setDescription] = useState('');
  const [router, setRouter] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [telegram, setTelegram] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [showExtraOptions, setShowExtraOptions] = useState(false);
  const [initialBuyAmount, setInitialBuyAmount] = useState(0);
  const [startTime, setStartTime] = useState();
  const [maxPerUser, setMaxPerUser] = useState(0);
  const [hash, setHash] = useState(null);

  // Extra Amounts based on percentages
  const [buyAmount, setBuyAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);

  const { t } = useTranslation();
  const navigate = useNavigate();

  // Get router names from helper
  const getRouterName = (address) => {
    const routerMap = routers[1868] || {};
    return Object.keys(routerMap).find(key => routerMap[key].toLowerCase() === address?.toLowerCase()) || address;
  };

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      if (!address) {
        alert("Please Connect Wallet")
      }
      const params = {
        name: tokenName,
        symbol: tickerSymbol,
        poolDetails: JSON.stringify({
          name: tokenName,
          symbol: tickerSymbol,
          image: imageURl,
          video: videoURl,
          description: description,
          Website: website,
          Twitter: twitter,
          Telegram: telegram,
          Tag: selectedTag
        }),
        configIndex: 20,
        router: router,
        startTime: showExtraOptions ? BigInt(Math.floor(new Date(startTime).getTime() / 1000)) : BigInt(Math.floor(new Date().getTime() / 1000)),
        buyFeeRate: showExtraOptions ? buyAmount * 100 : 0,
        sellFeeRate: showExtraOptions ? sellAmount * 100 : 0,
        maxBuyAmount: 0,
        delayBuyTime: 0,
        merkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000",
        initialBuyAmount: 0 // Using total supply here
      };

      const data = await writeContractAsync({
        abi: degenFacetAbi,
        address: daimond[1868],
        chainID: parseInt(chain.id, 10),
        functionName: 'createPool',
        value: initialBuyAmount, // Add value if needed
        args: [params], // Passing the struct as an object
      });
      const receipt = await waitForTransactionReceipt(config, {
        hash: data,
      })
      console.log(receipt)
      setHash(receipt.transactionHash);
    } catch (error) {
      console.log(error)
      const message = error.shortMessage;
      if (message) {
        if (message.includes('reason:')) {
          const reason = message.split('reason:')[1].trim();
          alert(reason);
        } else {
          alert(message);
        }
      }
    }
  };

  return (
    <main className="premium-create-token-page successfullytoken formmain mainbox relative top-0 min-h-[calc(100vh_-_182px)]">
      <div className="w-full relative">
        {hash ?
          <div className="premium-success-box successbox hash-section text-center mt-8">
            <h3 className="text-xl font-bold text-green-600">Token Created Successfully!</h3>
            <p className="mt-2">
              Transaction Hash:{" "}
              <a
                href={`https://etherscan.io/tx/${hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {hash}
              </a>
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Go to Listing page
            </button>
          </div>
          :
          <form className="premium-token-form tokenform ant-form ant-form-horizontal" onSubmit={handleSubmit}>
            <div className="premium-form-container forminbox lg:mx-auto px-[4.8%] lg:px-0 py-8 lg:py-[20px] w-full lg:w-[800px]">
              <div className="flex flex-col items-center gap-6 w-full">
                {/* Form Title */}
                <div className="premium-form-header text-center mb-6">
                  <h1 className="premium-form-title text-4xl font-bold mb-4">Create Your Token</h1>
                  <p className="premium-form-subtitle text-lg">Launch your cryptocurrency with our advanced platform</p>
                </div>

                {/* Token Name Input Section */}
                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="tokenName" className="premium-form-label text-lg font-bold">
                    {t('tokenName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="tokenName"
                    name="tokenName"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                    placeholder={t('tokenName')}
                    required
                  />
                </div>

                {/* Ticker Symbol Input Section */}
                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="tickerSymbol" className="premium-form-label text-lg font-bold">
                    {t('tickerSymbol')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="tickerSymbol"
                    name="tickerSymbol"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={tickerSymbol}
                    onChange={(e) => setTickerSymbol(e.target.value)}
                    placeholder={t('tickerSymbol')}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="Image Url" className="premium-form-label text-lg font-bold">
                    {t('Image Url')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="imgUrl"
                    name="imgUrl"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={imageURl}
                    onChange={(e) => setImageURl(e.target.value)}
                    placeholder={t('Enter JPG, PNG, GIF Image URL')}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="Image Url" className="premium-form-label text-lg font-bold">
                    {t('Video Url')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="videoUrl"
                    name="videoUrl"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={videoURl}
                    onChange={(e) => setVideoURl(e.target.value)}
                    placeholder={t('Video URL')}
                  />
                </div>

                {/* Description Input Section */}
                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="description" className="premium-form-label text-lg font-bold">
                    {t('description')}<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="premium-form-textarea rounded p-4 border-2 font-bold"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t('description')}
                    rows="4"
                    required
                  />
                </div>

                {/* Raised Token Selection */}
                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="router" className="premium-form-label text-lg font-bold">
                    {t('router')}<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="router"
                    name="router"
                    className="premium-form-select rounded p-4 border-2 font-bold"
                    value={router}
                    onChange={(e) => setRouter(e.target.value)}
                    required
                  >
                    <option value="">Select Router</option>
                    {availableRouters?.map((routerAddress) => (
                      <option key={routerAddress} value={routerAddress}>
                        {getRouterName(routerAddress)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Website, Twitter, and Telegram Links */}
                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="website" className="premium-form-label text-lg font-bold">{t('website')}</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder={t('website')}
                  />
                </div>

                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="twitter" className="premium-form-label text-lg font-bold">{t('twitter')}</label>
                  <input
                    type="url"
                    id="twitter"
                    name="twitter"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder={t('twitter')}
                  />
                </div>

                <div className="w-full flex flex-col gap-4">
                  <label htmlFor="telegram" className="premium-form-label text-lg font-bold">{t('telegram')}</label>
                  <input
                    type="url"
                    id="telegram"
                    name="telegram"
                    className="premium-form-input rounded p-4 border-2 font-bold"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder={t('telegram')}
                  />
                </div>

                {/* Tag Selection */}
                <div className="premium-tags-section w-full">
                  <label className="premium-form-label text-lg font-bold mb-4 block">Select Category</label>
                  <div className="premium-tags-grid tags-selection w-full grid grid-cols-4 gap-4 mt-2">
                  {tags.map((tag) => (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`premium-tag-button px-4 py-2 rounded-lg border-2 font-bold transition-all duration-300 ${selectedTag === tag ? 'premium-tag-selected' : ''}`}
                    >
                      {tag}
                    </button>
                  ))}
                  </div>
                </div>

                {/* Extra Options Toggle */}
                <div className="w-full flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={() => setShowExtraOptions(!showExtraOptions)}
                    className="premium-toggle-button text-gold font-bold text-lg hover:text-white transition-all duration-300"
                  >
                    {showExtraOptions ? 'Hide Extra Options' : 'Show Extra Options'}
                  </button>
                </div>

                {/* Extra Options Fields (conditionally rendered) */}
                {showExtraOptions && (
                  <div className="premium-extra-options w-full space-y-6">
                    <div className="w-full flex flex-col gap-4">
                      <label htmlFor="startTime" className="premium-form-label text-lg font-bold">
                        Start Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        id="startTime"
                        name="startTime"
                        className="premium-form-input rounded p-4 border-2 font-bold"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </div>

                    <div className="w-full flex flex-col gap-4">
                      <label htmlFor="buyAmount" className="premium-form-label text-lg font-bold">

                        Buy Tax % ({chain?.nativeCurrency?.symbol})  Ex:2
                      </label>
                      <input
                        type="number"
                        id="buyAmount"
                        name="buyAmount"
                        className="premium-form-input rounded p-4 border-2 font-bold"
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Buy Fee Rate"
                      />
                    </div>

                    <div className="w-full flex flex-col gap-4">
                      <label htmlFor="sellAmount" className="premium-form-label text-lg font-bold">
                        Sell Tax % ({chain?.nativeCurrency.symbol}) Ex:2
                      </label>
                      <input
                        type="number"
                        id="sellAmount"
                        name="sellAmount"
                        className="premium-form-input rounded p-4 border-2 font-bold"
                        value={sellAmount}
                        onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="Sell Fee Rate"
                      />
                    </div>

                    <div className="w-full flex flex-col gap-4">
                      <label htmlFor="maxPerUser" className="premium-form-label text-lg font-bold">
                        Max Buy Amount per User ({chain?.nativeCurrency.symbol})
                      </label>
                      <input
                        type="number"
                        id="maxPerUser"
                        name="maxPerUser"
                        className="premium-form-input rounded p-4 border-2 font-bold"
                        value={maxPerUser}
                        onChange={(e) => setMaxPerUser(e.target.value)}
                        placeholder="Max Buy Amount"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <label htmlFor="Initial Buy Amount" className="premium-form-label text-lg font-bold">
                        Initial Buy Amount ({chain?.nativeCurrency.symbol}) Ex:2 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="initialBuyAmount"
                        name="initialBuyAmount"
                        className="premium-form-input rounded p-4 border-2 font-bold"
                        value={initialBuyAmount}
                        onChange={(e) => setInitialBuyAmount(e.target.value)}
                        placeholder="Total Supply"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="premium-submit-button createtokenbtn submit-button mt-4 w-full text-white font-bold py-3 rounded-lg"
                  disabled={isPending}
                >
                  {isPending ? 'Creating Token...' : 'Create Token'}
                </button>
              </div>
            </div>
          </form>}
      </div>
    </main>
  );
}

export default CreateToken;
