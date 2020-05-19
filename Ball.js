class Ball {
  constructor({ position: { x = 1, y = 1 }, board, vector }) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.vector = vector;
    this.extreme = this.getExtreme(this.board.getBorad());
  }

  getExtreme(array = [[]]) {
    let x = array.length - 1;
    let y = array[0].length - 1;
    return { x, y };
  }

  findEmptyCell() {
    const getNextPosition = () => ({
      x: this.x + this.vector.x,
      y: this.y + this.vector.y,
    });
    let nextCellPosition = getNextPosition();
    let isNextCellEmpty = this.board.isEmpty(nextCellPosition);
    if (isNextCellEmpty) {
      return true;
    }
    let isBorderedX = ((x) => x === 0 || x === this.extreme.x)(
      nextCellPosition.x
    );
    let isBorderedY = ((y) => y === 0 || y === this.extreme.y)(
      nextCellPosition.y
    );

    if (!isNextCellEmpty) {
      if (isBorderedX && isBorderedY) {
        this.vector.reversXY();
      } else if (isBorderedX) {
        this.vector.reversX();
      } else if (isBorderedY) {
        this.vector.reversY();
      } else {
        // trafinie w klocek na srodku planszy
        let v = this.vector;
        let vectorOptions = [v.reversXY, v.reversX, v.reversY];
        let random = Math.floor(Math.random() * vectorOptions.length);
        vectorOptions[random].apply(this.vector);
      }
      this.findEmptyCell();
    }
  }

  move() {
    this.findEmptyCell();
    this.board.setEmtyCell({ x: this.x, y: this.y });
    this.x += this.vector.x;
    this.y += this.vector.y;
    this.board.setBallInCell({ x: this.x, y: this.y });

    return this.board.getBorad();
  }
}

module.exports = Ball;
