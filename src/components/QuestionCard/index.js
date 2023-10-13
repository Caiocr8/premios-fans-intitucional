import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const QuestionCard = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const answerAnimation = useSpring({
        opacity: showAnswer ? 1 : 0,
        height: showAnswer ? 'auto' : 0,
    });

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="mt-5 p-5 flex flex-col items-center " onClick={toggleAnswer}>
            <div className="text-lg font-bold" >
                <h1>{question}</h1>
            </div>
            <animated.div style={answerAnimation} className="answer">
                <h2 >R: {answer}</h2>
            </animated.div>
        </div>     
    );
};

export default QuestionCard;