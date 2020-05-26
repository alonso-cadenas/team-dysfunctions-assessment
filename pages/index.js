import Link from 'next/link';
import Assessment from '../components/assessment';
import React from 'react';

export default function Home() {
    return (
        <div>
            <h1>Five Dysfunctions of a Team Online Assessment</h1>

            <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
                <a>About</a>
            </Link>

            <Assessment/>
        </div>
    )
}
