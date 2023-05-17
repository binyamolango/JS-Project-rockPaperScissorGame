 

function getComputerChoice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    // return randomly either "Rock", "Paper" or "Scissors"
}
let user = 0; let comp = 0;
function game(num){
    // play 5 round game that keeps score and report a winner or loser at the end
    function playRound(playerSelection, computerSelection){
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
    }
    let userInput;
    let i = 1;
    while(i <= num) {
        userInput = prompt("please write your selection from rock, paper and scissor").toLowerCase();
        let validInput = /^(rock|paper|scissor)$/i;
        if(validInput.test(userInput)){
            console.log(userInput);
            playRound(userInput, getComputerChoice(["rock", "paper", "scissor"]));
            console.log("You : " + user, " Computer : " + comp);
            i++;
        }
        else {
            console.log("Check your input please");
        }
    }
    if(user > comp){
        return "You Won! Computer Lost!";
    }
    else if(user < comp){
        return "Computer Won! You Lost!";
    }
    else if(user === comp){
        return "Draw!";
    }
}
let output = game(5);
console.log(output);