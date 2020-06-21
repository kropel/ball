const Brick = require("./Brick");
const { vectorModdifers } = require("../utils");

class BrickY extends Brick {
  constructor(position) {
    super(position, "Y");
    this.vectorModiffer = (vector) => {
      this.vectorModiffer = vectorModdifers.empty;
      this.symbol = "0";
      return vectorModdifers.random(vector);
    };
  }
}

module.exports = BrickY;
