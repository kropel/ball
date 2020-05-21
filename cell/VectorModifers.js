class VectorModifers {
  reverseX() {
    return ({ x, y }) => ({ x: -x, y });
  }
  reverseY() {
    return ({ x, y }) => ({ x, y: -y });
  }
  reverseXY() {
    return ({ x, y }) => ({ x: -x, y: -y });
  }
  randomRevers() {
    return ({ x, y }) => {
      let reverseMethods = [this.reverseX, this.reverseY, this.reverseXY];
      return reverseMethods[
        Math.floor(Math.random() * reverseMethods.length)
      ].apply({ x, y });
    };
  }
  empty() {
    return ({ x, y }) => ({ x, y });
  }
}

module.exports = VectorModifers;
