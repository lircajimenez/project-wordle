import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessItems, answer, setStatus }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} word={guessItems[num]} answer={answer} setStatus={setStatus} />
      ))}
    </div>
  );
}

export default GuessResults;
