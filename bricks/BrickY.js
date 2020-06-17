const Brick = require("./Brick");
const { getRandomInt, vectorModdifers } = require("../utils");

class BrickY extends Brick {
  constructor(position) {
    super(position, "Y");
    this.vectorModiffer = ({ x, y }) => {
      this.vectorModiffer = super.vectorModiffer;
      this.symbol = "0";
      const changeXdirection = !!getRandomInt(2);
      if (changeXdirection) {
        return vectorModdifers.x(x, y);
      } else {
        return vectorModdifers.y(x, y);
      }
    };
  }
}

module.exports = BrickY;
