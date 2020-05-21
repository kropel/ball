const Cell = require("./Cell");
const VectorModifers = require("./VectorModifers");

class FactoryCell {
  constructor() {
    this.Cell = Cell;
    this.vectorModifers = new VectorModifers();
  }
  getCell(symbol, type, vectorModifer) {
    switch (vectorModifer) {
      case "x":
        vectorModifer = this.vectorModifers.reverseX;
        break;
      case "y":
        vectorModifer = this.vectorModifers.reverseY;
        break;
      case "xy":
        vectorModifer = this.vectorModifers.reverseXY;
        break;
      case "r":
        vectorModifer = this.vectorModifers.randomRevers;
        break;
      case "e":
        vectorModifer = this.vectorModifers.empty;
        break;
    }
    return new Cell(symbol, type, vectorModifer);
  }
}

module.exports = FactoryCell;
