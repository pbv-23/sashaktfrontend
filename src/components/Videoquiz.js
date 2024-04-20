import React, { useState, useEffect } from "react";
import "./vidquiz.css";

const sampleWords = [
  {
    word: "SAFETY",
    description: "The right to be safe from harm and abuse.."
  },
  {
    word: "VOICE",
    description:
      " The right to have a say in matters that affect you"
  },
  {
    word: "EDUCATION",
    description: "Right to go to school and learn new things."
  },
  {
    word: "FAMILY",
    description:
      "Right says that child should not be separated from their parents, except when it's for their own good."
  },
  {
    word: "NAME",
    description:
      " Every child has the right to a __________ and nationality.."
  },
  {
    word: "PLAY",
    description:
      "The right to have fun and relax."
  }
];

const getRandomWord = () => {
  const randomPlace = Math.floor(Math.random() * sampleWords.length);
  return sampleWords[randomPlace];
};

const Videoquiz = () => {
  const [wordData, setWordData] = useState(getRandomWord());
  const [msg, setMsg] = useState("");
  const [chosenLetters, setChosenLetters] = useState([]);
  const [hints, setHints] = useState(3);
  const [displayWord, setDisplayWord] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [score, setScore] = useState(0); // New state for score

  useEffect(() => {
    if (wrongGuesses >= 3) {
      window.alert("Game Over! You made too many wrong guesses.");
      restartGameFunction();
    }
  }, [wrongGuesses]);

  const letterSelectFunction = (letter) => {
    if (!chosenLetters.includes(letter)) {
      setChosenLetters([...chosenLetters, letter]);
      if (!wordData.word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const hintFunction = () => {
    if (hints > 0) {
      const hiddenLetterIndex = wordData.word
        .split("")
        .findIndex((letter) => !chosenLetters.includes(letter));
      setChosenLetters([...chosenLetters, wordData.word[hiddenLetterIndex]]);
      setHints(hints - 1);
      setScore(score - 1); // Deduct 1 point for using a hint
    }
  };

  const restartGameFunction = () => {
    setWordData(getRandomWord());
    setMsg("");
    setChosenLetters([]);
    setHints(3);
    setDisplayWord(false);
    setWrongGuesses(0);
    setShowScoreCard(false);
    setScore(0); // Reset the score
  };

  const closeScoreCard = () => {
    setShowScoreCard(true);

  };

  const nextpagescorecard =()=>{
    setShowScoreCard(false);
    window.location.href = '/see';

  };

  const displayLettersFunction = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.from(letters).map((letter, index) => (
      <button
        key={index}
        onClick={() => letterSelectFunction(letter)}
        disabled={chosenLetters.includes(letter)}
        className={`letter-button1 ${
          chosenLetters.includes(letter) ? "selected" : ""
        }`}
      >
        {letter}
      </button>
    ));
  };

  const removeCharacterFunction = () => {
    setChosenLetters(chosenLetters.slice(0, -1));
  };

  const checkWordGuessedFunction = () => {
    return wordData.word
      .split("")
      .every((letter) => chosenLetters.includes(letter));
  };

  const guessFunction = () => {
    if (checkWordGuessedFunction()) {
      setMsg("Congo Kiddo! You have guessed the word correctly!");
      setScore(score + 5); // Add 5 points for a correct guess
      setShowScoreCard(true);
    } else {
      setMsg("You made a Wrong Guess Kiddo!. Try again!");
      setDisplayWord(true);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key.toUpperCase();

      if (/^[A-Z]$/.test(pressedKey)) {
        // Check if the pressed key is a letter
        letterSelectFunction(pressedKey);
      } else if (pressedKey === "Enter") {
        // Check if the pressed key is "Enter"
        event.preventDefault(); 
        guessFunction();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [chosenLetters, wordData.word]);

  return (
    <div className="container1">
      <h1 className="vq1">Word Guess Game</h1>
      <p className="word-description">Hint: {wordData.description}</p>
      <div className="word-container1">
        {Array.from(wordData.word).map((letter, index) => (
          <div
            key={index}
            className={`letter ${
              chosenLetters.includes(letter) ? "visible" : ""
            }`}
          >
            {chosenLetters.includes(letter) ? letter : ""}
          </div>
        ))}
      </div>
      {msg && (
        <div className="message">
          <p className={checkWordGuessedFunction() ? "green-text" : ""}>
            {msg}
          </p>
          {displayWord && (
            <p className="blue-text">Correct word was: {wordData.word}</p>
          )}
        </div>
      )}
      {showScoreCard && (
        <div className="score-card">
          <p>Score Card</p>
          <p>Score: {score}</p>
          <button onClick={closeScoreCard}>Close</button>
          <button onClick={nextpagescorecard}>Next</button>
        </div>
      )}
      <div className="button-section1">
        <div className="guess-section">
          <button
            onClick={removeCharacterFunction}
            disabled={!chosenLetters.length}
            className="remove-button1"
          >
            Remove Letter
          </button>
        </div>
        <div className="letter-selection">{displayLettersFunction()}</div>
        <div className="hints">
          Hints Remaining: {hints}{" "}
          <button
            onClick={hintFunction}
            disabled={hints === 0}
            className="hint-button1"
          >
            Get Hint
          </button>
        </div>
        {!msg && (
          <button
            onClick={guessFunction}
            disabled={!chosenLetters.length}
            className="guess-button1"
          >
            Guess
          </button>
        )}
      </div>
    </div>
  );
};
export default Videoquiz;