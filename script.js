let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess-input");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");

submitButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (userGuess === randomNumber) {
        feedback.textContent = `🎉 Correct! You guessed the number in ${attempts} attempts.`;
        submitButton.style.display = "none";
        restartButton.style.display = "inline-block";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
    } else {
        feedback.textContent = "Too high! Try again.";
    }
});

restartButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = "";
    guessInput.value = "";
    submitButton.style.display = "inline-block";
    restartButton.style.display = "none";
});
