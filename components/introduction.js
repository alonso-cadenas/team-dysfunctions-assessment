import React from 'react';
import Link from 'next/link';
import styles from './introduction.module.scss';

export function Introduction() {
  return (
    <div className={styles.IntroductionComponent} id="introduction">
      <h1>The Five Dysfunctions of a Team Online Assessment</h1>
      <p>
        An online assessment from <i>The Five Dysfunctions of a Team</i> by
        Patrick Lencioni, Jossey-Bass Publishing, 2002.
      </p>

      <div className="buttonContainer">
        <Link href={'/assessment'} as={process.env.BACKEND_URL + '/assessment'}>
          <button type="button">Take Assessment</button>
        </Link>
      </div>
    </div>
  );
}
