
let userSelection;
let computerSelection;
let result;




function getComputerChoice () {
    let compText;

    switch ((Math.floor(Math.random() * 3))) {

        

        case 0:
            computerSelection = 'rock';
            compText = 'Computer chose Rock!';
            break;
        case 1:
            computerSelection = 'paper';
            compText = 'Computer chose Paper!';
            break;
        default:
            computerSelection = 'scissors';
            compText = 'Computer chose Scissors!';
    }    

    document.getElementById("demoComp").innerHTML = compText;
    return computerSelection;
}




function getUserChoice() {


    let text;
    let answer = prompt('Enter rock, paper or scissors!', 'rock, paper or scissors');

    let entry = answer.toLowerCase();

    switch(entry){

        case 'rock':
            text = 'You chose Rock!';
            userSelection = 'rock';
            break;
        case 'paper':
            text = 'You chose Paper';
            userSelection = 'paper'
            break;
        case 'scissors':
            text = 'You chose Scissors!';
            userSelection = 'scissors';
            break;
        default:
            text= 'This is not a valid entry!';
            userSelection = 'not a game parameter';
    }

    document.getElementById("demo").innerHTML = text;
    return userSelection;
}

function playGame(userSelection, computerSelection) {

    if (userSelection === computerSelection) {
        result = 'Nobody Wins! It is a draw!';
    }
    if (userSelection === 'rock'){
        if (computerSelection === 'paper'){
            result = 'Paper beats Rock! You lose!';
        }
        else if (computerSelection === 'scissors'){
            result = 'Rock beats Scissors! You win!';
        }
    }

    if (userSelection === 'paper'){
         if (computerSelection === 'rock'){
        result = 'Paper beats rock! You win!';
    }
        else if (computerSelection === 'scissors'){
            result = 'Scissors beat Paper! You lose!';
    }
    }

    if (userSelection === 'scissors'){

        if (computerSelection === 'paper'){
        result = 'Scissors beat Paper! You win!';
        }
        else if (computerSelection === 'rock'){
        result = 'Rock beats Scissors! You lose!';
        }
    }

    if (userSelection === 'not a game parameter'){
    
        result = 'This is not a valid entry. Please try again.'
    }

    return result;
    }




function game(){
    for (let i = 0; i < 5; i++) {
        getUserChoice(); getComputerChoice (); 
        playGame(userSelection, computerSelection)
        document.getElementById("result").innerHTML = result;
        console.log(userSelection, computerSelection, result);
     }
}
