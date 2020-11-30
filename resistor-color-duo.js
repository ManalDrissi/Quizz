//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (c) => {
  let num = "";
  const color = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  c.forEach((element, index) => {
    if (index < 2) {
      num += color.indexOf(element);
    }
  });
  return parseInt(num);
};
