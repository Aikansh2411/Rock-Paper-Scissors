let rock = document.querySelector('.rockContainer');
let paper = document.querySelector('.paperContainer');
let scissors = document.querySelector('.scissorsContainer');
let message = document.querySelector('#message');
let compCount = 0;
let playerCount = 0;
let compScore = document.querySelector('#computerCount');
let playerScore = document.querySelector('#playerCount');


const randomChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

rock.addEventListener("click", () => {
    let computerChoice = randomChoice();
    let outcome = "";
    if (computerChoice === 'rock') {
        outcome = "It is a tie,you both chose rock";
        message.style.backgroundColor = "yellow";
    } else if (computerChoice === 'paper') {
        outcome = "You lose, computer chose paper";
        message.style.backgroundColor = "red";
        compCount++;
    } else {
        outcome = "You win, computer chose scissors";
        message.style.backgroundColor = "green";
        playerCount++;
    }
    message.innerText = outcome;
    compScore.innerText = compCount;
    playerScore.innerText = playerCount;
});

paper.addEventListener("click", () => {
    let computerChoice = randomChoice();
    let outcome = "";
    if (computerChoice === 'rock') {
        outcome = "You win, computer chose rock";
        message.style.backgroundColor = "green";
        playerCount++;
    } else if (computerChoice === 'paper') {
        outcome = "It is a tie, you both chose paper";
        message.style.backgroundColor = "yellow";
    } else {
        outcome = "You lose, computer chose scissors";
        message.style.backgroundColor = "red";
        compCount++;
    }
    message.innerText = outcome;
    compScore.innerText = compCount;
    playerScore.innerText = playerCount;
});

scissors.addEventListener("click", () => {
    let computerChoice = randomChoice();
    let outcome = "";
    if (computerChoice === 'rock') {
        outcome = "You lose, computer chose rock";
        message.style.backgroundColor = "red";
        compCount++;
    } else if (computerChoice === 'paper') {
        outcome = "You win, computer chose paper";
        message.style.backgroundColor = "green";
        playerCount++;
    } else {
        outcome = "It is a tie, you both chose scissors";
        message.style.backgroundColor = "yellow";
    }
    message.innerText = outcome;
    compScore.innerText = compCount;
    playerScore.innerText = playerCount;
});