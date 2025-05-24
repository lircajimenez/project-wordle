import React, { useState } from "react";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessItems, setGuessItems] = useState([]);

  const handleGuessItems = (guess) => {
    // const newGuess = {
    //   id: crypto.randomUUID(),
    //   word: guess,
    // };

    const nextGuess = [...guessItems, guess];
    setGuessItems(nextGuess);
  };

  console.info(guessItems);

  return (
    <>
      <GuessResults guessItems={guessItems} />
      <GuessInput handleGuessItems={handleGuessItems} />
    </>
  );
}

export default Game;
