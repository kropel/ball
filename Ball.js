class Ball {
  constructor(position, symbol) {
    this.position = position;
    this.symbol = symbol;
    this.vector = { x: 1, y: 1 };
  }
}

module.exports = Ball;
