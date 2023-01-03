
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
return { name, marker, sayHello };
};

const jeff = playerFactory('jeff', 'X');

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'





//make the game work



//make the game work
