import React, { useState, useEffect } from "react";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { Link } from "react-router-dom";

function Participation() {
  const [text, setText] = useState("Unpuzzle the pieces!!");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [answers, setAnswers] = useState([null, null]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [timer, setTimer] = useState(0);
  const [blurred, setBlurred] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [timeLimitReached, setTimeLimitReached] = useState(false);

  useEffect(() => {
    let interval;
    if (!puzzleSolved && !timeLimitReached) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        if (selectedDifficulty === 'easy' && timer >= 50) {
          setShowPopup(true);
          setBlurred(true);
          setTimeLimitReached(true); 
          clearInterval(interval);
        }
        if (selectedDifficulty === 'moderate' && timer >= 120) {
          setShowPopup(true);
          setBlurred(true);
          setTimeLimitReached(true); 
          clearInterval(interval);
        }
        if (selectedDifficulty === 'intermediate' && timer >= 240) {
          setShowPopup(true);
          setBlurred(true);
          setTimeLimitReached(true); 
          clearInterval(interval);
        }
        if (selectedDifficulty === 'advanced' && timer >= 360) {
          setShowPopup(true);
          setBlurred(true);
          setTimeLimitReached(true); 
          clearInterval(interval);
        }
        if (selectedDifficulty === 'expert' && timer >= 500) {
          setShowPopup(true);
          setBlurred(true);
          setTimeLimitReached(true); 
          clearInterval(interval);
        }
        if (selectedDifficulty === 'insane' && timer >= 650) {
          setShowPopup(true);
          setBlurred(true);
          setTimeLimitReached(true); 
          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [puzzleSolved, selectedDifficulty, timer, timeLimitReached]);

  const renderTimePopup = () => {
    return (
      <div className="score-popup">
        
        <h2 style={{color : "white", marginTop: "10px", fontSize: "45px"}}>TIME EXCEEDED</h2>
        <p style={{ color: "white", marginBottom: "20px", fontSize:'15px'}}>Your time has exceeded. Do you want to still continue the game?</p>
        <div className="line"></div>
        <div className="popup-buttons">
        <Link to="/part"><button className="try-again-btn" onClick={handleYes}>
            YES
          </button></Link>
          <Link to="/gamehome"><button className="next-btn">
            NO
          </button></Link>
        </div>
      </div>
    );
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setText("Unpuzzle the pieces!!");
    setAnswers([null, null]);
    setPuzzleSolved(false);
    setQuizCompleted(false);
    setShowScorePopup(false);
    setShowPopup(false)
    setBlurred(false);
  };

  const handleAnswer = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedOption;
    setAnswers(newAnswers);

    if (selectedOption === questions[questionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 5);
    }

    const allQuestionsAnswered = newAnswers.every((answer) => answer !== null);
    if (allQuestionsAnswered) {
      setQuizCompleted(true);
      setShowScorePopup(true); // Show score popup after quiz completion
    }
  };

  const questions = [
    {
      question: "Question 1: Which right is shown in the above picture?",
      options: ["Right to Education", "Right to Play", "Right to Participation", "Right to Protection"],
      correctAnswer: 2,
    },
    {
      question: "Question 2: What does the 'right to participation' for children primarily emphasize?",
      options: ["Freedom to Skip School", "Involvement in Decisions Concerning Them", "Right to Buy Goods", "Permission to Drive Cars"],
      correctAnswer: 1,
    },
  ];

  const renderQuestions = () => {
    return questions.map((questionObj, index) => (
      <div key={index} className="question-container">
        <p>{questionObj.question}</p>
        <div className="options-container">
          {questionObj.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleAnswer(index, optionIndex)}
              style={{
                backgroundColor:
                  answers[index] === optionIndex
                    ? optionIndex === questionObj.correctAnswer
                      ? "green"
                      : "red"
                    : answers[index] !== null && optionIndex === questionObj.correctAnswer
                    ? "green"
                    : null,
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ));
  };

  const handleYes = () => {
    setShowPopup(false);
    handleTryAgain();
    setTimeLimitReached(false);
    
  }

  const handleTryAgain = () => {
    // Reset necessary states or perform actions for trying again
    setText("Unpuzzle the pieces!!");
    setAnswers([null, null]);
    setPuzzleSolved(false);
    setQuizCompleted(false);
    setShowScorePopup(false);
    setScore(0);
    setTimer(0);
    setBlurred(false);
  };

  const renderScorePopup = () => {
    return (
      <div className="score-popup">
        <h2 style={{color : "white", marginTop: "10px", fontSize: "45px"}}>Puzzle Completed!</h2>
        <p style={{ color: "white", marginBottom: "20px" }}>Your Score:</p>
      <p style={{ color: "lime", fontSize: "100px", marginBottom: "20px" ,fontFamily: "serif"}}>{score}</p>
        <div className="line"></div>
        <div className="popup-buttons">
        <Link to="/part"><button className="try-again-btn" onClick={handleTryAgain}>
            Try Again
          </button></Link>
          <Link to="/gamehome"><button className="next-btn">
            Next
          </button></Link>
        </div>
      </div>
    );
  };

  const renderQuizSection = () => {
    return (
      <div className="quiz-section">
        <h3>Quiz Section</h3>
        {renderQuestions()}
      </div>
    );
  }

  const setCongratulations = () => {
    setText("Congratulations!!");
    setPuzzleSolved(true);

    switch (selectedDifficulty) {
      case "easy":
        setScore((prevScore) => prevScore + 10);
        break;
      case "moderate":
        setScore((prevScore) => prevScore + 20);
        break;
      case "intermediate":
        setScore((prevScore) => prevScore + 30);
        break;
      case "advanced":
        setScore((prevScore) => prevScore + 40);
        break;
      case "expert":
        setScore((prevScore) => prevScore + 50);
        break;
      case "insane":
        setScore((prevScore) => prevScore + 60);
        break;
      default:
        break;
    }
  };

  const renderPuzzle = () => {
    if (!puzzleSolved) {
    let rows = 2;
    let columns = 2;

    switch (selectedDifficulty) {
      case "easy":
        rows = 2;
        columns = 2;
        break;
      case "moderate":
        rows = 3;
        columns = 3;
        break;
      case "intermediate":
        rows = 5;
        columns = 6;
        break;
      case "advanced":
        rows = 7;
        columns = 9;
        break;
      case "expert":
        rows = 9;
        columns = 12;
        break;
      case "insane":
        rows = 12;
        columns = 15;
        break;
      default:
        break;
    }

    return (
      <div className={`jigsaw-puzzle${blurred ? ' blurred' : ''}`}>
      <JigsawPuzzle
        imageSrc="https://timemaster.ae/uploads/news_article/how-can-public-speaking-training-for-kids-help_2021_12_28_09_25_23.webp"
        rows={rows}
        columns={columns}
        onSolved={() => {
          setCongratulations();
        }}
        difficulty={selectedDifficulty}
        className="jigsaw-puzzle"
      />
      </div>
    );
  } else {
    return null; // Don't render the puzzle when puzzleSolved is true
  }
  };

  return (
    <div className="puzzle-container">
      <div className="timer-box">
      <div className="timer-inner-box" style={{width:'150px',marginTop:'100px',fontSize:'20px'}}>
        <p>Timer: {timer}s</p>
      </div>
    </div>
      <div className="score-box" style={{width:'150px',marginTop:'100px',fontSize:'20px'}}>
        <p>Score: {score}</p>
      </div>
      <div className="left-box">
        <img
          src="https://timemaster.ae/uploads/news_article/how-can-public-speaking-training-for-kids-help_2021_12_28_09_25_23.webp"
          alt="Image"
          className="side-image"
        />
      </div>
      <div className="right-box">
        <h2 className="tag" style={{ fontSize: "40px" }}>{text}</h2>
        <div className="difficulty-options">
          <button onClick={() => handleDifficultyChange("easy")}>Easy</button>
          <button onClick={() => handleDifficultyChange("moderate")}>Moderate</button>
          <button onClick={() => handleDifficultyChange("intermediate")}>Intermediate</button>
          <button onClick={() => handleDifficultyChange("advanced")}>Advanced</button>
          <button onClick={() => handleDifficultyChange("expert")}>Expert</button>
          <button onClick={() => handleDifficultyChange("insane")}>Insane</button>
        </div>
        <div className="congrats-message">
          {text === "Congratulations!!" && (
            <p style={{ fontSize: "35px", color: "green" }}>Congratulations on completing the puzzle!</p>
          )}
        </div>
        {renderPuzzle()}
        {puzzleSolved && (
      <div className="quiz-container">
        {renderQuizSection()}
      </div>
    )}

{showScorePopup && (
        <div className="popup-background">
          <div className="popup-box">
            {renderScorePopup()}
          </div>
        </div>
      )}
      {showPopup && renderTimePopup()}
      </div>
    </div>
  );
}

export default Participation;
