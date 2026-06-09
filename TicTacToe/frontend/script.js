const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let board;
let message;
let squares;
let resetbutton;
const players = ["X", "O"]
let currentPlayer = players[0];

window.onload = function() {
    board = document.getElementById("board");
    squares = document.getElementsByClassName("square");
    message = document.getElementById("message");
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", handleClick);
    }
    resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetGame);
}

function handleClick(event) {
    const square = event.target;

    // Is the square free?
    if(square.textContent !== "") {
        return;
    }
    // Mark the square
    square.textContent = currentPlayer;

    // Check for win condition
    if(checkWin(currentPlayer)) {
        message.textContent = "Player "+currentPlayer+" wins!";
        setTimeout(resetGame, 2000);
        return;
    }

    // Check for tie condition
    // If the latest move didn't result in a win, but the squares are all filled now, it's a tie
    if(checkTie()) {
        message.textContent = "It's a tie!";
        setTimeout(resetGame, 2000);
        return;
    }

    // Change turns
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    message.textContent = "Player "+currentPlayer+" 's turn!";
}

function checkWin(player) {
    for(const pattern of winCombinations) {
        const [a, b, c] = pattern;
        
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === "") {
            return false;
        }
    }
    return true;
}

function resetGame() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }

    currentPlayer = players[0];
    message.textContent = "Player " + currentPlayer + "'s turn!";
}