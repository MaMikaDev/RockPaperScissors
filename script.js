let userSelection;
let computerSelection;
let textResult;
let winner;
let userScore = 0;
let computerScore = 0;

let textUserScore;
let textComputerScore;

let gamesPlayed = 5;


const restart = document.querySelector('#restart');
const restBtn = document.createElement("button");
restBtn.innerHTML = "replay?";
restBtn.style.visibility = "hidden";

function restartGame() {

restBtn.onclick = function () {

  userScore = 0;
  computerScore = 0;
  document.getElementById('userScore').innerHTML = 'User: 0';
  document.getElementById('computerScore').innerHTML = 'Computer: 0';
  document.getElementById('final').innerHTML = '';
  document.getElementById("demoComp").innerHTML = '';
  document.getElementById("demo").innerHTML = '';
  document.getElementById("result").innerHTML = '';

  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  
  restBtn.style.visibility = "hidden";


  alert("Game will restart now!");
};

restart.classList.add('restart');
restart.appendChild(restBtn);
}



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
    textResult = "This round is a draw!";
    winner = "nobody";
  }
  if (userSelection === "rock") {
    if (computerSelection === "paper") {
      textResult = "Paper > Rock! Round lost!";
      winner = "computer";
    } else if (computerSelection === "scissors") {
      textResult = "Rock > Scissors! Round won!";
      winner = "user";
    }
  }

  if (userSelection === "paper") {
    if (computerSelection === "rock") {
      textResult = "Paper > Rock! Round won!";
      winner = "user";
    } else if (computerSelection === "scissors") {
      textResult = "Scissors > Paper! Round lost!";
      winner = "computer";
    }
  }

  if (userSelection === "scissors") {
    if (computerSelection === "paper") {
      textResult = "Scissors > Paper! Round won!";
      winner = "user";
    } else if (computerSelection === "rock") {
      textResult = "Rock > Scissors! Round lost!";
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



  if(userScore === 5 || computerScore === 5){
      if (userScore === 5){

        document.getElementById('final').innerHTML = 'You win! Congrats!';
        gameFinished();
        restBtn.style.visibility = 'visible';
        restartGame();


    }
       else {

        document.getElementById('final').innerHTML = 'You lost the game!';
        restBtn.style.visibility = 'visible';
        restartGame();

      }


  }

}

 function score() {//function adding up the scores

    if (winner === 'user') {
            userScore++;
            textUserScore = ('User: ' + userScore);
            console.log(textUserScore);
            document.getElementById('userScore').innerHTML = textUserScore;
        }
        if (winner === 'computer'){
            computerScore++;
            textComputerScore = ('Computer: ' + computerScore);
            console.log(textComputerScore);
            document.getElementById('computerScore').innerHTML = textComputerScore;
        }    
    }
 
function gameFinished(){   //disabling buttons when the game is finished

    
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  
  

}
    




        
    
    

