//GameEndPopup.js
import React from 'react';
import './MazeGameEndPop.css'; // Create a separate CSS file for the popup styles
import {Link} from 'react-router-dom';

const GameEndPopup = ({ score, timeTaken, handlePlayAgain }) => {
  return (
    <div className="popup10">
      <div className="popup10-content">
        <h2>Game Over!</h2>
        <p>Score: {score}</p>
        <p>Time Taken: {Math.floor(timeTaken / 1000)} seconds</p>
        <div className="popup10-buttons">
        <button className="try10-again-btn" onClick={handlePlayAgain}>
            Try Again
          </button>
          <Link to='/level'>
        <button className="next10-btn">
            Next
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default GameEndPopup;
