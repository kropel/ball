class Brick {
  constructor(
    position,
    symbol = "0",
    vectorModiffer = ({ x, y }) => {
      return { x, y };
    },
    bordered = null
  ) {
    this.position = position;
    this.symbol = symbol;
    this.vectorModiffer = vectorModiffer;
    this.bordered = bordered;
  }
}

module.exports = Brick;
