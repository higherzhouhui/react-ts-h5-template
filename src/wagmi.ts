import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  bsc,
  bscTestnet,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'myfen',
  projectId: 'b2f06294234e34ccd7845aa107faac32',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
    bscTestnet,
    // ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
});
