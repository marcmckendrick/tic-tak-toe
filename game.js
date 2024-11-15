let currentPlayer = 'X';

function Cell() {
    return ""; 
}

function board() {
    const rows = 3;
    const columns = 3;
    const board = []; 

    for (let i = 0; i < rows; i++) {
        board[i] = []; 
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    return board; // Return the completed board
}

const myBoard = board();

function updateCell(row, col) {
    // Only update if the cell is empty

    console.log("Current board state: ", myBoard);

    if (myBoard[row][col] === "") {
        // Set the cell to the current player's symbol
        myBoard[row][col] = currentPlayer;
        
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        console.log(cell)

        if (cell) {
            cell.textContent = currentPlayer;  // Display X or O in the cell
            console.log(`Cell at (${row}, ${col}) updated with: ${currentPlayer}`); // Debugging log
        } else {
            console.error(`Cell not found in DOM for row: ${row}, col: ${col}`);
        }

        // Switch the player after the move
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
    myBoard = board();  // Reset the board
    currentPlayer = "X";  // Set the first player to X
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");  // Clear the visual board
}

document.querySelector(".new-game-btn").addEventListener("click", resetGame);
