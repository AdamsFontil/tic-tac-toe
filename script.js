hideOverlay()
hideOverlay2()
//gameboard module
const gameBoard = (() => {
  board = [1,2,3,4,5,6,7,8,9]
  return {
   board
  };
})();

//players factory
const playerFactory = (name, marker) => {
picks = [],
winner = false
return { name, marker, picks};
};

//make the game work
const game = (() => {
// Render tic-tac-toe board on webpage
const ticTacToe = document.querySelector(".tic-tac-toe");
for (let i = 1; i <= 9; i++) {
  let playGame = () => {
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
  findOutWinner()

  if (player1.winner || computer.winner) {
    console.log('ok!!!!!')
    document.addEventListener('mousedown', hideOverlay)
    document.addEventListener('mousedown', hideOverlay2)
  }


  }
  const restart = () => {
    console.log('restarting')
    board = [1,2,3,4,5,6,7,8,9],
    player1.picks = []
    computer.picks = []
    div.textContent = ''
    div.className = `div${i}`;

  }
  const div = document.createElement("div");
  div.className = `div${i}`;
  div.id = i;
  ticTacToe.appendChild(div);
  div.addEventListener('click', playGame)
  const restartBtn = document.querySelector('.restart')
  restartBtn.addEventListener('click', restart)
}


  return {


  };
})();



//win conditions




 findOutWinner = () => {
  const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1,4,7], [2,5,8], [3,6,9],  [1,5,9], [3,5,7]];

  const targetArray = player1.picks
  const targetArray2 = computer.picks


  const checkPlayer1 = winConditions.some(array => array.every(element => targetArray.includes(element)));
  const checkPlayer2 = winConditions.some(array => array.every(element => targetArray2.includes(element)));

  if (checkPlayer1 === true) {
    console.log('player won')
    player1.winner = true;
    showOverlay()

    //  restart()
  } else if (checkPlayer2 === true) {
    console.log('computer won')
    computer.winner = true;
    showOverlay2()
  } else if (computer.picks.length > 3) {
    console.log('draw')

  }

 }



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





//needs to hide as much as possible
// need to clean up
// need to make sure that a div can't be clicked more than once
// need logic to declare winner
//need to make ai strong but not crucial
// need to have option for pvp


//players
const player1 = playerFactory('player1', 'X');
const computer = playerFactory('computer', 'O')
const player2 = playerFactory('player2', 'O')
