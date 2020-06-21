const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const methods = {
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

const vectorModdifers = {
  ...methods,
  random: (vector, disallowed = ["empty"]) => {
    const keys = Object.keys(methods).filter(
      (item) => !disallowed.includes(item)
    );
    let randomIndex = getRandomInt(keys.length);
    return methods[keys[randomIndex]](vector);
  },
};

module.exports = { getRandomInt, vectorModdifers };
