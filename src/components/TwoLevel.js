import { useState, useMemo, useEffect } from "react";
import { generateMaze, solve } from "./Util";
import GameEndPopup from './GameEndPopup';
import TimeExceededPopup from "./TimeExceededPopup";


const TwoLevel = () => {
    const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState("playing");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [collectibles, setCollectibles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showTimeExceededPopup, setShowTimeExceededPopup] = useState(false);

  useEffect(() => {
    setCollectibles(generateCollectibles());
  }, [gameId]);


  const size = 6; // Set maze size to 7

  const [userPosition, setUserPosition] = useState([0, 0]);

  const maze = useMemo(() => generateMaze(size, size), [size, gameId]);
  const solution = useMemo(() => {
    const s = new Set();
    const solutionPath = solve(maze, userPosition[0], userPosition[1]);
    solutionPath.forEach((path) => {
      const [x, y] = path;
      s.add(String(x) + "-" + String(y));
    });
    return s;
  }, [size, userPosition[0], userPosition[1], gameId]);

  const [showManWalking, setShowManWalking] = useState(true);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;

    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setShowManWalking(false); // Hide man-walking emoji when reaching school
      setEndTime(Date.now());
    }
  }, [userPosition, maze]);

  useEffect(() => {
    if (status === "playing") {
      setStartTime(Date.now());
    }
  }, [status]);

  useEffect(() => {
    let interval;
    if (status === "playing" && startTime !== 0) {
      interval = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, status]);

  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }


    return arr.join(" ");
  };

  const handleMove = (e) => {
    e.preventDefault();
    if (status !== "playing") {
      return;
    }
    const key = e.code;

    const [i, j] = userPosition;
    if ((key === "ArrowUp" || key === "KeyW") && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j]);
    }
    if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
    }
    if ((key === "ArrowDown" || key === "KeyS") && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j]);
    }
    if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
    }
    if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
      setIsFlipped(false); // Flipping the emoji when moving left
    }
    if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
      setIsFlipped(true); // Resetting the emoji to original when moving right
    }
    const collectibleIndex = collectibles.findIndex(
      (item) => item[0] === userPosition[0] && item[1] === userPosition[1]
    );
  
    const collectiblePoints = 10;

    // Inside handleMove function, where collectible is found and score is updated:
    if (collectibleIndex !== -1) {
      // Remove the collectible from the list and increase the score
      const updatedCollectibles = [...collectibles];
      updatedCollectibles.splice(collectibleIndex, 1);
      setScore1(score1 + collectiblePoints); // Update the score with the collectible points
      setCollectibles(updatedCollectibles);
    }
  };

  const handleUpdateSettings = () => {
    setUserPosition([0, 0]);
    setStatus("playing");
    setGameId(gameId + 1);
    setShowManWalking(true);
    setStartTime(0);
    setEndTime(0);
    setScore(0);
    setElapsedTime(0);
    setScore1(0);
  };

  const shouldFlip = userPosition[0] > 0 && userPosition[1] > 0;

  const [isFlipped, setIsFlipped] = useState(true);

  const calculateScore = () => {
    if (startTime !== 0 && endTime !== 0) {
      const timeTaken = endTime - startTime;
      const adjustedTime = Math.round(timeTaken / 1000); // Convert milliseconds to seconds

      // Predefined scores based on time intervals
      let calculatedScore = 0;
      if (adjustedTime < 5) {
        calculatedScore = 200; // Set score for time < 10 seconds
      } else if (adjustedTime < 10) {
        calculatedScore = 150; // Set score for time between 10 to 20 seconds
      } else if (adjustedTime < 15) {
        calculatedScore = 100; // Set score for time between 10 to 20 seconds
      } else if (adjustedTime < 20) {
        calculatedScore = 50; // Set score for time between 10 to 20 seconds
      } 
      else {
        calculatedScore = 25; // Set score for time > 20 seconds
      }
      setScore(calculatedScore);
    }
  };

  useEffect(() => {
    calculateScore();
  }, [endTime]);

  const bookEmojis = ['🖋', '🧁', '🎒', '📗']; // Add more book emojis or any other emojis you'd like

const generateCollectibles = () => {
  const collectibles = [];
  let remainingCollectibles = 8; // Number of collectibles to be added

  // Randomly distribute collectibles within the maze
  while (remainingCollectibles > 0) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    // Ensure the collectible is not placed at the starting point or the destination
    if ((x !== 0 || y !== 0) && (x !== maze.length - 1 || y !== maze[0].length - 1)) {
      const randomEmoji = bookEmojis[Math.floor(Math.random() * bookEmojis.length)]; // Choose a random emoji from the bookEmojis array
      collectibles.push([x, y, randomEmoji]);
      remainingCollectibles--;
    }
  }
  return collectibles;
};

const timerBoxStyle = {
  border: '2px solid #ccc',
  marginTop: '0px',
  background: 'cornsilk',
  width: '180px',
  height: '50px',
  marginRight: '1200px',
};

const handlePlayAgain = () => {
  setShowPopup(false); // Hide the popup
  handleUpdateSettings(); // Reset game settings
  setShowTimeExceededPopup(false);
};

// Check if the game status is 'won' and show the popup
useEffect(() => {
  if (status === 'won') {
    setShowPopup(true);
  }
}, [status]);

  // Update the score when the user collects a mark (collectible item)

  useEffect(() => {
    // Check conditions for showing the time exceeded popup
    if (elapsedTime > 25000) { // For example, if time exceeds 30 seconds
      setShowTimeExceededPopup(true); // Set showTimeExceededPopup to true
      setStatus('lost'); // Change the game status to 'lost' or any appropriate value
    }
  }, [elapsedTime]);
    return ( 
        <div className="box30" onKeyDown={handleMove} tabIndex={-1}>
      <div className="info" onClick={handleUpdateSettings}>
        {status === "won" ? (
          <p>
            You won! Score: {score+score1}.
          </p>
        ) : (
          <p>Score: {score1}</p>
        )}
      </div>
      <h2 style={{fontSize: '24px'}}>Cilck anywhere on the Maze to Start the Game</h2>

      {/* Timer display */}
      <div className="timer" style={timerBoxStyle}>
        <p style={{ fontSize: '20px', color:'forestgreen'}}>TIMER: {Math.floor(elapsedTime / 1000)} seconds</p>
      </div>


      <div id="gradient" className="gradient" />
<table
  id="maze"
  style={{
    position: 'absolute',
    top: '150px',
    left: '650px',
    borderCollapse: 'collapse',
  }}
>
<tbody>
  {maze.map((row, i) => (
    <tr key={`${row}-${i}`}>
      {row.map((cell, j) => {
        const collectible = collectibles.find(
          (item) => item[0] === i && item[1] === j
        );
        return (
          <td
            key={`${cell}-${i}-${j}`}
            className={makeClassName(i, j)}
            style={{
              padding: '0',
              width: '50px', // Set desired cell width here
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px', // Set desired cell height here
                fontSize: '25px',
              }}
            >
              {/* Fixed-size container for man and emoji */}
              <div
                style={{
                  width: '25px', // Fixed width for the container
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                {i === userPosition[0] && j === userPosition[1] && showManWalking && (
                  <span
                    style={{ fontSize: '25px' }}
                    role="img"
                    aria-label="man walking"
                    className={isFlipped ? 'flippedEmoji' : ''}
                  >
                    🚶
                  </span>
                )}
                {/* Conditionally render the collectible emoji */}
                {collectible && (
                  <span
                    style={{ fontSize: '25px' }}
                    role="img"
                    aria-label="collectible item"
                  >
                    {collectible[2]} {/* Render the collected emoji */}
                  </span>
                )}
              </div>
              {/* Render other content (school emoji or anything else) */}
              {i === maze.length - 1 && j === maze[0].length - 1 && (
                <span role="img" aria-label="school">
                  🏫
                </span>
              )}
            </div>
          </td>
        );
      })}
    </tr>
  ))}
</tbody>
</table> {/* Add this closing tag */}

{showPopup && (
  <GameEndPopup
    score={score + score1} // Calculate the total score
    timeTaken={endTime - startTime} // Calculate the total time taken
    handlePlayAgain={handlePlayAgain}
  />
)}

{showTimeExceededPopup && (
  <TimeExceededPopup handlePlayAgain={handlePlayAgain} />
)}

    </div>
     );
}
 
export default TwoLevel;
