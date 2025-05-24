import React from "react";

function GuessResults({ guessItems }) {
  return (
    <div className="guess-results">
      {guessItems.map((item, index) => (
        <p className="guess" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
