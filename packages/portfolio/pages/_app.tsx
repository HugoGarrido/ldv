import { VoodooUIProvider, Button } from '@ldv/voodoo-ui';
import { AppProps } from 'next/app';
import { AppHead } from '../components/pages/AppHead/AppHead';
import './styles.css';

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead>
        <title>Welcome to portfolio!</title>
      </AppHead>

      <VoodooUIProvider isSSR>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </VoodooUIProvider>
    </>
  );
}

export default PortfolioApp;
