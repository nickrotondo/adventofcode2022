const readFileSync = require("fs").readFileSync;

var elves = readFileSync("./puzzle_input.txt", { encoding: "utf8" })
  .trim()
  .split("\n\n");

function calorieCounter1(elves) {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  return Math.max(...calories);
}

function calorieCounter2(elves) {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  return calories
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((previous, current) => previous + current, 0);
}

console.log(calorieCounter1(elves));
console.log(calorieCounter2(elves));
