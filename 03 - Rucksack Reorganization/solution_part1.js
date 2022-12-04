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

function itemToPriority(item) {
  if (/[a-z]/.test(item)) {
    return item.charCodeAt(0) - 96;
  } else {
    return item.charCodeAt(0) - 38;
  }
}

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
      prioritiesSum += itemToPriority(item);
    });
  });

  return prioritiesSum;
}

console.log(commonSackStuff(itemsArr));
