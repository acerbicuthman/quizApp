// QuizComponent.jsx
import React, { useState, useEffect, useRef } from "react";
import { javascript } from "../Data.js/javascriptData";
import Card from 'react-bootstrap/Card';
import '../Styles/Javascript.css'
import NavDropdownExample from "./NavBar";

const Javascript = () => {
  const currentIndex = useRef(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = javascript.questions[currentQuestionIndex];

  useEffect(() => {
    let timer;
    if (timeRemaining > 0 && !showResults) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 2000);
    } else {
      clearInterval(timer);
      handleShowResults();
    }
    return () => clearInterval(timer);
  }, [timeRemaining, showResults]);

  const handleOptionClick = (choice) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: choice,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < javascript.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setSubmitBtn(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleShowResults = () => {
    let totalScore = 0;
    javascript.questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      if (selectedAnswer && question.correctAnswers.includes(selectedAnswer)) {
        totalScore += question.score;
      }
    });
    setScore(totalScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setTimeRemaining(30);
    setSubmitBtn(false);
    setShowResults(false);
  };

  return (
    
    <div  >
        <NavDropdownExample/>
        <Card id="Javacard" text="light" >
      <Card.Body className="Javabody">
        <Card.Title> <h1>{javascript.topic} Quiz</h1> 
       <p> Time {timeRemaining}s</p>
        </Card.Title>
        {!showResults ? (
        <>
        <Card.Subtitle className="mb-2 text-light">
           
            <h2>
                    Question {currentQuestionIndex + 1}/{javascript.totalQuestions}
                  </h2>
                  <p>{currentQuestion.question}</p>
                  {<pre>{currentQuestion.code}</pre>}
            </Card.Subtitle>
        <Card.Text id="Options">
        {currentQuestion.choices.map((choice, index) => (
                    <button
                      key={index}
                      className="Active"
                      onClick={() => handleOptionClick(choice)}
                    >
                      {choice}
                    </button>
                  ))}
        </Card.Text>
        <Card.Text>
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0} style={{ background: "#a83d89" }}>
                    Prev
                  </button>
                  {submitBtn ? (
                    <button onClick={handleShowResults}>Submit</button>
                  ) : (
                    <button onClick={handleNext} style={{ background: '#ceaea8' }}>Next</button>
                  )}
        </Card.Text>
        </>
        ) : (
            <>
        <Card.Subtitle className="mb-2 text-muted">  <h2>Quiz Results</h2></Card.Subtitle>
        <Card.Text>
       <p> Your total score is {score} out of {javascript.totalScore}</p>
        </Card.Text>
         
        <Card.Link href="#"> <button onClick={resetQuiz}>Restart Quiz</button></Card.Link>
        <h3>Correct Answers:</h3>
        <ul>
                    {javascript.questions.map((question, index) => (
                      <li key={index}>
                        <strong>Q{index + 1}:</strong> {question.correctAnswers.join(", ")}
                      </li>
                    ))}
                  </ul>
                  </>
                  )}
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>

  );
};

export default Javascript;

