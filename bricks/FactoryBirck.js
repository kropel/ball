const Brick0 = require("./Brick");
const BrickX = require("./BrickX");
const BrickY = require("./BrickY");

class FactoryBrick {
  getBrick({ position, symbol, bordered }) {
    switch (symbol) {
      case "0":
        return new Brick0(position);
        break;
      case "Y":
        return new BrickY(position);
        break;
      case "X":
        return new BrickX(position, bordered);
        break;
      default:
        throw new Error(`There is no such brick's name '${symbol}'`);
    }
  }
}

module.exports = FactoryBrick;
