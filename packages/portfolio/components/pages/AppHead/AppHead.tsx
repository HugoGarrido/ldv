import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

interface AppHeadProps {
  children: ReactNode;
}

export function AppHead({ children }: AppHeadProps): ReactElement {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&family=Sora&display=swap"
        rel="stylesheet"
      />
      {children}
    </Head>
  );
}
