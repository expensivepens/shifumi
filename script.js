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
                }, 2000)
            })
            setTimeout(()=>{
                animateComputerChoice(getComputerChoice());
                //update score
                //display message

            }, 700)
        }
    })
})

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100);
    computerChoice = randomNumber > 66? "scissors" : randomNumber <= 33 ? "rock" : "paper";
    return computerChoice;
}

//MUST BE A MORE EFFICIENT WAY TO DO THIS
function animateComputerChoice(result){
    if (result === "rock"){
        document.querySelector(".computer-img-rock").classList.add("computer-img-rock-animate");
        document.querySelector(".computer-span-rock").classList.add("computer-span-rock-animate");
        setTimeout(()=>{
            document.querySelector(".computer-img-rock").classList.remove("computer-img-rock-animate");
            document.querySelector(".computer-span-rock").classList.remove("computer-span-rock-animate");
        }, 1300)
    } else if (result === "paper"){
        document.querySelector(".computer-img-paper").classList.add("computer-img-paper-animate");
        document.querySelector(".computer-span-paper").classList.add("computer-span-paper-animate");
        setTimeout(()=>{
            document.querySelector(".computer-img-paper").classList.remove("computer-img-paper-animate");
            document.querySelector(".computer-span-paper").classList.remove("computer-span-paper-animate");
        }, 1300)
    } else {
        document.querySelector(".computer-img-scissors").classList.add("computer-img-scissors-animate");
        document.querySelector(".computer-span-scissors").classList.add("computer-span-scissors-animate");
        setTimeout(()=>{
            document.querySelector(".computer-img-scissors").classList.remove("computer-img-scissors-animate");
            document.querySelector(".computer-span-scissors").classList.remove("computer-span-scissors-animate");
        }, 1300)
    }
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
