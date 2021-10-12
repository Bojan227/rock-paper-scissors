
function game(){
    for(i = 0; i < 100; i++){
        let playerSelection = window.prompt("What's your sign?").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))

        if(userScore === 5){
         return "You beat the computer! Reload the page for new game!"
         
    }else if (computerScore === 5) {
        return "Computer beats you! Reload the page for new game!"
    }
    }  
}

let userScore = 0;
let computerScore = 0;

 function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return "Draw!"
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return "Draw!"
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Draw!"
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You win")
        userScore++;
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log("You lost")
        computerScore++;
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("You lost")
        computerScore++;
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log("You win")
        userScore++;
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log("You lost")
        computerScore++;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log("You win")
        userScore++;
    }
}
function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1){
        return "rock";
    }else if (randomNum === 2){
        return "scissors";
    } else{
        return "paper";
    }
}


