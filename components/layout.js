import Head from 'next/head';
import React from 'react';
import { Header } from './header';

export function Layout({ children, isHome = false }) {
  return (
    <div>
      <Head>
        <title>
          {isHome ? 'Home' : 'Take Assessment'} - The Five Dysfunctions of a
          Team Online Assessment
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Online assessment from The Five Dysfunctions of a Team by Patrick Lencioni."
        />
      </Head>

      <Header isHome={isHome} />

      {children}
    </div>
  );
}
