// Choose random number | Done!
// User inputs number and click on go button | Done!
// If number is correct, show "You are correct!"
// If number is < user number, show "Down!"
// If number is > user number, show "Up!"
// Reset button to reset
// User have 5 chances. Disable button.
// User have 1-100 range, let him know. No decrement in chances
// User input the same number again, let him know. NO decrement in chances 

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", play)
resetButton.addEventListener("click", Reset)

function pickRandomNumber() {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("Your number is ", computerNum);
}

function play() {
    let userValue = userInput.value;
    if(userValue < computerNum) {
        resultArea.textContent = "Up!";
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!";
    } else {
        resultArea.textContent = "You are correct!";
    }
}


function Reset() {
   // Cleans up user input
   // New number generated
   userInput.value = "";
   pickRandomNumber();
   resultArea.textContent = "Result here";
}
pickRandomNumber();

