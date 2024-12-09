// Function to create falling snowflakes dynamically
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Snowflake character

    // Set random initial position and animation duration
    const xPosition = Math.random() * window.innerWidth; 
    const animationDuration = Math.random() * 3 + 2; // Random speed range between 2s and 5s

    snowflake.style.left = `${xPosition}px`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    // Add snowflake to the DOM
    document.querySelector(".snow-container").appendChild(snowflake);

    // Remove snowflake after its animation finishes
    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000);
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 100);

// Logic for a simple game feedback demo
const submitButton = document.getElementById("submit-button");
const feedbackEl = document.getElementById("feedback");
let numberToGuess = Math.floor(Math.random() * 50) + 1; // Random number to guess between 1-50

submitButton.addEventListener("click", () => {
    const userGuess = parseInt(document.getElementById("guess-input").value, 10);

    if (!userGuess) {
        feedbackEl.textContent = "Please enter a valid number!";
        return;
    }

    if (userGuess === numberToGuess) {
        feedbackEl.textContent = `🎉 Correct! The number was ${numberToGuess}`;
    } else if (userGuess < numberToGuess) {
        feedbackEl.textContent = "Too low! Try again.";
    } else {
        feedbackEl.textContent = "Too high! Try again.";
    }
});
