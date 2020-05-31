import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <div>

            <h1>The Five Dysfunctions of a Team Online Assessment</h1>
            <p>
                This is an online assessment from <i>The Five Dysfunctions of a Team</i> by Patrick Lencioni, Jossey-Bass
                Publishing, 2002.
            </p>

            <p>
                <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
                    <a>About</a>
                </Link>
            </p>

            <p>
                <Link href="/assessment" as={process.env.BACKEND_URL + '/assessment'}>
                    <a>Take Assessment</a>
                </Link>
            </p>
        </div>
    )
}
