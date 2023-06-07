import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    console.log(initialBoard)
    if (board[index] || winner) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = isXNext ? 'X' : 'O';
    setBoard(updatedBoard);
    setIsXNext(!isXNext);

    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }

    if (updatedBoard.indexOf(null) === -1 && !winner) {
      setWinner('draw');
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => {
    
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  let status;
  if (winner) {
    if (winner === 'draw') {
      status = "It's a draw!";
    } else {
      status = `Player ${winner} wins!`;
    }
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <div className="board">
        {board.map((_, index) => (
          renderSquare(index)
        ))}
      </div>
      <div className="status">{status}</div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default App;
