// Game rules table, i beats j (i = computer, j = player)
const gameRules = [
  [null, 1,  0],
  [0,  null, 1],
  [1,   0, null]
];

const options = ['Rock', 'Paper', 'Scissors'];
const playerScoreDisplay = document.querySelector('.player-score p');
const computerScoreDisplay = document.querySelector('.computer-score p');
const gameStatusDisplay = document.querySelector('.game-status p');
const scores = {
  playerScore: 0,
  computerScore: 0
}

// Capitalize first letter to match options array, for a formatted output
const capitalizeFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Generate computer's move
const getComputerMove = () => Math.floor(Math.random() * 3);

const keepScore = (selection, computer, player) => {
  if (selection) {
    scores.playerScore++;
    playerScoreDisplay.textContent = scores.playerScore;
    gameStatusDisplay.textContent = `You Won! ${options[player]} beats ${options[computer]}`;
    return;
  }
  scores.computerScore++;
  computerScoreDisplay.textContent = scores.computerScore;
  gameStatusDisplay.textContent = `You Lose! ${options[computer]} beats ${options[player]}`;
  return;
}

const hasWon = () => (scores.playerScore === 5 || scores.computerScore === 5);

const gameEnd = () => {
  buttons.forEach(button => button.disabled = true);
}
const playRound = (e) => {
  let playerSelection, computerSelection;
  
  playerSelection = e.target.id;
  computerSelection = getComputerMove();

  if (computerSelection != playerSelection) 
  {
    keepScore(gameRules[computerSelection][playerSelection], computerSelection, playerSelection);
    if (hasWon()) gameEnd();
    return;
  }
  gameStatusDisplay.textContent = "It's a tie! Repeat this round!";
};


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));


// Main game function
// const playGame = () => {
//   let playerScore = 0, computerScore = 0;

//   while (playerScore < 5 && computerScore < 5) {
//     if (playRound()) playerScore++
//     else computerScore++
//   }
//   console.log(`- Final result - \nYour score: ${playerScore} \nComputer score: ${computerScore}`);

//   if (playerScore === computerScore) {
//     console.log("It's a tie! No one won!");
//     return;
//   }
//   if (playerScore > computerScore) {
//     console.log("Congrats! You Won!");
//     return;
//   }
//   if (playerScore < computerScore) {
//     console.log("Sorry, You lost!");
//     return;
//   } 
// }

// Start game
// gameBtn.addEventListener('click', playRound);

