class Vector {
  constructor({ x = 1, y = -1 }) {
    this.x = x;
    this.y = y;
  }
  reversX() {
    this.x = -this.x;
  }
  reversY() {
    this.y = -this.y;
  }
  reversXY() {
    this.x = -this.x;
    this.y = -this.y;
  }
}

module.exports = Vector;
