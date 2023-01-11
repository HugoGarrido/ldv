import { VoodooUITamaguiProvider } from '@ldv/voodoo-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Inter, Sora } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--voodoo-ui-body-font',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--voodoo-ui-heading-font',
});

import {
  NextThemeProvider as TamaguiNextThemeProvider,
  useRootTheme,
} from '@tamagui/next-theme';
import { useMemo } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <>
      <Head>
        <title>Welcome to portfolio!</title>
      </Head>
      <TamaguiNextThemeProvider onChangeTheme={setTheme}>
        <VoodooUITamaguiProvider disableInjectCSS defaultTheme={theme}>
          <main
            className={`${inter.variable} ${sora.variable}`}
            style={{ minHeight: '100vh', display: 'flex' }}
          >
            {contents}
          </main>
        </VoodooUITamaguiProvider>
      </TamaguiNextThemeProvider>
    </>
  );
}

export default CustomApp;
