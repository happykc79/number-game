// Choose random number 
// User inputs number and click on go button 
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
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[]


playButton.addEventListener("click", play)
resetButton.addEventListener("click", Reset)
userInput.addEventListener("focus", function() {
    userInput.value="";
});

function pickRandomNumber() {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("Your number is ", computerNum);
}

function play() {

    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "Please enter a number between 1-100";
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "You have already entered this number";
        return;
    }

    chances --;
    chanceArea.textContent = "Remaining Chances: " + `${chances}`;
    console.log("chance", chances);

   
    if (userValue < computerNum) {
        resultArea.textContent = "Up!";
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!";
    } else {
        resultArea.textContent = "You are correct!";
        gameOver = true;
    }

    history.push(userValue) 
        console.log(history);
    

    if(chances < 1) {
        gameOver = true;
    
    }

    if (gameOver == true) {
        playButton.disabled = true;
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

