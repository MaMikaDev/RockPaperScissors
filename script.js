
let userSelection;
let computerSelection;
let result;




function getComputerChoice () {
    let compText;

    switch ((Math.floor(Math.random() * 3))) {

        

        case 0:
            computerSelection = 'Rock';
            compText = 'Computer chose Rock!';
            break;
        case 1:
            computerSelection = 'Paper';
            compText = 'Computer chose Paper!';
            break;
        default:
            computerSelection = 'Scissors';
            compText = 'Computer chose Scissors!';
    }    

    document.getElementById("demoComp").innerHTML = compText;
}




function getUserChoice() {


    let text;
    let userSelection = prompt('Enter rock, paper or scissors!', 'Enter rock, paper or scissors');

    userSelection = userSelection.toLowerCase();


    switch(userSelection){

        case 'rock':
            text = 'You chose Rock!';
            break;
        case 'paper':
            text = 'You chose Paper';
            break;
        case 'scissors':
            text = 'You chose Scissors!';
            break;
        default:
            text= 'This is not a valid entry!';
    }

    document.getElementById("demo").innerHTML = text;

    return userSelection;
}

console.log('User choice is' + getUserChoice());

function playGame(userSelection, computerSelection) {

    if (userSelection === computerSelection) {
        result = 'Nobody Wins! It is a draw!';
    }
    if (userSelection === rock && computerSelection === paper){
        result = 'Paper beats Rock! You lose!';
    }
    if (userSelection === paper && computerSelection === rock){
        result = 'Paper beats Rock! You win!';

    if (userSelection === rock && computerSelection === scissors){
        result = 'Rock beats Scissors! You win!';
    }
    if (userSelection === paper && computerSelection === rock){
        result = 'Paper beats rock! You win!';
    }
    if (userSelection === scissors && computerSelection === paper){
        result = 'Scissors beat Paper! You win!';
    }
    if (userSelection === scissors && computerSelection === rock){
        result = 'Rock beats scissors! You lose!';
    }
    
    }

    document.getElementById("result").innerHTML = result;


}

