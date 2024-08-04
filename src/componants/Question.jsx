import React from 'react';

const Question = ({ question, userAnswer, setUserAnswer, handleAnswerSubmit, correctAnswer, isAnswered, }) => {

        const handleOptionClick = (option) => {
          if (!isAnswered) {
            setUserAnswer(option);
          }
        };
      
        return (
          <div className="question-card">
             <h2>{question.question}</h2>
             <div className="options">
              {question.incorrect_answers.concat(question.correct_answer).map((option, index) => (
                <button
                key={index}
                className={`option ${userAnswer === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
              
              ))}
            </div>
            {isAnswered && (
              <>
                <p>
                  {userAnswer === correctAnswer
                    ? 'Correct!'
                    : `Incorrect! The correct answer is: ${correctAnswer}`}
                </p>
              </>
            )}
            {!isAnswered && (
              <button onClick={handleAnswerSubmit} disabled={!userAnswer}>
                Submit
              </button>
            )}
          </div>
        );
      }

export default Question;
