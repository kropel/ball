const Game = require("./Game");
const { board } = require("./ExamInput");

const game = new Game(board);

const condion = (() => {
  let i = 0;
  return () => 100 <= i++;
})();

let ballPlaceCondition = (() => {
  const { x: Xstart, y: Ystart } = game.ball.position;
  let counter = 0;
  let done = false;
  return () => {
    let { x, y } = game.ball.position;
    if (Xstart === x && Ystart === y) {
      counter++;
    }
    if (counter >= 1) {
      done = true;
      counter = 0;
      return false;
    }
    return done;
  };
})();

game.move(ballPlaceCondition);
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
