const FactoryCell = require("./cell/FactoryCell");

class Board {
  constructor(board) {
    this.factoryCell = new FactoryCell();
    this.board = this.setBoard(board);
  }
  setBoard(board) {
    let maxX = board[0].length - 1;
    let maxY = board.length - 1;
    let vectorModifer = "";
    let type = "full";
    return board.map((row, indexY) => {
      let isBorderedY = ((indexY) => indexY === 0 || indexY === maxY)(indexY);

      return row.map((symbol, indexX) => {
        let isBorderedX = ((indexX) => indexX === 0 || indexX === maxX)(indexX);
        let isCellEmpty = ((symbol) => symbol === "0" || symbol === "1")(
          symbol
        );
        let isCellX = ((symbol) => symbol === "X")(symbol);

        if ((isBorderedX && isBorderedY) || isCellX) {
          vectorModifer = "xy";
        } else if (isBorderedX) {
          vectorModifer = "x";
        } else if (isBorderedY) {
          vectorModifer = "y";
        } else if (isCellEmpty) {
          vectorModifer = "e";
          type = "empty";
        } else {
          //klocek na srodku planszy nie "X"
          vectorModifer = "r";
        }

        if (symbol === "1") {
          symbol = "0";
        }

        return this.factoryCell.getCell(symbol, type, vectorModifer);
      });
    });
  }
}
module.exports = Board;
