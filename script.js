// Generate a random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 5; // Maximum attempts
let minRange = 1; // Minimum number in the range
let maxRange = 50; // Maximum number in the range

// Get elements from the DOM
const guessInput = document.getElementById("guess-input");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");

// Function to handle the guess
submitButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value); // Convert input to a number

    // Validate the user's input
    if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
        feedback.textContent = `Please enter a valid number between ${minRange} and ${maxRange}.`;
        return;
    }

    attempts--; // Decrease the number of attempts

    // Check the guess
    if (userGuess === randomNumber) {
        feedback.textContent = `🎉 Correct! The number was ${randomNumber}. You guessed it with ${5 - attempts} attempts left.`;
        endGame(true);
    } else if (userGuess < randomNumber) {
        feedback.textContent = `Too low! Try again.`;
        minRange = Math.max(minRange, userGuess + 1); // Narrow the range upwards
    } else {
        feedback.textContent = `Too high! Try again.`;
        maxRange = Math.min(maxRange, userGuess - 1); // Narrow the range downwards
    }

    // Update the feedback message for remaining attempts
    feedback.textContent += ` You have ${attempts} attempt(s) left. Range: ${minRange}-${maxRange}.`;

    // Check if the user is out of attempts
    if (attempts === 0 && userGuess !== randomNumber) {
        feedback.textContent = `😢 Game over! The number was ${randomNumber}. Better luck next time!`;
        endGame(false);
    }
});

// Function to end the game
function endGame(won) {
    submitButton.disabled = true; // Disable the guess button
    restartButton.style.display = "inline-block"; // Show the restart button
    guessInput.disabled = true; // Disable input to prevent further guesses
}

// Restart the game
restartButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 50) + 1; // Generate a new random number
    attempts = 5; // Reset attempts
    minRange = 1; // Reset range
    maxRange = 50;
    feedback.textContent = ""; // Clear feedback
    guessInput.value = ""; // Clear input
    submitButton.disabled = false; // Re-enable the guess button
    guessInput.disabled = false; // Re-enable input
    restartButton.style.display = "none"; // Hide the restart button
});
// Generate falling snowflakes
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Snowflake character

    // Randomize initial position and animation duration
    snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duration between 2-5s
    snowflake.style.opacity = Math.random(); // Random opacity

    document.querySelector(".snow-container").appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Matches the max animation duration
}

// Create snowflakes at regular intervals
setInterval(createSnowflake, 100);
