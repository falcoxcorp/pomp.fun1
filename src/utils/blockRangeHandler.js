/**
 * Robust Block Range Handler for eth_getLogs requests
 * Automatically chunks large block ranges and handles RPC provider limitations
 * 
 * @author Blockchain Developer
 * @version 1.0.0
 */

/**
 * Configuration options for the block range handler
 * @typedef {Object} BlockRangeConfig
 * @property {number} defaultChunkSize - Default chunk size in blocks (default: 500)
 * @property {number} maxRetries - Maximum retry attempts for failed requests (default: 3)
 * @property {number} retryDelay - Base delay between retries in ms (default: 1000)
 * @property {number} rateLimitDelay - Delay between chunk requests in ms (default: 100)
 * @property {boolean} enableLogging - Enable detailed logging (default: false)
 * @property {number} maxConcurrentRequests - Max concurrent chunk requests (default: 3)
 */

/**
 * Default configuration for the block range handler
 */
const DEFAULT_CONFIG = {
  defaultChunkSize: 500,
  maxRetries: 3,
  retryDelay: 1000,
  rateLimitDelay: 100,
  enableLogging: false,
  maxConcurrentRequests: 3
};

/**
 * Sleep utility function
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Logger utility with conditional logging
 * @param {boolean} enabled - Whether logging is enabled
 * @param {string} level - Log level (info, warn, error)
 * @param {string} message - Log message
 * @param {any} data - Additional data to log
 */
const logger = (enabled, level, message, data = null) => {
  if (!enabled) return;
  
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  
  switch (level) {
    case 'info':
      console.log(logMessage, data || '');
      break;
    case 'warn':
      console.warn(logMessage, data || '');
      break;
    case 'error':
      console.error(logMessage, data || '');
      break;
    default:
      console.log(logMessage, data || '');
  }
};

/**
 * Extract block range limit from RPC error message
 * @param {Error} error - The RPC error
 * @returns {number|null} - Extracted block limit or null if not found
 */
const extractBlockLimitFromError = (error) => {
  const message = error.message || error.details?.message || '';
  
  // Common patterns for block range limit errors
  const patterns = [
    /up to a (\d+) block range/i,
    /maximum (\d+) blocks/i,
    /block range should be (\d+) or less/i,
    /limit of (\d+) blocks/i
  ];
  
  for (const pattern of patterns) {
    const match = message.match(pattern);
    if (match) {
      return parseInt(match[1], 10);
    }
  }
  
  return null;
};

/**
 * Convert number to hex string for block numbers
 * @param {number|bigint} num - Number to convert
 * @returns {string} - Hex string
 */
const toHex = (num) => {
  return '0x' + BigInt(num).toString(16);
};

/**
 * Convert hex string to number
 * @param {string} hex - Hex string to convert
 * @returns {number} - Converted number
 */
const fromHex = (hex) => {
  return parseInt(hex, 16);
};

/**
 * Calculate optimal chunk size based on total range and constraints
 * @param {number} totalRange - Total block range
 * @param {number} maxChunkSize - Maximum allowed chunk size
 * @param {number} maxConcurrentRequests - Maximum concurrent requests
 * @returns {number} - Optimal chunk size
 */
const calculateOptimalChunkSize = (totalRange, maxChunkSize, maxConcurrentRequests) => {
  // If total range is small, use it as chunk size
  if (totalRange <= maxChunkSize) {
    return totalRange;
  }
  
  // Calculate chunk size that results in reasonable number of requests
  const idealChunks = Math.min(maxConcurrentRequests * 2, 10);
  const idealChunkSize = Math.ceil(totalRange / idealChunks);
  
  // Return the smaller of ideal chunk size and max allowed
  return Math.min(idealChunkSize, maxChunkSize);
};

/**
 * Execute a single eth_getLogs request with retry logic
 * @param {Object} publicClient - Viem public client
 * @param {Object} params - getLogs parameters
 * @param {BlockRangeConfig} config - Configuration options
 * @returns {Promise<Array>} - Array of logs
 */
const executeGetLogsWithRetry = async (publicClient, params, config) => {
  let lastError;
  let currentChunkSize = config.defaultChunkSize;
  
  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      logger(config.enableLogging, 'info', 
        `Attempting getLogs request (attempt ${attempt + 1}/${config.maxRetries + 1})`, 
        { fromBlock: params.fromBlock, toBlock: params.toBlock }
      );
      
      const logs = await publicClient.getLogs(params);
      
      logger(config.enableLogging, 'info', 
        `Successfully retrieved ${logs.length} logs`, 
        { fromBlock: params.fromBlock, toBlock: params.toBlock }
      );
      
      return logs;
      
    } catch (error) {
      lastError = error;
      
      logger(config.enableLogging, 'warn', 
        `Request failed (attempt ${attempt + 1}): ${error.message}`, 
        { fromBlock: params.fromBlock, toBlock: params.toBlock }
      );
      
      // Check if it's a block range error
      const extractedLimit = extractBlockLimitFromError(error);
      if (extractedLimit && extractedLimit < currentChunkSize) {
        logger(config.enableLogging, 'info', 
          `Detected block limit: ${extractedLimit}, adjusting chunk size`
        );
        
        // This error indicates we need to use smaller chunks
        // Return a special error that the main function can handle
        const rangeError = new Error('BLOCK_RANGE_TOO_LARGE');
        rangeError.suggestedLimit = extractedLimit;
        rangeError.originalError = error;
        throw rangeError;
      }
      
      // For other errors, wait before retrying
      if (attempt < config.maxRetries) {
        const delay = config.retryDelay * Math.pow(2, attempt); // Exponential backoff
        logger(config.enableLogging, 'info', `Waiting ${delay}ms before retry`);
        await sleep(delay);
      }
    }
  }
  
  throw lastError;
};

/**
 * Process chunks concurrently with rate limiting
 * @param {Array} chunks - Array of chunk parameters
 * @param {Object} publicClient - Viem public client
 * @param {BlockRangeConfig} config - Configuration options
 * @returns {Promise<Array>} - Combined results from all chunks
 */
const processChunksConcurrently = async (chunks, publicClient, config) => {
  const results = [];
  const semaphore = new Array(config.maxConcurrentRequests).fill(null);
  let chunkIndex = 0;
  
  const processChunk = async (chunk) => {
    try {
      const logs = await executeGetLogsWithRetry(publicClient, chunk, config);
      return logs;
    } catch (error) {
      if (error.message === 'BLOCK_RANGE_TOO_LARGE') {
        throw error; // Re-throw to be handled by main function
      }
      logger(config.enableLogging, 'error', `Chunk processing failed: ${error.message}`, chunk);
      throw error;
    }
  };
  
  const workers = semaphore.map(async () => {
    while (chunkIndex < chunks.length) {
      const currentIndex = chunkIndex++;
      const chunk = chunks[currentIndex];
      
      try {
        const logs = await processChunk(chunk);
        results[currentIndex] = logs;
        
        // Rate limiting delay
        if (config.rateLimitDelay > 0 && chunkIndex < chunks.length) {
          await sleep(config.rateLimitDelay);
        }
      } catch (error) {
        results[currentIndex] = error;
      }
    }
  });
  
  await Promise.all(workers);
  
  // Check for errors and combine results
  const combinedLogs = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result instanceof Error) {
      throw result;
    }
    combinedLogs.push(...result);
  }
  
  return combinedLogs;
};

/**
 * Main function to handle eth_getLogs with automatic block range chunking
 * @param {Object} publicClient - Viem public client instance
 * @param {Object} params - getLogs parameters (address, topics, fromBlock, toBlock, etc.)
 * @param {Partial<BlockRangeConfig>} userConfig - User configuration options
 * @returns {Promise<Array>} - Array of log entries
 * 
 * @example
 * ```javascript
 * import { getLogsWithChunking } from './blockRangeHandler';
 * 
 * const logs = await getLogsWithChunking(publicClient, {
 *   address: '0x123...',
 *   topics: ['0xabc...'],
 *   fromBlock: 1000000n,
 *   toBlock: 1001000n
 * }, {
 *   enableLogging: true,
 *   defaultChunkSize: 500
 * });
 * ```
 */
export const getLogsWithChunking = async (publicClient, params, userConfig = {}) => {
  const config = { ...DEFAULT_CONFIG, ...userConfig };
  
  // Convert block numbers to numbers for easier manipulation
  const fromBlock = typeof params.fromBlock === 'bigint' ? Number(params.fromBlock) : fromHex(params.fromBlock);
  const toBlock = typeof params.toBlock === 'bigint' ? Number(params.toBlock) : fromHex(params.toBlock);
  
  const totalRange = toBlock - fromBlock + 1;
  
  logger(config.enableLogging, 'info', 
    `Starting getLogs with chunking`, 
    { fromBlock, toBlock, totalRange, config }
  );
  
  // If range is small enough, try direct request first
  if (totalRange <= config.defaultChunkSize) {
    try {
      return await executeGetLogsWithRetry(publicClient, params, config);
    } catch (error) {
      if (error.message !== 'BLOCK_RANGE_TOO_LARGE') {
        throw error;
      }
      // Fall through to chunking logic
    }
  }
  
  let chunkSize = calculateOptimalChunkSize(totalRange, config.defaultChunkSize, config.maxConcurrentRequests);
  let maxAttempts = 3;
  
  while (maxAttempts > 0) {
    try {
      // Create chunks
      const chunks = [];
      for (let start = fromBlock; start <= toBlock; start += chunkSize) {
        const end = Math.min(start + chunkSize - 1, toBlock);
        chunks.push({
          ...params,
          fromBlock: toHex(start),
          toBlock: toHex(end)
        });
      }
      
      logger(config.enableLogging, 'info', 
        `Created ${chunks.length} chunks with size ${chunkSize}`
      );
      
      // Process chunks
      const allLogs = await processChunksConcurrently(chunks, publicClient, config);
      
      logger(config.enableLogging, 'info', 
        `Successfully retrieved ${allLogs.length} total logs from ${chunks.length} chunks`
      );
      
      return allLogs;
      
    } catch (error) {
      if (error.message === 'BLOCK_RANGE_TOO_LARGE' && error.suggestedLimit) {
        // Adjust chunk size based on error
        chunkSize = Math.min(error.suggestedLimit, Math.floor(chunkSize * 0.8));
        maxAttempts--;
        
        logger(config.enableLogging, 'warn', 
          `Reducing chunk size to ${chunkSize} due to range limit error`
        );
        
        if (chunkSize < 1) {
          throw new Error('Block range too small to process');
        }
        
        continue;
      }
      
      throw error;
    }
  }
  
  throw new Error('Failed to process logs after multiple chunk size adjustments');
};

/**
 * Utility function to get current block number
 * @param {Object} publicClient - Viem public client
 * @returns {Promise<bigint>} - Current block number
 */
export const getCurrentBlockNumber = async (publicClient) => {
  return await publicClient.getBlockNumber();
};

/**
 * Utility function to create safe block ranges
 * @param {bigint} currentBlock - Current block number
 * @param {number} blocksBack - How many blocks to go back
 * @param {number} maxRange - Maximum range size
 * @returns {Object} - Safe from and to block numbers
 */
export const createSafeBlockRange = (currentBlock, blocksBack = 500, maxRange = 500) => {
  const fromBlock = currentBlock - BigInt(Math.min(blocksBack, maxRange));
  const toBlock = currentBlock;
  
  return {
    fromBlock,
    toBlock
  };
};

// Export default configuration for external use
export { DEFAULT_CONFIG };