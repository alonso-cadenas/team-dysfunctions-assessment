import React from 'react';
import {Frequency, questions} from '../constants';
import Link from 'next/link';

export function QuestionList({submitAnswers, updateAnswer}) {
    return (
        <div>
            <h2>Instructions</h2>
            <p>
                Use the scale below to indicate how each statement applies to your team.
                It is important to evaluate the statements honestly and without over-thinking your
                answers.
            </p>
            <form onSubmit={submitAnswers}>
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
                                required
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

                <div className={'buttonContainer'}>
                    <button type={'submit'}>Submit</button>
                    <Link href="/" as={process.env.BACKEND_URL + '/'}>
                        <button type={'button'}>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
