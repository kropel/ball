class Ball {
  constructor(startPosition, symbol) {
    this.position = startPosition;
    this.symbol = symbol;
    this.vector = { x: 1, y: 1 };
  }
  moveTo(position) {}
}

module.exports = Ball;
