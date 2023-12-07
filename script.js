"use strict"

//DOM VARIABLES
let playerButtons = document.querySelectorAll(".player-button"); 
let playerButtonRock = document.querySelector(".player-rock-container");
let playerButtonPaper = document.querySelector(".player-paper-container");
let playerButtonScissors = document.querySelector(".player-scissors-container");
let spanPlayerScore = document.querySelector("player-score");
let spanComputerScore = document.querySelector("computer-score");
let elPlayerScore = document.querySelector(".player-score");
let elComputerScore = document.querySelector(".computer-score");
let elGameCount = document.querySelector(".game-count");
let elRoundResult = document.querySelector(".round-result");
let elGameResult = document.querySelector(".game-result");

let playerChoice;
let computerChoice;
let draw = false;
let buttonClickable = true;
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;



// playerButtonRock.addEventListener("click", ()=> if playerChoice = "rock");
// playerButtonPaper.addEventListener("click", ()=> playerChoice = "paper");
// playerButtonScissors.addEventListener("click", ()=> playerChoice = "scissors");

playerButtonRock.addEventListener(("click"), ()=>{
    if (buttonClickable) playerChoice = "rock";
})

playerButtonPaper.addEventListener(("click"), ()=>{
    if (buttonClickable) playerChoice = "paper";
})

playerButtonScissors.addEventListener(("click"), ()=>{
    if (buttonClickable) playerChoice = "scissors";
})

playerButtons.forEach((button)=>{
    button.addEventListener(("click"), (playerButt)=>{
        if (gameCount < 4){
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
                    game();
                }, 700)
            }
        }
        else {
            if (buttonClickable){
                buttonClickable = false;
                playerButtons.forEach((buttonz)=>{
                    buttonz.classList.remove("button-clickable");
                })
                setTimeout(()=>{
                    animateComputerChoice(getComputerChoice());
                    game();
                    elGameCount.classList.add("game-finished")
                }, 700)
            }
        }
    })
})

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100);
    computerChoice = randomNumber > 66? "scissors" : randomNumber <= 33 ? "rock" : "paper";
    return computerChoice;
}

//MUST BE A MORE EFFICIENT WAY TO DO THIS (putting the elements in variables for a start)
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

function playOneRound(computerChoice, playerChoice){
    console.log(computerChoice + " , " + playerChoice);
    if (computerChoice === playerChoice){
        console.log("choice 1")
        draw = true;
        return true;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("choice 2");
        draw = false;
        return true;
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        console.log("choice 3");
        draw = false;
        return true;
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        console.log("choice 4");
        draw = false;
        return true;
    } else {
        draw = false;
        console.log("lost");
        return false;
    }
};

function game(){
    gameCount++;
    if (gameCount <= 5){
        if (playOneRound(computerChoice, playerChoice)){
            if (draw){
                elRoundResult.textContent = "draw";
            } else {
                playerScore ++;
                elPlayerScore.textContent = playerScore;
                elRoundResult.textContent = playerChoice + " beats " + computerChoice;
            }
        } else {
            computerScore ++;
            elComputerScore.textContent = computerScore;
            elRoundResult.textContent = computerChoice + " beats " + playerChoice;
        }
        elGameCount.textContent = "game " + gameCount + " / 5";
    } 
    if (gameCount == 5) {
        elGameCount.textContent = "game 5 / 5";
        if (playerScore == computerScore){
            elGameResult.textContent = "It's a draw!";
        } else if (playerScore > computerScore){
            elGameResult.textContent = "player wins";
        } else {
            elGameResult.textContent = "computer wins";
            elGameResult.classList.add("game-finished")
        }
    }
}