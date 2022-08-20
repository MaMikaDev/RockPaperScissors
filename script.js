
let userSelection;
let computerSelection;
let result;




function getComputerChoice () {

    switch ((Math.floor(Math.random() * 3))) {

        case 0:
            computerSelection = 'Rock';
            break;
        case 1:
            computerSelection = 'Paper';
            break;
        default:
            computerSelection = 'Scissors'
    }

    return computerSelection;
 
}

console.log('computer choice is' + getComputerChoice())

function getUserChoice() {

    let userSelection = prompt('Enter rock, paper or scissors!');
    userSelection = userSelection.toLowerCase();

    switch(userSelection){
        case rock:
            text = 'Rock';
            break;
        case paper:
            text = 'Paper';
            break;
        case scissors:
            text = 'Scissors';
            break;
        default:
            text= 'This is not a valid entry!';
    }
    document.getElementById("mainBox").innerHTML = text
    return userSelection;
}

console.log('User choice is' + getUserChoice());



