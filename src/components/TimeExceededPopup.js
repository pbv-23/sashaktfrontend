//TimeExceededPopup.js
import React, { useState } from 'react';
import './MazeGameEndPop.css'; 
import {Link} from 'react-router-dom';

const TimeExceededPopup = ({ handlePlayAgain }) => {
  const [showPopup, setShowPopup] = useState(true); // State to control the visibility of the popup

  const handleYesClick = () => {
    setShowPopup(false); // Hide the popup
    handlePlayAgain(); // Perform any necessary action after clicking "YES"
  };

  return (
    <>
      {showPopup && ( // Render the popup based on the showPopup state
        <div className="popup10">
          <div className="popup10-content">
            <h2>TIME EXCEEDED</h2>
            <p>Your time has exceeded. Do you want to still continue the game?</p>
            <button className="try10-again-btn" onClick={handleYesClick}>
              YES
            </button>
            <Link to='/level'>
            <button className="next10-btn" onClick={() => setShowPopup(false)}>
              NO
            </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default TimeExceededPopup;
