const Vector = require("./Vactor");
const board = require("./ExamInput");

class Ball {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.vector = new Vector({ x: 1, y: 1 });
  }
  get x(){
      return this.x;
  }
  get y(){
      return this.y;
  }
  set x(){}
  set y(){}

  sum2DArrays(...arras){
    return arras.filter((previouse, current, index, array)=> {
        
    },[])
  }

  move(){
      let nextCell = 
  }
}
