function getComputerChoice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    // return randomly either "Rock", "Paper" or "Scissors"
}

let user = 0; let comp = 0;
function playRound(e){
    let playerSelection = this.classList.value;
    let computerSelection = getComputerChoice(["rock", "paper", "scissor"]);
    console.log(playerSelection, computerSelection)
    // return a string that declares the winner of the round
    if(playerSelection === "rock" && computerSelection === "scissor"){
        user++;
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        comp++;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        user++;
    }
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        comp++;
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        user++;
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        comp++;
    }
    div.textContent = `You :  ${user},  Computer :  ${comp}`;
    if(user === 5){
        div.textContent = `You :  ${user},  Computer :  ${comp}  You Won!`;
        user = 0;
        comp = 0;
        return;
    }
    else if(comp === 5){
        div.textContent = `You :  ${user},  Computer :  ${comp}  Computer Won!`;
        comp = 0;
        user = 0;
        return;
    }
}

const userInput = document.querySelectorAll("button");
const div = document.createElement("div");
const container = document.querySelector(".container");


container.appendChild(div);
userInput.forEach(input => input.addEventListener("click", playRound));
div.textContent = `You :  ${user},  Computer :  ${comp}`;