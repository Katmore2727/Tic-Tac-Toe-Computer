
// import { calculateWinner } from './CalculateWinner';

// export function minimax(newSquares, isMaximizing) {
//   const winner = calculateWinner(newSquares);

//   if (winner === 'X') {
//     return { score: -10 };
//   } else if (winner === 'O') {
//     return { score: 10 };
//   } else if (newSquares.every(square => square !== null)) {
//     return { score: 0 };
//   }

//   const scores = [];
//   const moves = [];

//   newSquares.forEach((square, index) => {
//     if (square === null) {
//       const newBoard = [...newSquares];
//       newBoard[index] = isMaximizing ? 'O' : 'X';

//       const result = minimax(newBoard, !isMaximizing);
//       scores.push(result.score);
//       moves.push(index);
//     }
//   });

//   let bestMove;
//   if (isMaximizing) {
//     const maxScore = Math.max(...scores);
//     bestMove = moves[scores.indexOf(maxScore)];
//     return { index: bestMove, score: maxScore };
//   } else {
//     const minScore = Math.min(...scores);
//     bestMove = moves[scores.indexOf(minScore)];
//     return { index: bestMove, score: minScore };
//   }
// }


import { calculateWinner } from './CalculateWinner';

export function minimax(newSquares, isMaximizing) {
  const winner = calculateWinner(newSquares);

  if (winner === 'X') {
    return { score: 10 };  // Computer is X, so winning is positive
  } else if (winner === 'O') {
    return { score: -10 }; // User is O, so losing is negative
  } else if (newSquares.every(square => square !== null)) {
    return { score: 0 }; // Draw is neutral
  }

  const scores = [];
  const moves = [];

  newSquares.forEach((square, index) => {
    if (square === null) {
      const newBoard = [...newSquares];
      newBoard[index] = isMaximizing ? 'X' : 'O';  // Computer plays as X

      const result = minimax(newBoard, !isMaximizing);
      scores.push(result.score);
      moves.push(index);
    }
  });

  let bestMove;
  if (isMaximizing) {
    const maxScore = Math.max(...scores);
    bestMove = moves[scores.indexOf(maxScore)];
    return { index: bestMove, score: maxScore };
  } else {
    const minScore = Math.min(...scores);
    bestMove = moves[scores.indexOf(minScore)];
    return { index: bestMove, score: minScore };
  }
}
