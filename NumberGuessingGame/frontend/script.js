window.onload = function() {
    // Start the game
    startGame();

    // Add event listener for the new game button
    const newGameButton = document.getElementById("newGameButton");
    newGameButton.addEventListener("click", startGame)

    // Add event listener for the guessing form
    const guessForm = document.getElementById("guessForm");
    guessForm.addEventListener("submit", submit);
}

function submit(event) {
    event.preventDefault();

    // Evaluate the player's guess
    const guess = document.getElementById("guess").value;
    const result = handleGuess(guess);

    // Display the result message
    const resultText = document.getElementById("result");
    resultText.textContent = result;
}

let game;

function startGame() {
    // Reset old game
    document.getElementById("guessForm").reset();
    document.getElementById("min").textContent = 0;
    document.getElementById("max").textContent = 100;
    document.getElementById("counter").textContent = 0;
    document.getElementById("result").textContent = "";

    // Start new game
    game = startNewGame();
    console.log(game);
}

function startNewGame() {
    // Helpful text for the player
    const minText = document.getElementById("min");
    const maxText = document.getElementById("max");
    const count = document.getElementById("counter");

    return {
        answer: Math.floor(Math.random() * 100) + 1,
        min: 0,
        max: 100,
        count: 0,
        checkGuess(guess) {
            // Increment the count
            this.count += 1;
            count.textContent = this.count;

            // If the guess was too small
            if(guess < this.answer) {
                // Update the minimum
                this.min = guess;
                // Update the displayed range
                minText.textContent = this.min+1;
                return "Your guess was too small";
            }
            // If the guess was too big
            else if(guess > this.answer) {
                // Update the maximum
                this.max = guess;
                // Update the displayed range
                maxText.textContent = this.max-1;
                return "Your guess was too big";
            }
            // If the guess was correct
            return "Correct!";
        }
    }
}

function handleGuess(val) {
    const guess = Number(val);

    // Prevent too big or small guesses
    if(isNaN(guess) || guess >= game.max || guess <= game.min) {
        return "Out of range / Not allowed";
    }
    return game.checkGuess(guess);
}