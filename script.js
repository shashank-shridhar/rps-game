let playerChoice = "";
let computerChoice = "";

const options = ["rock", "paper", "scissors"];  // Options that the Player and Computer can select from

function computerChoiceSelection() {

    let randomNumber = Math.random();

    if (randomNumber < 0.34) {
        computerChoice = options[0];
    } else if (randomNumber <= 0.67) {
        computerChoice = options[1];
    } else {
        computerChoice = options[2];
    }
}

const rockBtn = document.querySelector("#btn");
const paperBtn = document.querySelector("#btn2");
const scissorsBtn = document.querySelector("#btn3");

function playSingleRound(playerChoice,computerChoice){
    
    computerChoiceSelection();
    if (playerChoice === computerChoice) {
        return "TIE.";
    }
    else if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            return "You lose! Paper beats Rock";
        }
        else{
            return "You win! Rock beats Scissors";
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            return "You lose! Scissors beats Paper";
        }
        else{
            return "You win! Paper beats Rock";
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            return "You lose! Rock beats Scissors";
        }
        else{
            return "You win! Scissors beats Paper";
        }
    }
    else{
        return "Invalid input";
    }
}

rockBtn.addEventListener("click", function () {
    playerChoice = "rock";
});

paperBtn.addEventListener("click", function () {
    playerChoice = "paper";
});

scissorsBtn.addEventListener("click", function () {
    playerChoice = "scissors";
    
});

const playButton = document.querySelector("#playBtn");

playButton.addEventListener('click', () => {

    console.log("Computer picked:" + computerChoice);
    console.log("Player picked:" + playerChoice);

    const result = playSingleRound(playerChoice, computerChoice);
    console.log(result);
});

