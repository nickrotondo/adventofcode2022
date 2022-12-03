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

const inputToOpponentThrow = {
  A: throws.rock,
  B: throws.paper,
  C: throws.scissors,
};

const inputToMyThrow = {
  A: {
    X: throws.scissors, // lose
    Y: throws.rock, // draw
    Z: throws.paper, // win
  },
  B: {
    X: throws.rock,
    Y: throws.paper,
    Z: throws.scissors,
  },
  C: {
    X: throws.paper,
    Y: throws.scissors,
    Z: throws.rock,
  },
};

function scoring(opponentThrow, myThrow) {
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
    const opponentThrow = inputToOpponentThrow[round[0]];
    const myThrow = inputToMyThrow[round[0]][round[1]];

    return scoring(opponentThrow, myThrow);
  });

  return scores.reduce((a, b) => a + b);
}

console.log(roshamboWinner(strategyGuideArr));
