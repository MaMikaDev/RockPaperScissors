
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
    }    return computerSelection;


    document.getElementById("demoComp").innerHTML = compText;
}

getComputerChoice();


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



