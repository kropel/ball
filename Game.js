const GameConfigurator = require("./GameConfigurator");

class Game {
  constructor(board) {
    this.gameConfig = new GameConfigurator(board);
    this.board = this.gameConfig.board;
    this.ball = this.gameConfig.ball;
    this.snapshots = [];
  }
  makeSnapshot() {
    let snapshot = this.board.map((row, rowIndex) =>
      row.map((ele, columnIndex) => {
        if (
          rowIndex === this.ball.position.y &&
          columnIndex === this.ball.position.x
        ) {
          return this.ball.symbol;
        } else {
          return ele.symbol;
        }
      })
    );
    this.snapshots.push(snapshot);
  }

  findNextEmptyCell() {
    let isEmpty = false;
    while (!isEmpty) {
      let { x, y } = this.ball.position;
      let nextPosition = {
        x: x + this.ball.vector.x,
        y: y + this.ball.vector.y,
      };
      if (this.board[nextPosition.y][nextPosition.x].symbol === "0") {
        isEmpty = true;
        this.ball.position = nextPosition;
      } else {
        this.ball.vector = this.board[nextPosition.y][
          nextPosition.x
        ].vectorModiffer(this.ball.vector);
      }
    }
  }

  move(condition) {
    while (true) {
      this.makeSnapshot();
      this.findNextEmptyCell();
      if (condition()) {
        break;
      }
    }
  }
}

module.exports = Game;
