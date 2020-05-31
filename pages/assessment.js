import Link from 'next/link'
import React, {useState} from 'react';
import {questions} from '../constants';
import {QuestionList, ScoreList} from '../components';

export default function Assessment() {
    const [answers, setAnswers] = useState(new Array(questions.length));
    const [showScores, setShowScores] = useState(false);
    const updateAnswer = (event) => {
        const index = event.target.name.replace('answer', '');
        const newAnswers = [...answers];
        newAnswers[index] = +event.target.value;
        setAnswers(newAnswers);
    };
    const submitAnswers = (event) => {
        event.preventDefault();
        setShowScores(true);
    };

    return (
        <div>
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a>Home</a>
            </Link>

            <h1>The Five Dysfunctions of a Team Online Assessment</h1>

            {!showScores && <QuestionList submitAnswers={submitAnswers} updateAnswer={updateAnswer}/>}

            {showScores && <ScoreList answers={answers}/>}
        </div>
    )
}
