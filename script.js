
//gameboard module
const gameBoard = (() => {
  board = [1,2,3,4,5,6,7,8,9]
  let testing = () => console.log('testing')
  return {
   testing,
   board
  };
})();

//players factory
const playerFactory = (name, marker) => {
const sayHello = () => console.log('hello!');
picks = []
return { name, marker, sayHello, picks };
};

//players
const player1 = playerFactory('player1', 'X');
const computer = playerFactory('computer', 'O')
const player2 = playerFactory('player2', 'O')



//make the game work
const game = (() => {



  return {

  };
})();


// Render tic-tac-toe board on webpage
const ticTacToe = document.querySelector(".tic-tac-toe");
pick1 = []
pick2 = []

for (let i = 1; i <= 9; i++) {
  let test = () => {
    div.textContent = player1.marker
    pick1.push(div.id)
    target = div.id
    target = Number(target)
    console.log(div)
    // console.log({board})
    // console.log({target})
    const filteredNumbers = board.filter(number => number !== target);
  console.log(filteredNumbers);  // outputs [1, 2, 4, 5]
  board = filteredNumbers


// Pick a random index from the array
const index = Math.floor(Math.random() * board.length);

// Get the element at the randomly chosen index
const randomNumber = board[index];
console.log({randomNumber})
const filteredNumbers2 = board.filter(number => number !== randomNumber);
  console.log(filteredNumbers2);  // outputs [1, 2, 4, 5]
  board = filteredNumbers2
  const computerPlay = document.querySelector(`.div${randomNumber}`)
  computerPlay.textContent = computer.marker
  computerPlay.className = 'selected'
  div.className = 'selected'

  }
  const div = document.createElement("div");
  div.className = `div${i}`;
  div.id = i;
  ticTacToe.appendChild(div);
  div.addEventListener('click', test)



}


//needs to hide as much as possible
// need to clean up
// need to make sure that a div can't be clicked more than once
// need logic to declare winner
