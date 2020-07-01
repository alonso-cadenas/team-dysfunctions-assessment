import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

export function Header({ isHome = false }) {
  return (
    <header className={styles.HeaderComponent} id="header">
      <nav>
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a className={`${isHome ? styles.active : ''}`}>Home</a>
        </Link>
        <Link href={'/assessment'} as={process.env.BACKEND_URL + '/assessment'}>
          <a className={`${!isHome ? styles.active : ''}`}>Take Assessment</a>
        </Link>
      </nav>
    </header>
  );
}
