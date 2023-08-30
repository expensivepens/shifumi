"use strict"

//DOM VARIABLES
let playerButtons = document.querySelectorAll(".player-button"); 

let playerChoice;
let computerChoice;
let draw;
let buttonClickable = true;

playerButtons.forEach((button)=>{
    button.addEventListener(("click"), ()=>{
        if (buttonClickable){
            buttonClickable = false;
            playerButtons.forEach((buttonz)=>{
                buttonz.classList.remove("button-clickable");
                setTimeout(()=>{
                    buttonClickable = true;
                    buttonz.classList.add("button-clickable");
                    console.log("it's been a second")
                }, 1500)
            })
        }
    })
})

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100);
    computerChoice = randomNumber > 66? "scissors" : randomNumber <= 33 ? "rock" : "paper";
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoiceRegEx = /^rock$|^paper$|^scissors$/i; 
    playerChoice = null;
    while (!playerChoiceRegEx.test(playerChoice)){
        playerChoice = prompt("?");
    } 
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playOneRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice){
        draw = true;
        return true;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        draw = false;
        return true;
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        draw = false;
        return true;
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        draw = false;
        return true;
    } else {
        draw = false;
        return false;
    }
};

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let a = 0; a < 5; a++){
        if (playOneRound(getComputerChoice(), getPlayerChoice())){
            if (draw){
                console.log("Draw")
            } else {
                console.log("You win! " + `${playerChoice} beats ${computerChoice}!`)
                playerScore ++;
            }
        } else {
            console.log("You lose! " + `${computerChoice} beats ${playerChoice}!`)
            computerScore ++;
        }
    }
    if (playerScore == computerScore){
        console.log("It's a draw!");
    } else if (playerScore > computerScore){
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}
