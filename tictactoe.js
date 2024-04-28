let userScore = 0;
let oppScore = 0;
const grid = [0, 0, 0,
              0, 0, 0,
              0, 0, 0,]
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
    } else {
        displayResult("SPOT TAKEN!");
    }

    //computer randomly selects a tictactoe box number
    //validate cpu turn
    let random = 0;
    let i = 0;
    do {
        random = Math.floor(Math.random() * grid.length);
        i++;
    } while (grid[random] !== 0 && i > 9)
    placeO(random);
    
}

function displayResult(status) {
    //display result of the round
    const resultStatement = document.querySelector("#result-statement");
    const resultPopup = document.querySelector("#result-popup");
    resultStatement.innerHTML = status;
    resultPopup.style.display = "flex";
}

function placeX(index) {
    const square = document.getElementById("choice" + conversion[index]);
    console.log("choice" + conversion[index]);
    square.innerHTML = "X";
    grid[index] = 1;
    checkWin(index);
}

function placeO(random) {
    const square = document.getElementById("choice" + conversion[random]);
    console.log("choice" + conversion[random]);
    square.innerHTML = 0;
    grid[random] = -1;
    checkWin(random);
}

function checkWin(index) {
    switch (index) {
        case 0:
            let grid_0 = grid[0];

            if (grid_0 === -1 || grid_0 === 1) {
                break;
            } else if (grid_0 === grid[1] && grid_0 === grid[2]) {
                win();
            } else if (grid_0 === grid[3] && grid_0 === grid[6]) {
                win();
            } else if (grid_0 === grid[4] && grid_0 === grid[8]) {
                win();
            }
            break;
        case 1:
            let grid_1 = grid[1];
            if (grid_1 === -1 || grid_1 && grid_1 === 1) {
                break;
            } else if (grid_1 === grid[0] && grid_1 === grid[2]) {
                win();
            } else if (grid_1 === grid[4] && grid_1 === grid[7]) {
                win();
            }
            break;
        case 2:
            if (grid[2] === -1 || grid[2] === 1) {
                break;
            } else if (grid[2] === grid[1] && grid[2] === grid[0]) {
                win();
            } else if (grid[2] === grid[5] && grid[2] === grid[8]) {
                win();
            } else if (grid[2] === grid[4] && grid[2] === grid[6]) {
                win();
            }
            break;
        case 3:
            if (grid[3] === -1 || grid[3] === 1) {
                break;
            } else if (grid[3] === grid[4] && grid[3] === grid[5]) {
                win();
            } else if (grid[3] === grid[0] && grid[3] === grid[6]) {
                win();
            }
            break;
        case 4:
            if (grid[4] === -1 || grid[4] === 1) {
                break;
            } else if (grid[4] === grid[3] && grid[4] === grid[5]) {
                win();
            } else if (grid[4] === grid[1] && grid[4] === grid[7]) {
                win();
            } else if (grid[4] === grid[0] && grid[4] === grid[8]) {
                win();
            } else if (grid[4] === grid[2] && grid[4] === grid[6]) {
                win();
            }  
            break;
        case 5:
            if (grid[5] === -1 || grid[5] === 1) {
                break;
            } else if (grid[5] === grid[4] && grid[5] === grid[3]) {
                win();
            } else if (grid[5] === grid[8] && grid[5] === grid[2]) {
                    win();
            }
            break;
        case 6:
            if (grid[6] === -1 || grid[6] === 1) {
                break;
            } else if (grid[6] === grid[7] && grid[6] === grid[8]) {
                win();
            } else if (grid[6] === grid[0] && grid[6] === grid[3]) {
                    win();
            } else if (grid[6] === grid[4] && grid[6] === grid[2]) {
                    win();
            }
            break;
        case 7:
            if (grid[7] === -1 || grid[7] === 1) {
                break;
            } else if (grid[7] === grid[6] && grid[7] === grid[7]) {
                win();
            } else if (grid[7] === grid[4] && grid[7] === grid[1]) {
                    win();
            }
            break;
        case 8:
            if (grid[8] === -1 || grid[8] === 1) {
                break;
            } else if (grid[8] === grid[7] && grid[8] === grid[6]) {
                win();
            } else if (grid[8] === grid[5] && grid[8] === grid[2]) {
                    win();
            } else if (grid[8] === grid[4] && grid[8]=== grid[1]) {
                    win();
            }
            break;
        
    }
}

function checkCPUWin(random) {
        switch (random) {
            case 0:
                let grid_0 = grid[0];
    
                if (grid_0 === -1 || grid_0 === 1) {
                    break;
                } else if (grid_0 === grid[1] && grid_0 === grid[2]) {
                    win();
                } else if (grid_0 === grid[3] && grid_0 === grid[6]) {
                    win();
                } else if (grid_0 === grid[4] && grid_0 === grid[8]) {
                    win();
                }
                break;
            case 1:
                let grid_1 = grid[1];
                if (grid_1 === -1 || grid_1 && grid_1 === 1) {
                    break;
                } else if (grid_1 === grid[0] && grid_1 === grid[2]) {
                    win();
                } else if (grid_1 === grid[4] && grid_1 === grid[7]) {
                    win();
                }
                break;
            case 2:
                if (grid[2] === -1 || grid[2] === 1) {
                    break;
                } else if (grid[2] === grid[1] && grid[2] === grid[0]) {
                    win();
                } else if (grid[2] === grid[5] && grid[2] === grid[8]) {
                    win();
                } else if (grid[2] === grid[4] && grid[2] === grid[6]) {
                    win();
                }
                break;
            case 3:
                if (grid[3] === -1 || grid[3] === 1) {
                    break;
                } else if (grid[3] === grid[4] && grid[3] === grid[5]) {
                    win();
                } else if (grid[3] === grid[0] && grid[3] === grid[6]) {
                    win();
                }
                break;
            case 4:
                if (grid[4] === -1 || grid[4] === 1) {
                    break;
                } else if (grid[4] === grid[3] && grid[4] === grid[5]) {
                    win();
                } else if (grid[4] === grid[1] && grid[4] === grid[7]) {
                    win();
                } else if (grid[4] === grid[0] && grid[4] === grid[8]) {
                    win();
                } else if (grid[4] === grid[2] && grid[4] === grid[6]) {
                    win();
                }  
                break;
            case 5:
                if (grid[5] === -1 || grid[5] === 1) {
                    break;
                } else if (grid[5] === grid[4] && grid[5] === grid[3]) {
                    win();
                } else if (grid[5] === grid[8] && grid[5] === grid[2]) {
                        win();
                }
                break;
            case 6:
                if (grid[6] === -1 || grid[6] === 1) {
                    break;
                } else if (grid[6] === grid[7] && grid[6] === grid[8]) {
                    win();
                } else if (grid[6] === grid[0] && grid[6] === grid[3]) {
                        win();
                } else if (grid[6] === grid[4] && grid[6] === grid[2]) {
                        win();
                }
                break;
            case 7:
                if (grid[7] === -1 || grid[7] === 1) {
                    break;
                } else if (grid[7] === grid[6] && grid[7] === grid[7]) {
                    win();
                } else if (grid[7] === grid[4] && grid[7] === grid[1]) {
                        win();
                }
                break;
            case 8:
                if (grid[8] === -1 || grid[8] === 1) {
                    break;
                } else if (grid[8] === grid[7] && grid[8] === grid[6]) {
                    win();
                } else if (grid[8] === grid[5] && grid[8] === grid[2]) {
                        win();
                } else if (grid[8] === grid[4] && grid[8] === grid[1]) {
                        win();
                }
                break;
            
        }
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

    oppScore++;
    oppScoreDisplay.innerHTML = oppScore;
    scoreStatus();
}

function clearResult() {
    //clear cpu choice background color
    square1x1.innerHTML = 0;
    square1x2.innerHTML = 0;
    square1x3.innerHTML = 0;
    square2x1.innerHTML = 0;
    square2x2.innerHTML = 0;
    square2x3.innerHTML = 0;
    square3x1.innerHTML = 0;
    square3x2.innerHTML = 0;
    square3x3.innerHTML = 0;
    grid.fill(0);
    //clear popup
    const resultPopup = document.querySelector("#result-popup");
    resultPopup.style.display = "none";
}