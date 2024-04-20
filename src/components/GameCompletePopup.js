import React from "react";
import { useNavigate } from "react-router-dom";

function GameCompletePopup({ moves, timer }) {
  const navigate = useNavigate();

  const handleNextClick = () => {
    // You can perform any necessary logic before navigating, if needed
    // For example, sending data to ChildRightsInfo component
    // navigate("/child-rights-info", { state: { moves, timer } });

    // Navigate to ChildRightsInfo component
    navigate("/quiz");
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Congratulations!</h2>
        <p>You won in {moves} moves and {timer} seconds!</p>
        <button className="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default GameCompletePopup;
