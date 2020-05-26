import React from 'react';

const questions = [
    'Team members are passionate and unguarded in their discussion of issues.',
    'Team members call out one another\'s deficiencies or unproductive behaviors.',
    'Team members know what their peers are working on and how they contribute to the collective good of the team.',
    'Team members quickly and genuinely apologize to one another when they say or do something inappropriate or' +
    ' possibly damaging to the team.',
    'Team members willingly make sacrifices (such as budget, turf, head count) in their departments or areas of' +
    ' expertise for the good of the team.',
    'Team members openly admit their weaknesses and mistakes.',
    'Team meetings are compelling, and not boring.',
    'Team members leave meetings confident that their peers are completely committed to the decisions that were' +
    ' agreed on, even if there was initial disagreement.',
    'Morale is significantly affected by the failure to achieve team goals.',
    'During team meetings, the most important and difficult issues are put on the table to be resolved.',
    'Team members are deeply concerned about the prospect of letting down their peers.',
    'Team members know about one another\'s personalities and are comfortable discussing them.',
    'Team members end discussions with clear and specific resolutions and calls to action.',
    'Team members challenge one another about their plans and approaches.',
    'Team members are slow to seek credit for their own contributions, but quick to point out those of others.'
];

export default function Assessment() {
    return (
        <div>
            <h2>Instructions</h2>
            <p>
                Use the scale below to indicate how each statement applies to your team.
                It is important to evaluate the statements honestly and without over-thinking your
                answers.
            </p>
            <ol>
                {questions.map((question, index) =>
                    <li key={index}>
                        {question}
                        <form key={index}>
                            <input type="radio" id="usually" name="answer" value="3"/>
                            <label htmlFor="usually">Usually</label>
                            <br/>
                            <input type="radio" id="sometimes" name="answer" value="2"/>
                            <label htmlFor="sometimes">Sometimes</label>
                            <br/>
                            <input type="radio" id="rarely" name="answer" value="1"/>
                            <label htmlFor="rarely">Rarely</label>
                        </form>
                    </li>
                )}
            </ol>
            <input type="submit" value="Submit"/>
        </div>
    )
}
