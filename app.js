// Game rules table, i beats j (i = computer, j = player)
const gameRules = [
  [null, 1,  0],
  [0,  null, 1],
  [1,   0, null]
];

const options = ['Rock', 'Paper', 'Scissors'];
const gameBtn = document.getElementById('play-button');

// Capitalize first letter to match options array, for a formatted output
const capitalizeFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Player's move
const getPlayerMove = () => {
  let input = "";
  do {
    input = capitalizeFirst(prompt("Enter your move: ").toLowerCase());
  } while (input != "Rock" && input != "Paper" && input != "Scissors");

  return options.indexOf(input);
}

// Generate computer's move
const getComputerMove = () => Math.floor(Math.random() * 3);

// Play one round
const playRound = () => {
  let playerSelection, computerSelection;
  
  playerSelection = geTplayerMove();
  computerSelection = getComputerMove();

  if (computerSelection != playerSelection) 
  {
    if (gameRules[computerSelection][playerSelection]) {
      console.log(`You Won! ${options[playerSelection]} beats ${options[computerSelection]}`)
      return 1;
    }
    console.log(`You Lose! ${options[computerSelection]} beats ${options[playerSelection]}`)
    return 0; 
  }
  // If tie, repeat function call
  alert("It's a tie! Please repeat this round!")
  return playRound();
};


// Main game function
const playGame = () => {
  let playerScore = 0, computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    if (playRound()) playerScore++
    else computerScore++
  }
  console.log(`- Final result - \nYour score: ${playerScore} \nComputer score: ${computerScore}`);

  if (playerScore === computerScore) {
    console.log("It's a tie! No one won!");
    return;
  }
  if (playerScore > computerScore) {
    console.log("Congrats! You Won!");
    return;
  }
  if (playerScore < computerScore) {
    console.log("Sorry, You lost!");
    return;
  } 
}

// Start game
gameBtn.addEventListener('click', playGame);

