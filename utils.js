const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const vectorModdifers = {
  x: ({ x, y }) => {
    return { x: -x, y };
  },
  y: ({ x, y }) => {
    return { x, y: -y };
  },
  xy: ({ x, y }) => {
    return { x: -x, y: -y };
  },
  empty: ({ x, y }) => {
    return { x, y };
  },
};

module.exports = { getRandomInt, vectorModdifers };
