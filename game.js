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

function getHumanChoice(){
    
    while(true){
    let humanChoice = prompt('Please enter your choice: rock, paper, or scissors');
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        return humanChoice;
    } else if(humanChoice === null){
        return;
    }else {
        alert('Invalid choice');
    }
}
}

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
        return 'It\'s a tie!';
    }

}


function playGame(){
    for(let i = 0; i < 5; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let result = playRound(human, computer);
        console.log(result);
    }
    console.log('Human: ' + humanScore + ' Computer: ' + computerScore);
}

let humanScore = 0;
let computerScore = 0;

playGame();