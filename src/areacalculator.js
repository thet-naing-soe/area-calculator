const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {
  if (typeof choice !== "string") return -1;

  const isValidNumber = (num) => typeof num === "number" && !isNaN(num);

  switch (choice.toLowerCase()) {
    case "square":
      return isValidNumber(side) ? side * side : -1;

    case "rectangle":
      return isValidNumber(length) && isValidNumber(breadth)
        ? length * breadth
        : -1;

    case "circle":
      return isValidNumber(radius) ? pi * radius * radius : -1;

    default:
      return -1;
  }
};
module.exports = { calculateArea };
