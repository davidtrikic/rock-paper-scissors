// Game rules table, i beats j (i = computer, j = player)
const gameRules = [
  [null, 1,  0],
  [0,  null, 1],
  [1,   0, null]
];

const options = ['Rock', 'Paper', 'Scissors'];
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const result = document.querySelector('.result');
let playerScore = 0, computerScore = 0;

// Capitalize first letter to match options array, for a formatted output
const capitalizeFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Player's move
const getPlayerMove = (e) => e.target.id;

// Generate computer's move
const getComputerMove = () => Math.floor(Math.random() * 3);

const keepScore = () => {
  
}
// Play one round
const playRound = (e) => {
  let playerSelection, computerSelection;
  
  playerSelection = getPlayerMove(e);
  computerSelection = getComputerMove();

  if (computerSelection != playerSelection) 
  {
    if (gameRules[computerSelection][playerSelection]) {
      console.log(`You Won! ${options[playerSelection]} beats ${options[computerSelection]}`);
      playerScore++;
      playerScoreDiv.textContent = +playerScore;
      return;
    }
    console.log(`You Lose! ${options[computerSelection]} beats ${options[playerSelection]}`);
    computerScore++;
    computerScoreDiv.textContent = +computerScore;
    return;
  }
  // If tie, repeat function call
  alert("It's a tie! Please repeat this round!")
  return playRound(e);
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

