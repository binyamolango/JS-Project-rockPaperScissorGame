 

function getComputerChoice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    // return randomly either "Rock", "Paper" or "Scissors"
}

function game(num){
    // play 5 round game that keeps score and report a winner or loser at the end
    let user = 0; let comp = 0;
    function playRound(playerSelection, computerSelection){
        // return a string that declares the winner of the round
        if(playerSelection === "rock" && computerSelection === "scissor"){
            user++;
            console.log("You : " + user, " Computer : " + comp);
        }
        else if(playerSelection === "rock" && computerSelection === "paper"){
            comp++;
            console.log("You : " + user, " Computer : " + comp);
        }
        else if(playerSelection === "paper" && computerSelection === "rock"){
            user++;
            console.log("You : " + user, " Computer : " + comp);
        }
        else if(playerSelection === "paper" && computerSelection === "scissor"){
            comp++;
            console.log("You : " + user, " Computer : " + comp);
        }
        else if(playerSelection === "scissor" && computerSelection === "paper"){
            user++;
            console.log("You : " + user, " Computer : " + comp);
        }
        else if(playerSelection === "scissor" && computerSelection === "rock"){
            comp++;
            console.log("You : " + user, " Computer : " + comp);
        }
    }
    let userInput;
    for(let i = 1; i <= num; i++){
        userInput = prompt("please write your selection from rock, paper and scissor").toLowerCase();
        console.log(userInput);
        playRound(userInput, getComputerChoice(["rock", "paper", "scissor"]));
    }
}
game(5);