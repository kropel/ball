class Vector {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }
  reversX() {
    this.x = -this.x;
  }
  reversY() {
    this.y = -this.y;
  }
  get x() {
    return this.x;
  }
  get y() {
    return this.y;
  }
  set x(){}
  set y(){}
}

module.exports = Vector;
