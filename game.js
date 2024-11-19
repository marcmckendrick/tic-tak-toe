let currentPlayer = 'X';

function board() {
    const rows = 3;
    const columns = 3;
    const board = []; 

    for (let i = 0; i < rows; i++) {
        board[i] = []; 
        for (let j = 0; j < columns; j++) {
            board[i].push("");
        }
    }

    return board;
}

let myBoard = board();

function updateCell(row, col) {

    console.log("Current board state: ", myBoard);

    if (myBoard[row][col] === "") {
        myBoard[row][col] = currentPlayer;
        
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        console.log(cell)

        if (cell) {
            cell.textContent = currentPlayer; 
            console.log(`Cell at (${row}, ${col}) updated with: ${currentPlayer}`);
        } else {
            console.error(`Cell not found in DOM for row: ${row}, col: ${col}`);
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
        console.log(`Cell at (${row}, ${col}) is already filled.`);
    }
}

document.querySelectorAll(".cell").forEach(cell =>{
    cell.addEventListener('click', (e) => {
        const row = e.target.dataset.row;
        const col = e.target.dataset.col;
        console.log("Clicked cell 2")
        console.log("Row: " + row + ", Col: " + col)
        updateCell(row, col);
    });
});

function resetGame() {
    myBoard = board();
    console.log("Current board state after reset: ", myBoard);
    
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = ""); 

    console.log("clicked reset") 
}    

document.querySelector(".new-game-btn").addEventListener("click", resetGame);
