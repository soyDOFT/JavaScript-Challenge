//store user score
let userScore = 0;
let oppScore = 0;
const grid = [0, 0, 0,
              0, 0, 0,
              0, 0, 0,]
// array conversion
const conversion = {
    0: "-1-1",
    1: "-1-2",
    2: "-1-3",
    3: "-2-1",
    4: "-2-2",
    5: "-2-3",
    6: "-3-1",
    7: "-3-2",
    8: "-3-3",
}
//get document elements
const square1x1 = document.getElementById("choice-1-1");
const square1x2 = document.getElementById("choice-1-2");
const square1x3 = document.getElementById("choice-1-3");
const square2x1 = document.getElementById("choice-2-1");
const square2x2 = document.getElementById("choice-2-2");
const square2x3 = document.getElementById("choice-2-3");
const square3x1 = document.getElementById("choice-3-1");
const square3x2 = document.getElementById("choice-3-2");
const square3x3 = document.getElementById("choice-3-3");

square1x1.addEventListener('click', () => game(0));
square1x2.addEventListener('click', () => game(1));
square1x3.addEventListener('click', () => game(2));
square2x1.addEventListener('click', () => game(3));
square2x2.addEventListener('click', () => game(4));
square2x3.addEventListener('click', () => game(5));
square3x1.addEventListener('click', () => game(6));
square3x2.addEventListener('click', () => game(7));
square3x3.addEventListener('click', () => game(8));

function game(index) {

    //validate input
    if (grid[index] === 0) {
         // change grid array to reflect new move
        placeX(index);

        //computer randomly selects a tictactoe box number
        //validate cpu turn
        let random = 0;
        do {
            random = Math.floor(Math.random() * grid.length);
        } while (grid[random] !== 0)
        placeO(random);

    } else {
        displayResult("SPOT TAKEN!");
        setTimeout(() => clearResult(), 1000);
    }

    
}

function displayResult(status) {
    //display result of the round
    const resultStatement = document.querySelector("#result-statement");
    const resultPopup = document.querySelector("#result-popup");
    resultStatement.innerHTML = status;
    resultPopup.style.display = "flex";

}

//place X on board
function placeX(index) {
    const square = document.getElementById("choice" + conversion[index]);
    console.log("choice" + conversion[index]);
    square.innerHTML = "X";
    grid[index] = 1;
    checkWin(index);
    checkTie();
}

//place O on board
function placeO(random) {
    const square = document.getElementById("choice" + conversion[random]);
    console.log("choice" + conversion[random]);
    square.innerHTML = 0;
    grid[random] = -1;
    checkLose(random);
}

//check if won game
function checkWin(index) {
    switch (index) {
        case 0: {
            const grid0 = grid[0];

            if (grid0 === -1 || grid0 === 0) {
                break;
            } else if (grid0 === grid[1] && grid0 === grid[2]) {
                win();
            } else if (grid0 === grid[3] && grid0 === grid[6]) {
                win();
            } else if (grid0 === grid[4] && grid0 === grid[8]) {
                win();
            }
            break;
        }
        case 1: {
            const grid1 = grid[1];
            if (grid1 === -1 || grid1 && grid1 === 0) {
                break;
            } else if (grid1 === grid[0] && grid1 === grid[2]) {
                win();
            } else if (grid1 === grid[4] && grid1 === grid[7]) {
                win();
            }
            break;
        }
        case 2: {
            const grid2 = grid[2];
            if (grid2 === -1 || grid2 === 0) {
                break;
            } else if (grid2 === grid[1] && grid2 === grid[0]) {
                win();
            } else if (grid2 === grid[5] && grid2 === grid[8]) {
                win();
            } else if (grid2 === grid[4] && grid2 === grid[6]) {
                win();
            }
            break;
        }
        case 3: {
            const grid3 = grid[3];
            if (grid3 === -1 || grid3 === 0) {
                break;
            } else if (grid3 === grid[4] && grid3 === grid[5]) {
                win();
            } else if (grid3 === grid[0] && grid3 === grid[6]) {
                win();
            }
            break;
        }
        case 4: {
            const grid4 = grid[4];
            if (grid4 === -1 || grid4 === 0) {
                break;
            } else if (grid4 === grid[3] && grid4 === grid[5]) {
                win();
            } else if (grid4 === grid[1] && grid4 === grid[7]) {
                win();
            } else if (grid4 === grid[0] && grid4 === grid[8]) {
                win();
            } else if (grid4 === grid[2] && grid4 === grid[6]) {
                win();
            }  
            break;
        }
        case 5: {
            const grid5 = grid[5];
            if (grid5 === -1 || grid5 === 0) {
                break;
            } else if (grid5 === grid[4] && grid5 === grid[3]) {
                win();
            } else if (grid5 === grid[8] && grid5 === grid[2]) {
                    win();
            }
            break;
        }
        case 6: {
            const grid6 = grid[6];
            if (grid6 === -1 || grid6 === 0) {
                break;
            } else if (grid6 === grid[7] && grid6 === grid[8]) {
                win();
            } else if (grid6 === grid[0] && grid6 === grid[3]) {
                    win();
            } else if (grid6 === grid[4] && grid6 === grid[2]) {
                    win();
            }
            break;
        }
        case 7: {
            const grid7 = grid[7];
            if (grid7 === -1 || grid7 === 0) {
                break;
            } else if (grid7 === grid[6] && grid7 === grid[8]) {
                win();
            } else if (grid7 === grid[4] && grid7 === grid[1]) {
                    win();
            }
            break;
        }
        case 8: {
            const grid8 = grid[8];
            if (grid8 === -1 || grid8 === 0) {
                break;
            } else if (grid8 === grid[7] && grid8 === grid[6]) {
                win();
            } else if (grid8 === grid[5] && grid8 === grid[2]) {
                win();
            } else if (grid8 === grid[4] && grid8=== grid[0]) {
                win();
            }
            break;
        }
    }
}

//check if cpu won
function checkLose(random) {
    switch (random) {
        case 0: {
            const grid0 = grid[0];

            if (grid0 === 1 || grid0 === 0) {
                break;
            } else if (grid0 === grid[1] && grid0 === grid[2]) {
                lose();
            } else if (grid0 === grid[3] && grid0 === grid[6]) {
                lose();
            } else if (grid0 === grid[4] && grid0 === grid[8]) {
                lose();
            }
            break;
        }
        case 1: {
            const grid1 = grid[1];
            if (grid1 === 1 || grid1 && grid1 === 0) {
                break;
            } else if (grid1 === grid[0] && grid1 === grid[2]) {
                lose();
            } else if (grid1 === grid[4] && grid1 === grid[7]) {
                lose();
            }
            break;
        }
        case 2: {
            const grid2 = grid[2];
            if (grid2 === 1 || grid2 === 0) {
                break;
            } else if (grid2 === grid[1] && grid2 === grid[0]) {
                lose();
            } else if (grid2 === grid[5] && grid2 === grid[8]) {
                lose();
            } else if (grid2 === grid[4] && grid2 === grid[6]) {
                lose();
            }
            break;
        }
        case 3: {
            const grid3 = grid[3];
            if (grid3 === 1 || grid3 === 0) {
                break;
            } else if (grid3 === grid[4] && grid3 === grid[5]) {
                lose();
            } else if (grid3 === grid[0] && grid3 === grid[6]) {
                lose();
            }
            break;
        }
        case 4: {
            const grid4 = grid[4];
            if (grid4 === 1 || grid4 === 0) {
                break;
            } else if (grid4 === grid[3] && grid4 === grid[5]) {
                lose();
            } else if (grid4 === grid[1] && grid4 === grid[7]) {
                lose();
            } else if (grid4 === grid[0] && grid4 === grid[8]) {
                lose();
            } else if (grid4 === grid[2] && grid4 === grid[6]) {
                lose();
            }  
            break;
        }
        case 5: {
            const grid5 = grid[5];
            if (grid5 === 1 || grid5 === 0) {
                break;
            } else if (grid5 === grid[4] && grid5 === grid[3]) {
                lose();
            } else if (grid5 === grid[8] && grid5 === grid[2]) {
                lose();
            }
            break;
        }
        case 6: {
            const grid6 = grid[6];
            if (grid6 === 1 || grid6 === 0) {
                break;
            } else if (grid6 === grid[7] && grid6 === grid[8]) {
                lose();
            } else if (grid6 === grid[0] && grid6 === grid[3]) {
                lose();
            } else if (grid6 === grid[4] && grid6 === grid[2]) {
                lose();
            }
            break;
        }
        case 7: {
            const grid7 = grid[7];
            if (grid7 === 1 || grid7 === 0) {
                break;
            } else if (grid7 === grid[6] && grid7 === grid[8]) {
                lose();
            } else if (grid7 === grid[4] && grid7 === grid[1]) {
                lose();
            }
            break;
        }
        case 8: {
            const grid8 = grid[8];
            if (grid8 === 1 || grid8 === 0) {
                break;
            } else if (grid8 === grid[7] && grid8 === grid[6]) {
                lose();
            } else if (grid8 === grid[5] && grid8 === grid[2]) {
                lose();
            } else if (grid8 === grid[4] && grid8=== grid[0]) {
                lose();
            }
            break;
        }
    }
}

function checkTie() {
    if (!grid.includes(0)) {
        displayResult("YOU TIED!!");
        setTimeout(() => removePopup, 1000);
        setTimeout(() => restart(), 2000);
    }
    
}

function win() {
    //Display result and clear after 1 sec
    displayResult("YOU WIN!");
    setTimeout(() => clearResult(), 1000);
    setTimeout(() => restart(), 2000);

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
    setTimeout(() => restart(), 2000);

    //increment opponent score
    oppScore++;
    oppScoreDisplay.innerHTML = oppScore;
    scoreStatus();
}

function clearResult() {
    const resultPopup = document.querySelector("#result-popup");
    resultPopup.style.display = "none";
}

function restart() {
    //clear cpu choice background color
    square1x1.innerHTML = "";
    square1x2.innerHTML = "";
    square1x3.innerHTML = "";
    square2x1.innerHTML = "";
    square2x2.innerHTML = "";
    square2x3.innerHTML = "";
    square3x1.innerHTML = "";
    square3x2.innerHTML = "";
    square3x3.innerHTML = "";
    grid.fill(0);
}