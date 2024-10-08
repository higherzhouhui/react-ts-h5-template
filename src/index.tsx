import '@rainbow-me/rainbowkit/styles.css';
import '@/assets/css/common.less';
import 'lib-flexible';
import { StrictMode } from 'react';
import { GlobalProvider } from 'rmox';
import App from '@/App';
import { setWindowHeight } from './utils';
import { config } from './wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import ReactDOM from 'react-dom/client';


setWindowHeight();
window.onresize = () => {
  setWindowHeight();
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as any
);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
