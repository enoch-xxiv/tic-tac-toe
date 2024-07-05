function Cell() {
    let value = 0;
  
    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
      value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
}

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
  
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const markBoard = (board, row, column, player) => {
        if (board[row][column] === "") {
            board[row][column].addToken(player)
        } else {
            return "This position is already taken.";
        }
    }

    const printBoard = () => {
        console.log(board)
    }

    return { getBoard, markBoard, printBoard }
}


