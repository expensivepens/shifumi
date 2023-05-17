"use strict"

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerChoice = randomNumber > 66? "scissors" : randomNumber <= 33 ? "rock" : "paper";
    return computerChoice;
}