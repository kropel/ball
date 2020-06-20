const Board = require("./Board");
const Ball = require("./Ball");

class GameConfigurtor {
  constructor(board) {
    this.ballPosition = null;
    this.board = new Board(this.getClearBord(board)).board;
    this.ball = new Ball(this.ballPosition, "1");
  }
  getClearBord(board) {
    return board.map((row, rowIndex) =>
      row.map((element, columnIndex) => {
        if (element === "1") {
          this.ballPosition = { x: columnIndex, y: rowIndex };
          return "0";
        } else {
          return element;
        }
      })
    );
  }
}

module.exports = GameConfigurtor;
