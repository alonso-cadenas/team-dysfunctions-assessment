import React, {useState} from 'react';
import {Frequency, questions} from '../constants';

export function Assessment() {
    const [answers, setAnswers] = useState(new Array(questions.length));
    const updateAnswer = (event) => {
        const index = event.target.name.replace('answer', '');
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    return (
        <div>
            <h2>Instructions</h2>
            <p>
                Use the scale below to indicate how each statement applies to your team.
                It is important to evaluate the statements honestly and without over-thinking your
                answers.
            </p>
            <form>
                <ol>
                    {questions.map((question, index) =>
                        <li key={index}>
                            {question}
                            <br/>
                            <br/>
                            <input
                                type="radio"
                                id={`usually${index}`}
                                name={`answer${index}`}
                                value={Frequency.USUALLY}
                                onChange={updateAnswer}
                            />
                            <label htmlFor={`usually${index}`}>Usually</label>
                            <br/>
                            <input
                                type="radio"
                                id={`sometimes${index}`}
                                name={`answer${index}`}
                                value={Frequency.SOMETIMES}
                                onChange={updateAnswer}
                            />
                            <label htmlFor={`sometimes${index}`}>Sometimes</label>
                            <br/>
                            <input
                                type="radio"
                                id={`rarely${index}`}
                                name={`answer${index}`}
                                value={Frequency.RARELY}
                                onChange={updateAnswer}
                            />
                            <label htmlFor={`rarely${index}`}>Rarely</label>
                            <br/>
                            <br/>
                        </li>
                    )}
                </ol>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
