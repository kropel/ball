const Ball = require("./Ball");
const Board = require("./Board");
const Vector = require("./Vactor");
const { board: boardSet } = require("./ExamInput");

const board = new Board(boardSet);
const ball1 = new Ball({
  position: { x: 1, y: 1 },
  board,
  vector: new Vector({ x: 1, y: 1 }),
});
const ball2 = new Ball({
  position: { x: 1, y: 4 },
  board,
  vector: new Vector({ x: 1, y: 1 }),
});

const show2dArray = (array) => {
  console.clear();
  array.forEach((row) => {
    console.log(row.join(" "));
  });
};

let boardGame = [board.getBorad()];
while (boardGame.length < 300) {
  ball1.move();
  boardGame.push(ball2.move());
}

let loop = (array) => {
  if (array.length < 1) {
    return 1;
  }
  show2dArray(array.shift());
  setTimeout(loop, 100, array);
};

loop(boardGame);
