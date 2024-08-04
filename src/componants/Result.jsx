import React from 'react';

const Results = ({ score, totalQuestions }) => {
    return (
        <div className="result-page">
          <h1>Quiz Completed!</h1>
          <p>Total Questions: {totalQuestions}</p>
          <p>Correct Answers: {score}</p>
          <p>Incorrect Answers: {totalQuestions - score}</p>
        </div>
      );
};

export default Results;
