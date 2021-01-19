// CREATE A NEW COMBINATION
export const createCombination = () => {
  let combinationPart1 = colors[Math.floor(Math.random() * colors.length)];
  let combinationPart2 = colors[Math.floor(Math.random() * colors.length)];
  let combinationPart3 = colors[Math.floor(Math.random() * colors.length)];
  let combinationPart4 = colors[Math.floor(Math.random() * colors.length)];

  return [
    combinationPart1,
    combinationPart2,
    combinationPart3,
    combinationPart4,
  ];
};

// POSSIBLE COLORS
export const colors = ["red", "blue", "green", "pink", "yellow", "purple"];
