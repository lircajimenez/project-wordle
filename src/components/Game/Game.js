import React, { useState } from "react";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessItems, setGuessItems] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleGuessItems = (guess) => {
    // const newGuess = {
    //   id: crypto.randomUUID(),
    //   word: guess,
    // };

    const nextGuess = [...guessItems, guess];
    setGuessItems(nextGuess);

    // Simpler solution to set gameStatus:
    //   if (guess.toUpperCase() === answer) {
    //     setGameStatus("won")
    //   } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
    //     setGameStatus("lost")
    //   }
  };

  const handleGameStatus = (checkWord) => {
    if (!checkWord) return;

    const allCorrect = checkWord.every((item) => item.status === "correct");
    const someIncorrect = checkWord.some((item) => item.status === ("incorrect" || "misplaced"));

    if (guessItems.length <= NUM_OF_GUESSES_ALLOWED && allCorrect) {
      setGameStatus("won");
    } else if (guessItems.length === NUM_OF_GUESSES_ALLOWED && someIncorrect) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guessItems={guessItems} answer={answer} setStatus={handleGameStatus} />
      <GuessInput handleGuessItems={handleGuessItems} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner attempts={guessItems.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
