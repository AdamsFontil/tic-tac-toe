
const gameBoard = (() => {
  board = [1,2,3,4,5,6,7,8,9]
})();

//players factory
playerFactory = ((name, marker) => {
picks = [],
winner = false
return {marker, picks, winner};
})

const player1 = playerFactory('player1', 'X');
const computer = playerFactory('computer', 'O')
const player2 = playerFactory('player2', 'O')


// restart game and clears board
toMakeDivsBlank = (() => {
  makeDivsBlank = () => {
  for (let i = 1; i <= 9; i++) {
  const divs = document.getElementById(`${i}`);
  console.log('making divs blank')
  divs.className = `div${i}`;
  board = [1,2,3,4,5,6,7,8,9],
  player1.picks = []
  computer.picks = []
  divs.textContent = ''
}
  }
})()

game = (() => {
  const divElement = document.querySelector('.tic-tac-toe');

divElement.addEventListener('click', function(event) {
  const divClass = event.target.className;
  console.log(divClass)
  playGame = (() => {
  div = document.querySelector(`.${divClass}`)
div.textContent = player1.marker
  target = Number(div.id)
  const filteredNumbers = board.filter(number => number !== target);
  board = filteredNumbers
  const index = Math.floor(Math.random() * board.length);
  const randomNumber = board[index];
  const filteredNumbers2 = board.filter(number => number !== randomNumber);
  board = filteredNumbers2
  const computerPlay = document.querySelector(`.div${randomNumber}`)
  computerPlay.textContent = computer.marker
  computerPlay.className = 'selected'
  div.className = 'selected'
  player1.picks.push(Number(div.id))
  computer.picks.push(Number(computerPlay.id))
  console.log(player1.winner)
  findwinner()
  console.log(player1.winner)
  if (player1.winner) {
    document.addEventListener('mousedown', hideOverlay)
    document.addEventListener('mousedown', makeDivsBlank)
    computerPlay.textContent = ''
    player1.winner = false;
  } else if (player1.winner === false && computer.winner === false  ) {
    console.log('remove event listener')
    document.removeEventListener('mousedown', makeDivsBlank)
  } else if (computer.winner === true) {
    console.log('computer shouldnot play')
    document.addEventListener('mousedown', hideOverlay2)
    document.addEventListener('mousedown', makeDivsBlank)
    computer.winner = false;
  }
})()

});
})()


createBoard = (() => {
  const ticTacToe = document.querySelector(".tic-tac-toe");
  for (let i = 1; i <= 9; i++) {
    const div = document.createElement("div");
    div.className = `div${i}`;
    div.id = i;
    ticTacToe.appendChild(div);
  }
    const restartBtn = document.querySelector('.restart')
    restartBtn.addEventListener('click', makeDivsBlank)

  })()


//win conditions




 findOutWinner = (() => {
  findwinner = () => {
  const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1,4,7], [2,5,8], [3,6,9],  [1,5,9], [3,5,7]];

  const targetArray = player1.picks
  const targetArray2 = computer.picks
  const checkPlayer1 = winConditions.some(array => array.every(element => targetArray.includes(element)));
  const checkPlayer2 = winConditions.some(array => array.every(element => targetArray2.includes(element)));

  if (checkPlayer1 === true) {
    console.log('player won')
    player1.winner = true;
    showOverlay()
  } else if (checkPlayer2 === true) {
    console.log('computer won')
    computer.winner = true;
    showOverlay2()
  } else if (computer.picks.length > 3) {
    console.log('draw')
  }

}
 })()



 function showOverlay() {
  document.getElementById("overlay").style.display = "flex";
}
function showOverlay2() {
  document.getElementById("overlay2").style.display = "flex";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}
function hideOverlay2() {
  document.getElementById("overlay2").style.display = "none";
}

function minimax(board) {
  // If the game is over, return the score for the current player
  if (gameOver(board)) {
      return score(board);
  }

  // Initialize the best score to the lowest possible value
  let bestScore = Number.NEGATIVE_INFINITY;
  let bestMove = null;

  // Consider all possible moves
  for (let move of possibleMoves(board)) {
      // Make the move on a copy of the board
      let newBoard = makeMove(board, move);
      // Recursively find the best move for the opponent
      let score = minimax(newBoard);
      // Undo the move on the copy of the board
      newBoard = undoMove(newBoard, move);

      // If the score is better than the current best score, update the best score and move
      if (score > bestScore) {
          bestScore = score;
          bestMove = move;
      }
  }

  return bestMove;
}





//needs to hide as much as possible -- Worked on
// need to clean up -- Working on
// need to make sure that a div can't be clicked more than once --Done
// need logic to declare winner -- Done
//need to make ai strong but not that crucial
// need to have option for pvp
//players
