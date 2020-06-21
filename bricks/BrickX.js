const Brick = require("./Brick");
const { vectorModdifers, getRandomInt } = require("../utils");

class BrickX extends Brick {
  constructor(position, bordered) {
    super(position, "X");
    this.vectorModiffer = this.setVectorModiffer(bordered);
  }
  setVectorModiffer(bordered) {
    switch (bordered) {
      case "xy":
        return vectorModdifers.xy;
        break;
      case "x":
        return vectorModdifers.x;
        break;
      case "y":
        return vectorModdifers.y;
        break;
      default:
        return vectorModdifers.random;
        break;
    }
  }
}

module.exports = BrickX;
