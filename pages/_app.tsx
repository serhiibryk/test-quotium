import React, { Suspense } from "react";

import type { AppProps } from "next/app";

import MainLayout from "../components/MainLayout";

import "../i18n";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="Loading...">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Suspense>
  );
}

export default MyApp;
