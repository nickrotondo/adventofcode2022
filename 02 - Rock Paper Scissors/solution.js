const readFileSync = require("fs").readFileSync;

var strategyGuideArr = readFileSync("./puzzle_input.txt", { encoding: "utf8" })
  .trim()
  .split("\n");

console.log(strategyGuideArr);

function roshamboWinner(stratGuide) {}

console.log(roshamboWinner(strategyGuideArr));
