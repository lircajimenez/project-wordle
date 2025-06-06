import React, { useEffect } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ word, answer, setStatus }) {
  const checkWord = checkGuess(word, answer);

  useEffect(() => {
    setStatus(checkWord);
  }, [checkWord, setStatus]);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkWord ? checkWord[num].letter : undefined}
          status={checkWord ? checkWord[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
