const readFileSync = require("fs").readFileSync;

let input = readFileSync("./puzzle_input.txt", { encoding: "utf8" }).trimEnd();

const [inputStacks, inputMoves] = input.split("\n\n");

const formattedStacks = inputStacks
  .split("\n")
  .map((line) => [...line].filter((value, index) => index % 4 === 1));

const stackNumbers = formattedStacks.pop();
const formattedMoves = inputMoves.split("\n");

const stacks = {};
const moves = [];

for (const line of formattedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[stackNumbers[i]]) {
        stacks[stackNumbers[i]] = [];
      }

      stacks[stackNumbers[i]].unshift(line[i]);
    }
  }
}

for (const move of formattedMoves) {
  const matches = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  moves.push({
    count: Number(matches[1]),
    from: Number(matches[2]),
    to: Number(matches[3]),
  });
}

// console.log({ stacks, moves });

function makeMove(stacks, move) {
  const crates = stacks[move.from].splice(-move.count, move.count);
  stacks[move.to] = stacks[move.to].concat(crates);
}

function stackReorg(stacks, moves) {
  const stacksCopy = JSON.parse(JSON.stringify(stacks));

  for (const move of moves) {
    makeMove(stacksCopy, move);
  }

  let result = stackNumbers
    .map((stackNumber) => {
      const stack = stacksCopy[stackNumber];
      return stack.pop();
    })
    .join("");

  return result;
}

console.log("Solution:", stackReorg(stacks, moves));
