// Game rules table, i beats j (i = computer, j = player)
const gameRules = [
  ['x', 1,  0],
  [0,  'x', 1],
  [1,   0, 'x']
];

const options = ['rock', 'paper', 'scissors'];
const gameBtn = document.getElementById('play-button');

// Generate computer's move
const computerPlay = () => Math.floor(Math.random() * 3);

// Player's move
const playerMove = () => {
  let input = "";
  do {
    input = prompt("Enter your move: ").toLowerCase();
  } while (input != "rock" && input != "paper" && input != "scissors");

  return options.indexOf(input);
}




const playRound = () => {
  let playerSelection, computerSelection;
  
  playerSelection = playerMove();
  computerSelection = computerPlay();

  if (gameRules[computerSelection][playerSelection] != 'x') 
  {
    console.log(gameRules[computerSelection][playerSelection]);
  }
  else {
    playerSelection = playerMove();
    computerSelection = computerPlay();
    playRound();
  }
};

gameBtn.addEventListener('click', playRound);
