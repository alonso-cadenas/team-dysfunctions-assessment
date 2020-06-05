import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export function Layout(
    {
        children,
        isHome = false
    }
) {
    return (
        <div>
            <Head>
                <title>The Five Dysfunctions of a Team Online Assessment</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header>
                <nav>
                    {
                        !isHome && (
                            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                                Home
                            </Link>
                        )
                    }
                    {
                        isHome && (
                            <Link href={'/assessment'} as={process.env.BACKEND_URL + '/assessment'}>
                                Take Assessment
                            </Link>
                        )
                    }
                </nav>
            </header>

            {children}
        </div>
    )
}
