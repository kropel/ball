const Game = require("./Game");
const { board } = require("./ExamInput");

const game = new Game(board);

const condion = (() => {
  let i = 0;
  return () => 100 <= i++;
})();

game.move(condion);
let id = null;
const show2DArray = () => {
  let array = game.snapshots.shift();
  console.clear();
  array.forEach((row) => console.log(row.join(" ")));
  if (game.snapshots.length <= 0) {
    clearInterval(id);
  }
};
id = setInterval(show2DArray, 200);
