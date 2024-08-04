import React, { useState, useEffect } from 'react';
import Results from './Result';
import Question from './Question';

const Homepage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleStartQuiz= () =>{
        fetch('https://opentdb.com/api.php?amount=10')
            .then((response) => response.json())
            .then((data) => setQuestions(data.results));
    }
  
    const handleAnswerSubmit = () => {
      if (userAnswer === questions[currentQuestionIndex].correct_answer) {
        setScore(score + 1);
        setCorrectAnswer(questions[currentQuestionIndex].correct_answer);
      } else {
        setCorrectAnswer(questions[currentQuestionIndex].correct_answer);
      }
      setIsAnswered(true);
    };
  
    const handleNextQuestion = () => {
      setIsAnswered(false);
      setUserAnswer(null);
      setCorrectAnswer(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    };
  
    if (showResult) {
      return (
        <Results
          score={score}
          totalQuestions={questions.length}
        />
      );
    }
  
    return (
      <div className="App">
        {questions.length == 0 && <>
        <div> 
        Let's Start the Quiz ..
        </div>
        <button onClick={()=>{handleStartQuiz()}}>start</button>
        </>}
        {questions.length > 0 && (
          <Question
            question={questions[currentQuestionIndex]}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            handleAnswerSubmit={handleAnswerSubmit}
            correctAnswer={correctAnswer}
            isAnswered={isAnswered}
          />
        )}
        {isAnswered && (
          <button onClick={handleNextQuestion}>Next</button>
        )}
      </div>
    );
  }
  

export default Homepage;
