const Brick = require("./Brick");
const { getRandomInt, vectorModdifers } = require("../utils");

class BrickY extends Brick {
  constructor(position) {
    super(position, "Y");
    this.vectorModiffer = (vector) => {
      this.vectorModiffer = vectorModdifers.empty;
      this.symbol = "0";
      const changeXdirection = !!getRandomInt(2);
      if (changeXdirection) {
        return vectorModdifers.x(vector);
      } else {
        return vectorModdifers.y(vector);
      }
    };
  }
}

module.exports = BrickY;
