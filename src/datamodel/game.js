import { useState } from "react";

export default function gameLogic() {
  const [history, setHistory] = useState([Array(9).fill("")]);
  //initialize history with an array of arrays to easily keep
  //track of the sequence of the game state after each move

  const [currentMove, setCurrentMove] = useState(0);
  //used to keep track of the moves made starting with 0
  //0 cause first element of an array starts with 0

  const [currentPlayer, setCurrentPlayer] = useState("X");
  //used to keep track of which player is playing starting with 'X'

  const currentBoardState = history[currentMove]; //current state of the board based on the current move

  const handleChange = (index) => {
    const updatedBoardState = [...currentBoardState];
    //creates a shallow copy of currentBoardState to avoid mutability
    //this copy will be modified as the game updates

    updatedBoardState[index] = currentPlayer;
    //updates the copy of the current board state at the specified index with the current player

    const newHistory = history.slice(0, currentMove + 1);
    // create a new array without modifying the original history array, from index 0 up to the current move
    // +1 because slice second param is not inclusive

    newHistory.push(updatedBoardState);
    // this line adds the updatedBoardState to newHistory, reflects the state of the board after the current move

    setHistory(newHistory);
    setCurrentMove(currentMove + 1);
    //increments the currentMove

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    //this line makes sure alternating moves between players
  };

  const newGame = () => {
    setHistory([Array(9).fill("")]);
    setCurrentMove(0);
    setCurrentPlayer("X");
  };

  const previousMove = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const nextMove = () => {
    if (currentMove < history.length - 1) {
      setCurrentMove(currentMove + 1);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return {
    currentBoardState,
    history,
    handleChange,
    newGame,
    previousMove,
    nextMove,
    currentMove,
    currentPlayer
  };
}
