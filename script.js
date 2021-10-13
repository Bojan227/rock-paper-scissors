const div = document.querySelector('.main');
const buttons = document.querySelectorAll('.btn')
const uScore = document.querySelector('.uscore');
const cScore = document.querySelector('.cscore');
const textWin = document.querySelector('.result h1');
const textLose = document.querySelector('.result .lose');
const roundResult = document.querySelector('.roundResult');
const replayButton = document.querySelector('.btn-replay');

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

function replay(){
        document.body.classList.add('open')
             
}

function game(){
    if(userScore === 5){
        textWin.innerText = 'You win! Congratulations!'
        setTimeout(replay, 2000);
    }else if(computerScore === 5){
        textLose.innerText = 'Game Over! You lost!' 
        setTimeout(replay, 2000);
    }
    
    };   
    


replayButton.addEventListener('click', function(e){
    document.querySelector('.layout').style.display = 'none'
    location.reload()
    
})

