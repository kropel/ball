const FactoryBrick = require("./bricks/FactoryBirck");
const { board } = require("./ExamInput");

class Board {
  constructor() {
    this.factory = new FactoryBrick();
    this.board = this.getBoard(board);
  }
  getBoard(board) {
    const indexBorderX = board[0].length - 1;
    const indexBorderY = board.length - 1;

    return board.map((row, rowIndex) => row.map((element, columnIndex) => {}));
  }
}
