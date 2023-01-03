//gameboard module
const gameBoard = (() => {
    board = [1,2,3,4,5,6,7,8,9]
    let testing = () => console.log('testing')
    return {
     testing,
     board
    };
  })();



//players
const player = ( (name, marker) => {
  name,
  marker,
  sayName = function() {
    console.log(name)
  }
  return {
    name,
    sayName
  };
}) ();

const tic = document.querySelector('tic-tac-toe');



//make the game work
