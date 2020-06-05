import Link from 'next/link';
import React from 'react';
import Overview from '../components/overview';
import References from '../components/references';

export default function Home() {
    return (
        <div>
            <h1>The Five Dysfunctions of a Team Online Assessment</h1>
            <p>
                This is an online assessment from <i>The Five Dysfunctions of a Team</i> by Patrick Lencioni, Jossey-Bass
                Publishing, 2002.
            </p>
            <Link href={'/assessment'} as={process.env.BACKEND_URL + '/assessment'}>
                <button>Take Assessment</button>
            </Link>
            <Overview/>
            <References/>
        </div>
    )
}
