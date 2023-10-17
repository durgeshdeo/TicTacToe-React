import React, { useState } from "react";

import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));

  const [isXTurn, setIsXTurn] = useState(true);

  const winner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of win) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  const isWinner = winner();

  const trackClicked = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="container">
      {isWinner ? (
        <>
          {isWinner} won the game
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <div className="row">
            <Square onClick={() => trackClicked(0)} value={state[0]} />
            <Square onClick={() => trackClicked(1)} value={state[1]} />
            <Square onClick={() => trackClicked(2)} value={state[2]} />
          </div>
          <div className="row">
            <Square onClick={() => trackClicked(3)} value={state[3]} />
            <Square onClick={() => trackClicked(4)} value={state[4]} />
            <Square onClick={() => trackClicked(5)} value={state[5]} />
          </div>
          <div className="row">
            <Square onClick={() => trackClicked(6)} value={state[6]} />
            <Square onClick={() => trackClicked(7)} value={state[7]} />
            <Square onClick={() => trackClicked(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
