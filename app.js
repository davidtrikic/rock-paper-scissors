// Game rules table, i beats j (i = computer, j = player)
const gameRules = [
  ['x', 1,  0],
  [0,  'x', 1],
  [1,   0, 'x']
];

// Generate computer's move
const computerPlay = () => Math.floor(Math.random() * 3);

// Player's move
const playerMove = () => {
  let input = "";
  do {
    input = prompt("Enter your move: ").toLowerCase();
  } while (input != "rock" && input != "paper" && input != "scissors");

  switch (input) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      break;
    }
}



const playRound = (player, computer) => {
  let playerSelection = playerMove();
  let computerSelection = computerPlay();
  console.log("Computer: " + computerSelection);
  console.log("Player: " + playerSelection);

  if (player == computer) playRound();
  else console.log(gameRules[computer][player]);
};

playRound(playerSelection, computerSelection);