
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

const player1 = playerFactory('player1', 'X');
const computer = playerFactory('computer', 'O')




const ticTacToe = document.querySelector(".tic-tac-toe");

  // Use a for loop to create and append the divs
  for (let i = 1; i <= 9; i++) {
    let test = () => {
      div.textContent = player1.marker
    }
    const div = document.createElement("div");
    div.className = `div${i}`;
    ticTacToe.appendChild(div);
    div.addEventListener('click', test)
  }



//make the game work



//make the game work
