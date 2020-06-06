import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export function Layout(
    {
        children,
        isHome = false,
    }
) {
    return (
        <div>
            <Head>
                <title>{isHome ? 'Home' : 'Take Assessment'} - The Five Dysfunctions of a Team Online Assessment</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                <meta name='description'
                      content='Online assessment from The Five Dysfunctions of a Team by Patrick Lencioni.'
                />
            </Head>
            <header>
                <nav>
                    <Link href='/' as={process.env.BACKEND_URL + '/'}>
                        <a className={`navAnchor ${isHome ? 'active' : ''}`}>Home</a>
                    </Link>
                    <Link href={'/assessment'} as={process.env.BACKEND_URL + '/assessment'}>
                        <a className={`navAnchor ${!isHome ? 'active' : ''}`}>Take Assessment</a>
                    </Link>
                </nav>
            </header>

            {children}
        </div>
    )
}
