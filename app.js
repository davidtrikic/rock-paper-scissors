// Game rules table, i beats j (i = computer, j = player)
const gameRules = [
  ['x', 1,  0],
  [0,  'x', 1],
  [1,   0, 'x']
];

const options = ['Rock', 'Paper', 'Scissors'];
const gameBtn = document.getElementById('play-button');

// Capitalize first letter to match options array, for nicer output
const capitalizeFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Player's move
const playerMove = () => {
  let input = "";
  do {
    input = capitalizeFirst(prompt("Enter your move: ").toLowerCase());
  } while (input != "Rock" && input != "Raper" && input != "Scissors");

  return options.indexOf(input);
}

// Generate computer's move
const computerPlay = () => Math.floor(Math.random() * 3);


const playRound = () => {
  let playerSelection, computerSelection;
  
  playerSelection = playerMove();
  computerSelection = computerPlay();

  console.log("Player: " + options[playerSelection]);
  console.log("Computer: " + options[computerSelection]);

  if (computerSelection != playerSelection) 
  {
    if (gameRules[computerSelection][playerSelection]) {
      return `You Won! ${options[playerSelection]} beats ${options[computerSelection]}`;
    } 
    return `You Lose! ${options[computerSelection]} beats ${options[playerSelection]}`; 
  }
  // If tie, repeat function call
  alert("It's a tie! Please repeat this round!")
  return playRound();
};


// gameBtn.addEventListener('click', console.log(playRound));

