
import React, { useState, useEffect } from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';
import { minimax } from '../utils/minimax';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    if (!xIsNext) {
      const bestMove = minimax(squares, false).index;
      squares[bestMove] = 'O';
      setTimeout(() => {
        setSquares([...squares]);
        setXIsNext(true);
      }, 500);
    }
  }, [xIsNext, squares]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = 'X';
    setSquares([...squares]);
    setXIsNext(false);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
