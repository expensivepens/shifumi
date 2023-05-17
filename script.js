"use strict"

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100);
    return randomNumber > 66? "scissors" : randomNumber <= 33 ? "rock" : "paper";
}


function playOneRound(computerChoice, playerChoice){
    let victory;
    if (computerChoice == playerChoice){
        return "Draw"
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        victory = true;
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        victory = true;
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        victory = true;
    } else {
        victory = false;
    }

    if (victory === true){
        return "You win! " + `${playerChoice} beats ${computerChoice}!`
    } else {
        return "You lose! " + `${computerChoice} beats ${playerChoice}!`
    }
};
