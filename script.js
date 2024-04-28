//initialize user and opp score
let userScore = 0;
let oppScore = 0;

//store choices
const choices = ['rock', 'paper', 'scissors']

//get elements for input, button, and score
const enterBtn = document.querySelector(".enter-button");
const inputBox = document.querySelector("#user-input");
const selfScore = document.querySelector(".score--self");

//get elements for rock paper and scissors
const rockChoice = document.querySelector("#choice--rock");
const paperChoice = document.querySelector("#choice--paper");
const scissorsChoice = document.querySelector("#choice--scissors");

const userScoreDisplay = document.querySelector("#displayed-userscore");
const oppScoreDisplay = document.querySelector("#displayed-oppscore");

enterBtn.addEventListener('click', () => game(inputBox.value.toLowerCase()));
rockChoice.addEventListener('click', () => game('rock'))
paperChoice.addEventListener('click', () => game('paper'))
scissorsChoice.addEventListener('click', () => game('scissors'))

function game(input) {
    //Generate random input for the computer
    const random = Math.floor(Math.random() * choices.length);
    let oppChoice = choices[random];

    //Find result based on user input and randomly-generated computer input
    switch (input){
        case 'rock':
            if (oppChoice === 'scissors') {win()}
                else if (oppChoice === 'paper') {lose()}
                    else {tie()}
            break;
        case 'paper':
            if (oppChoice === 'rock') {win()}
                else if (oppChoice === 'scissors') {lose()}
                    else {tie()}
            break;
        case 'scissors':
            if (oppChoice === 'paper') {win()}
                else if (oppChoice === 'rock') {lose()}
                    else {tie()}
            break;
        case 'restart':
        case 'reset':
        case 'quit':
        case 'clear':
        case 'stop':
            displayResult("RESETING GAME");
            setTimeout(() => window.location.reload(), 1200);
            break;
        case 'tictactoe':
            window.location.href = "tictactoe.html";
            break;
        default:
            displayResult("UNKNOWN COMMAND");
            setTimeout(clearResult, 1200);
            break;
    }

    //show computer choice
    displayComputerChoice(oppChoice);
}

function displayComputerChoice(cpuChoice) {
    //change backgrouind color of image that cpu chooses
    const cpuChoiceImage = document.querySelector("#choice--cpu--" + cpuChoice);
    console.log.apply("choice--cpu--" + cpuChoice)
    cpuChoiceImage.style.backgroundColor = 'red';
}

function win() {
    //Display result and clear after 1 sec
    displayResult("YOU WIN!");
    setTimeout(() => clearResult(), 1000)

    //increment user score
    userScore++;
    //display new score
    userScoreDisplay.innerHTML = userScore;

    scoreStatus();
}

function lose() {
    //Display result and clear after 1 sec
    displayResult("YOU LOSE!");
    setTimeout(() => clearResult(), 1000);

    //increment score
    oppScore++;
    oppScoreDisplay.innerHTML = oppScore;
    scoreStatus();
}

function tie() {
    //display tie statement
    displayResult("YOU TIED!");
    setTimeout(() => clearResult(), 1000);

    scoreStatus();
}

function scoreStatus() {
    //change score colors based on who is winning
    if (userScore > oppScore) {
        userScoreDisplay.style.color = 'green';
        oppScoreDisplay.style.color = 'black';
    } else if (userScore < oppScore) {
        userScoreDisplay.style.color = 'black';
        oppScoreDisplay.style.color = 'red';
    } else {
        userScoreDisplay.style.color = 'black';
        oppScoreDisplay.style.color = 'black';
    }
}

function displayResult(status) {
    //display result of the round
    const resultStatement = document.querySelector("#result-statement");
    const resultPopup = document.querySelector("#result-popup");
    resultStatement.innerHTML = status;
    resultPopup.style.display = "flex";
}

function clearResult() {
    //clear cpu choice background color
    const cpuRockChoiceImage = document.querySelector("#choice--cpu--rock");
    const cpuPaperChoiceImage = document.querySelector("#choice--cpu--paper");
    const cpuScissorsChoiceImage = document.querySelector("#choice--cpu--scissors");
    cpuRockChoiceImage.style.backgroundColor = 'white';
    cpuPaperChoiceImage.style.backgroundColor = 'white';
    cpuScissorsChoiceImage.style.backgroundColor = 'white';
    //clear popup
    const resultPopup = document.querySelector("#result-popup");
    resultPopup.style.display = "none";
}