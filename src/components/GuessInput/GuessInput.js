import React, { useState } from "react";

function GuessInput({ handleGuessItems, gameStatus }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.info({ guess });
    handleGuessItems(guess);

    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="^[a-zA-Z]{5}$"
        title="Please enter exactly 5 letters (A–Z only)."
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
