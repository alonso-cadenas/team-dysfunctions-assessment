import React from 'react';

export function ScoreList({answers}) {
    return (
        <div>
            <h2>Rubric</h2>
            <ul>
                <li>A score of 8 or 9 is a probable indication that dysfunction is not a problem for our team.</li>
                <li>A score of 6 or 7 indicates that the dysfunction could be a problem.</li>
                <li>A score of 3 to 5 is probably an indication that team dysfunction needs to be addressed.</li>
            </ul>
            <p>
                Regardless of your scores, it is important to keep in mind that every team needs
                constant work, because without it, even the best ones deviate toward dysfunction.
            </p>

            <h2>My Scores</h2>
            <p>Dysfunction #1 - Absence of Trust: <b>{answers[3] + answers[5] + answers[11]}</b></p>
            <p>Dysfunction #2 - Fear of Conflict: <b>{answers[0] + answers[6] + answers[9]}</b></p>
            <p>Dysfunction #3 - Lack of Commitment: <b>{answers[2] + answers[7] + answers[12]}</b></p>
            <p>Dysfunction #4 - Avoidance of Accountability: <b>{answers[1] + answers[10] + answers[13]}</b></p>
            <p>Dysfunction #5 - Inattention to Results: <b>{answers[4] + answers[8] + answers[14]}</b></p>
        </div>
    )
}
