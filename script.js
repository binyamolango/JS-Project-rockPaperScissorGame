 

function getComputerChoice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    // return randomly either "Rock", "Paper" or "Scissors"
}

function game(num){
    // play 5 round game that keeps score and report a winner or loser at the end
    function playRound(playerSelection, computerSelection){
        // return a string that declares the winner of the round
    }
    let userInput;
    userInput = prompt("please write your selection from rock, paper and scissor").toLowerCase();
    console.log(userInput);
    playRound(userInput, getComputerChoice(["rock", "paper", "scissor"]));
}
game(5);