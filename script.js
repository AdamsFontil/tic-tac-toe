
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
    pick1.push(div.className)
    const numbers = [1,3,5,7,9];

// Pick a random index from the array
const index = Math.floor(Math.random() * numbers.length);

// Get the element at the randomly chosen index
const randomNumber = numbers[index];
console.log(randomNumber)

  }
  const div = document.createElement("div");
  div.className = i;
  ticTacToe.appendChild(div);
  div.addEventListener('click', test)
}
