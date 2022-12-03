const readFileSync = require("fs").readFileSync;

let itemsArr = readFileSync("./puzzle_input.txt", { encoding: "utf8" })
  .trim()
  .split("\n")
  .map((items) => {
    const mid = Math.ceil(items.length / 2);
    const firstHalf = items.slice(0, mid);
    const secondHalf = items.slice(mid);

    return [firstHalf, secondHalf];
  });

console.log("ItemsArr: ", itemsArr);

const itemPriorityMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

function commonSackStuff(itemsArr) {
  let prioritiesSum = 0;

  itemsArr.forEach((items) => {
    const firstCompartment = items[0];
    const secondCompartment = items[1];

    let itemsInCommonSet = new Set();

    for (let i = 0; i < firstCompartment.length; i++) {
      const currentItem = firstCompartment[i];

      if (secondCompartment.includes(currentItem)) {
        itemsInCommonSet.add(currentItem);
      }
    }

    itemsInCommonSet.forEach((item) => {
      prioritiesSum += itemPriorityMap[item];
    });
  });

  return prioritiesSum;
}

console.log(commonSackStuff(itemsArr));
