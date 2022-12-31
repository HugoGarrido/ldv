import { VoodooUIProvider } from '@ldv/voodoo-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portfolio!</title>
      </Head>
      <VoodooUIProvider isSSR>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </VoodooUIProvider>
    </>
  );
}

export default CustomApp;
