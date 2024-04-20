import React from "react";
import { createBrowserHistory } from "history"; // Import createBrowserHistory from 'history' library
import { Link } from "react-router-dom";

const CandyScoreBoard = ({ scoreDisplay, timeLeft, gameResult, handlePlayAgainClick }) => {
  const history = createBrowserHistory(); // Create a history object

  const handleNextClick = () => {
    // Navigate to the "Game" page
    history.push("/play");
  };

  return (
    <div className="score-board9">
      <div>Score: {scoreDisplay}</div>
      <div>Time left: {timeLeft}</div>
      {timeLeft === 0 && (
        <div>
          {gameResult}
          <button className="start-game9" onClick={handlePlayAgainClick}>
            Play again
          </button>
          <Link to="/play">
            <button className="start-game9" onClick={handleNextClick}>
              Next
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CandyScoreBoard;

