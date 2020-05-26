import Link from 'next/link';
import Assessment from '../components/assessment';
import React from 'react';

export default function Home() {
    return (
        <div>
            <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
                <a>About</a>
            </Link>

            <h1>The Five Dysfunctions of a Team Online Assessment</h1>
            <p>
                This is an online assessment from “The Five Dysfunctions of a Team” by Patrick Lencioni, Jossey-Bass
                Publishing, 2002.
            </p>

            <Assessment/>
        </div>
    )
}
