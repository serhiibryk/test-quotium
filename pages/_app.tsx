import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import MainLayout from '../components/MainLayout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback='Loading...'>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Suspense>
  );
}

export default appWithTranslation(MyApp);
