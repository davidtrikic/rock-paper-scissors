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
const playerIcon = document.querySelector('#player-icon');
const computerIcon = document.querySelector('#computer-icon');
const modal = document.querySelector('.modal-wrapper');
const modalMsg = document.querySelector('.modal p');
const newGameBtn = document.querySelector('#new-game');
const scores = {
  playerScore: 0,
  computerScore: 0
}
const iconClasses = {
  question: "far fa-8x fa-question-circle",
  Rock: "fa-hand-rock",
  Paper: "fa-hand-paper",
  Scissors: "fa-hand-peace"
}

// Generate computer's move
const getComputerMove = () => Math.floor(Math.random() * 3);

const toggleIcons = (e, computer) => {
  computerIcon.setAttribute('class', `fas fa-8x ${iconClasses[options[computer]]}`);
  playerIcon.setAttribute('class', `fa-8x ${e.target.className}`);
}

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
  modal.style.display = "flex";
  if (scores.playerScore === 5) {
    modalMsg.textContent = "You won!";
    return;
  }
  modalMsg.textContent = "Game over, you lost!";
}

const newGame = () => {
  buttons.forEach(button => button.disabled = false);
  modal.style.display = "none";
  scores.playerScore = 0;
  scores.computerScore = 0;
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  gameStatusDisplay.textContent = "Choose your move";
  computerIcon.setAttribute('class', `${iconClasses.question}`);
  playerIcon.setAttribute('class', `${iconClasses.question}`);
}
const playRound = (e) => {
  let playerSelection, computerSelection;
  playerSelection = e.target.id;
  computerSelection = getComputerMove();
  toggleIcons(e, computerSelection);
  
  if (computerSelection != playerSelection) 
  {
    keepScore(gameRules[computerSelection][playerSelection], computerSelection, playerSelection);
    if (hasWon()) gameEnd();
    return;
  }
  gameStatusDisplay.textContent = "It's a tie! Repeat this round!";
};

newGameBtn.addEventListener('click', newGame);

const buttons = document.querySelectorAll('.game-buttons button');
buttons.forEach(button => button.addEventListener('click', playRound));
