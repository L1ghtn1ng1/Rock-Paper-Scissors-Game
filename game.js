function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// function getHumanChoice(){
    
//     while(true){
//     let humanChoice = prompt('Please enter your choice: rock, paper, or scissors');
//     humanChoice = humanChoice.toLowerCase();
//     if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
//         return humanChoice;
//     } else if(humanChoice === null){
//         return;
//     }else {
//         alert('Invalid choice');
//     }
// }
// }

function playRound(human, computer){
    if(human === 'rock' && computer === 'scissors'){
        humanScore++;
        return 'You win! Rock beats scissors.';
    }
    if(human === 'rock' && computer === 'paper'){
        computerScore++;
        return 'You lose! Paper beats rock.';
    }
    if(human === 'scissors' && computer === 'rock'){
        computerScore++;
        return 'You lose! Rock beats scissors.';
    }
    if(human === 'scissors' && computer === 'paper'){
        humanScore++;
        return 'You win! Scissors beats paper.';
    }
    if(human === 'paper' && computer === 'rock'){
        humanScore++;
        return 'You win! Paper beats rock.';
    }
    if(human === 'paper' && computer === 'scissors'){
        computerScore++;
        return 'You lose! Scissors beats paper.';
    }
    if(human === computer){
        drawScore++;
        return 'It\'s a tie!';
    }

}


function playGame(){
    if(humanChoice === null){
        alert('Please choose your weapon!');
        return;
    }
    let human = humanChoice;
    let computer = getComputerChoice();
    let result = playRound(human, computer);
    player.textContent = 'Player: ' + humanScore;
    computerPointer.textContent = 'Computer: ' + computerScore;
    draw.textContent = 'Draw: ' + drawScore;
    console.log(result);
    console.log('Human: ' + humanScore + ' Computer: ' + computerScore);
    humanChoice = null;
    setTimeout(() => {

    if(humanScore === 5){
        alert('You win the game!');
        humanScore = 0;
        computerScore = 0;
        drawScore = 0;
        player.textContent = 'Player: ' + 0;
        draw.textContent = 'Draw: ' + 0;
        computerPointer.textContent = 'Computer: ' + 0;
    }
    if(computerScore === 5){
        alert('You lose the game!');
        humanScore = 0;
        computerScore = 0;
        drawScore = 0;
        player.textContent = 'Player: ' + 0;
        computerPointer.textContent = 'Computer: ' + 0;
        draw.textContent = 'Draw: ' + 0;
    }
    }, 10);
}

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

let humanChoice = null;

let player = document.querySelector('#player');
let computerPointer = document.querySelector("#computer");
let draw = document.querySelector('#draw');

let play = document.querySelector('.play');
play.addEventListener('click', playGame);

let choice = document.querySelector('.allOptions');
choice.addEventListener('click', (e) =>{
    switch(e.target.id){
        case 'rock':
            humanChoice = 'rock';
            console.log(humanChoice);
            break;
        case 'paper':
            humanChoice = 'paper';
            console.log(humanChoice);
            break;
        case 'scissors':
            humanChoice = 'scissors';
            console.log(humanChoice);
            break;
    }
}
);