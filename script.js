let userScore = 0;
let oppScore = 0;

const choices = ['rock', 'paper', 'scissors']

const enterBtn = document.querySelector(".enter-button");
const inputBox = document.querySelector("#user-input");
const selfScore = document.querySelector(".score--self");

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
    const random = Math.floor(Math.random() * choices.length);
    console.log(random);
    let oppChoice = choices[random];

    switch (input){
        case 'rock':
            console.log("Here");
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
        default:

    }
}

function win() {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    console.log("Here2");

}

function lose() {
    oppScore++;
    oppScoreDisplay.innerHTML = oppScore;
    console.log("Here3");
}

function tie() {
    console.log("Here4");
}