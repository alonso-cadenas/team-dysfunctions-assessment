import React from 'react';
import { Introduction, Layout, Overview, References } from '../components';

export default function Home() {
  return (
    <Layout isHome>
      <Introduction />
      <Overview />
      <References />
    </Layout>
  );
}
