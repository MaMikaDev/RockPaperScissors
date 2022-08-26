let userSelection;
let computerSelection;
let textResult;
let winner;
let userScore = 0;
let computerScore = 0;

let textUserScore;
let textComputerScore;



function getComputerChoice() {
  let compText;

  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerSelection = "rock";
      compText = "Computer chose Rock!";
      break;
    case 1:
      computerSelection = "paper";
      compText = "Computer chose Paper!";
      break;
    default:
      computerSelection = "scissors";
      compText = "Computer chose Scissors!";
  }

  document.getElementById("demoComp").innerHTML = compText;
  return computerSelection;
}

function getUserChoice(entry) {
  let text;
  // let answer = prompt('Enter rock, paper or scissors!', 'rock, paper or scissors');

  // let entry;

  switch (entry) {
    case "rock":
      text = "You chose Rock!";
      userSelection = "rock";
      break;
    case "paper":
      text = "You chose Paper";
      userSelection = "paper";
      break;
    case "scissors":
      text = "You chose Scissors!";
      userSelection = "scissors";
      break;
    default:
      text = "This is not a valid entry!";
      userSelection = "not a game parameter";
  }

  document.getElementById("demo").innerHTML = text;
  return userSelection;
}

function playGame(userSelection, computerSelection) {

    if (userSelection === computerSelection) {
    textResult = "Nobody Wins! It is a draw!";
    winner = "nobody";
  }
  if (userSelection === "rock") {
    if (computerSelection === "paper") {
      textResult = "Paper beats Rock! You lose!";
      winner = "computer";
    } else if (computerSelection === "scissors") {
      textResult = "Rock beats Scissors! You win!";
      winner = "user";
    }
  }

  if (userSelection === "paper") {
    if (computerSelection === "rock") {
      textResult = "Paper beats rock! You win!";
      winner = "user";
    } else if (computerSelection === "scissors") {
      textResult = "Scissors beat Paper! You lose!";
      winner = "computer";
    }
  }

  if (userSelection === "scissors") {
    if (computerSelection === "paper") {
      textResult = "Scissors beat Paper! You win!";
      winner = "user";
    } else if (computerSelection === "rock") {
      textResult = "Rock beats Scissors! You lose!";
      winner = "computer";
    }
  }
  document.getElementById("result").innerHTML = textResult;
  return winner;
}

function game() {

  getComputerChoice();
  playGame(userSelection, computerSelection);
  console.log(userSelection, computerSelection, winner);

  score(); // displays current number score of the game 

}

 function score() {//rough draft of what the function should be doing

    // for (let i = 0; i < 5; i++){
        if (winner === 'user') {
            userScore++;
            textUserScore = ('User: ' + userScore);
            console.log(textUserScore);
        }
        if (winner === 'computer'){
            computerScore++;
            textComputerScore = ('Computer: ' + computerScore);
            console.log(textComputerScore);
        }
   
    
    if (userScore > computerScore){
    
        return 'You win! Congratulations!';
    
    }

    else { 
        
        return 'You lose this time! Sorry.';
 }
}
