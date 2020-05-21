const Board = require("./Board");
const { board } = require("./ExamInput");

const b = new Board(board);
b.board.forEach((row) => row.forEach((item) => console.log(item.symbol)));
