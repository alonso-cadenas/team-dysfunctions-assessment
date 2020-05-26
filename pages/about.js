import Link from 'next/link'
import React from 'react';

export default function About() {
    return (
        <div>
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a>Home</a>
            </Link>

            <h1>The Five Dysfunctions of a Team</h1>
            <p>
                In his book, <i>The Five Dysfunctions of a Team</i>, Patrick Lencioni describes five root causes of team
                dysfunction that must be solved separately.
            </p>

            <h3>Dysfunction #1: Absence of Trust</h3>
            <p>
                This occurs when team members are reluctant to be vulnerable with one another and
                are unwilling to admit their mistakes, weaknesses or needs for help. Without a certain
                comfort level among team members, a foundation of trust is impossible.
            </p>

            <h3>Dysfunction #2: Fear of Conflict</h3>
            <p>
                Teams that are lacking on trust are incapable of engaging in unfiltered, passionate
                debate about key issues, causing situations where team conflict can easily turn into
                veiled discussions and back channel comments. In a work setting where team
                members do not openly air their opinions, inferior decisions are the results.
            </p>

            <h3>Dysfunction #3: Lack of Commitment</h3>
            <p>
                Without conflict, it is difficult for team members to commit to decisions, creating an
                environment where ambiguity prevails. Lack of direction and commitment can make
                employees, particularly star employees, disgruntled.
            </p>

            <h3>Dysfunction #4: Avoidance of Accountability</h3>
            <p>
                When teams don’t commit to a clear plan of action, even the most focused and driven
                individuals hesitate to call their peers on actions and behaviors that may seem
                counterproductive to the overall good of the team.
            </p>

            <h3>Dysfunction #5: Inattention to Results</h3>
            <p>
                Team members naturally tend to put their own needs (ego, career development,
                recognition, etc.) ahead of the collective goals of the team when individuals aren’t held
                accountable. If a team has lost sight of the need for achievement, the business
                ultimately suffers.
            </p>

            <h2>References</h2>
            <p>
                Sourced from The 2006 Linkage Excellence in Management & Leadership Series: Building and
                Leading a High Performance Team, Patrick Lencioni
            </p>
            <cite id="CITEREFPatrick_Lencioni2002">
                Patrick Lencioni (2002),
                &nbsp;
                <a rel="nofollow"
                   href="https://books.google.com/books?id=AEIGAAAACAAJ">
                    <i>The Five Dysfunctions of a Team</i>
                </a>
                , Jossey-Bass, ISBN
                &nbsp;
                <a href="https://en.wikipedia.org/wiki/Special:BookSources/0-7879-6075-6" title="Special:BookSources/0-7879-6075-6">
                    <bdi>0-7879-6075-6</bdi>
                </a>
            </cite>
        </div>
    )
}
