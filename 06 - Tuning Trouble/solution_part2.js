const readFileSync = require("fs").readFileSync;

let signal = readFileSync("./puzzle_input.txt", { encoding: "utf8" }).trimEnd();

console.log({ signal });

function isUnique(arr) {
  return new Set(arr).size === arr.length;
}

function tuning(signal) {
  let slidingWindow = [];

  for (let i = 0; i < signal.length; i++) {
    slidingWindow[i % 14] = signal[i];

    if (slidingWindow.length === 14 && isUnique(slidingWindow)) {
      return i + 1;
    }
  }
}

console.log(tuning(signal));
