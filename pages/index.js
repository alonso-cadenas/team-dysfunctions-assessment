import Link from 'next/link';
import React from 'react';
import {Layout, Overview, References} from '../components';

export default function Home() {
    return (
        <Layout isHome>
            <h1>The Five Dysfunctions of a Team Online Assessment</h1>
            <p>
                This is an online assessment from <i>The Five Dysfunctions of a Team</i> by Patrick Lencioni,
                Jossey-Bass
                Publishing, 2002.
            </p>

            <div className='buttonContainer'>
                <Link href={'/assessment'} as={process.env.BACKEND_URL + '/assessment'}>
                    <button type={'button'}>Take Assessment</button>
                </Link>
            </div>
            <Overview/>
            <References/>
        </Layout>
    )
}
