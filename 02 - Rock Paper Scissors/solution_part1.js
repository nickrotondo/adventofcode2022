const readFileSync = require("fs").readFileSync;

var strategyGuideArr = readFileSync("./puzzle_input.txt", { encoding: "utf8" })
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const throws = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const inputToThrow = {
  A: throws.rock,
  B: throws.paper,
  C: throws.scissors,
  X: throws.rock,
  Y: throws.paper,
  Z: throws.scissors,
};

function roshambo(opponentThrow, myThrow) {
  if (opponentThrow === myThrow) {
    return myThrow + 3;
  }

  if (
    (opponentThrow === throws.rock && myThrow === throws.paper) ||
    (opponentThrow === throws.paper && myThrow === throws.scissors) ||
    (opponentThrow === throws.scissors && myThrow === throws.rock)
  ) {
    return myThrow + 6;
  } else {
    return myThrow;
  }
}

function roshamboWinner(stratGuide) {
  const scores = stratGuide.map((round) => {
    const opponentThrow = inputToThrow[round[0]];
    const myThrow = inputToThrow[round[1]];

    return roshambo(opponentThrow, myThrow);
  });

  return scores.reduce((a, b) => a + b);
}

console.log(roshamboWinner(strategyGuideArr));
