const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {
  let area = 0.0;

  switch (choice) {
    case "square":
      if (typeof side === "number" && !isNaN(side)) {
        area = side ** 2;
      } else {
        return -1;
      }
      break;
    case "rectangle":
      if (
        typeof length === "number" &&
        typeof breadth === "number" &&
        !isNaN(length) &&
        !isNaN(breadth)
      ) {
        area = length * breadth;
      } else {
        return -1;
      }
      break;
    case "circle":
      if (typeof radius === "number" && !isNaN(radius)) {
        area = pi * radius * radius;
      } else {
        return -1;
      }
      break;
    default:
      return -1;
  }
  return area;
};
module.exports = { calculateArea };
