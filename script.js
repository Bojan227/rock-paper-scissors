const div = document.querySelector('.main');
const buttons = document.querySelectorAll('button')
const uScore = document.querySelector('.uscore');
const cScore = document.querySelector('.cscore');
const result = document.querySelector('.result h1');
const resultL = document.querySelector('.result .lose')
const roundResult = document.querySelector('.roundResult')

let userScore = 0;
let computerScore = 0; 

let playerSelection = ''
let computerSelection = ''

buttons.forEach(button => button.addEventListener('click', function(e){
   playerSelection = e.target.value;
   computerSelection = computerPlay();
   if (playerSelection === computerSelection){
    roundResult.innerText = 'Draw!'

}else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')){

    roundResult.innerText = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`;
    userScore++;
        }
else if((playerSelection === 'scissors' && computerSelection === 'rock') || 
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')){

    roundResult.innerText = `You lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`
    computerScore++;
    
    }

uScore.innerText = userScore;
cScore.innerText = computerScore;
game()
// e.target.disabled
}));

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

function game(){
    if(userScore === 5){
        result.innerText = 'You win! Congratulations!'
        
    }else if(computerScore === 5){
        resultL.innerText = 'Game Over! You lost!'  
    }   
    };   
    
    
// function disableButtons(){
//     buttons.target.disabled = true
// }

//  function playRound(){
    
//     if (playerSelection === 'rock' && computerSelection === 'rock'){
//         return "Draw!"
//     }else if (playerSelection === 'paper' && computerSelection === 'paper'){
//         return "Draw!"
//     }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
//         return "Draw!"
//     }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
//         console.log("You win")
//         userScore++;
//     }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
//         console.log("You lost")
//         computerScore++;
//     }else if (playerSelection === 'rock' && computerSelection === 'paper'){
//         console.log("You lost")
//         computerScore++;
//     }else if (playerSelection === 'paper' && computerSelection === 'rock'){
//         console.log("You win")
//         userScore++;
//     }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
//         console.log("You lost")
//         computerScore++;
//     }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
//         console.log("You win")
//         userScore++;
//     }
// }



