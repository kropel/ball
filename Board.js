class Board {
  constructor(board) {
    this.board = board;
    this.empty = "0";
    this.ball = "1";
  }
  isEmpty({ x, y }) {
    return this.board[x][y] === this.empty;
  }
  setEmtyCell({ x, y }) {
    this.board[x][y] = this.empty;
  }
  setBallInCell({ x, y }) {
    this.board[x][y] = this.ball;
  }
  getBorad() {
    return this.board.map((row) => [...row]);
  }
}

module.exports = Board;
