const readFileSync = require("fs").readFileSync;

let sectionAssignmentGroups = readFileSync("./puzzle_input.txt", {
  encoding: "utf8",
})
  .trim()
  .split("\n")
  .map((sectionAssignments) =>
    sectionAssignments
      .split(",")
      .map((sectionAssignment) => sectionAssignment.split("-").map(Number))
  );

// Check what the input looks like
// sectionAssignmentGroups.forEach((element) => {
//   console.log(element);
// });

// Check what the input looks like
// console.log({ sectionAssignmentGroups });

function findOverlapAssignments(sectionAssignmentGroups) {
  let count = 0;

  sectionAssignmentGroups.forEach((sectionAssignments) => {
    if (
      (sectionAssignments[0][0] <= sectionAssignments[1][0] &&
        sectionAssignments[0][1] >= sectionAssignments[1][0]) ||
      (sectionAssignments[1][0] <= sectionAssignments[0][0] &&
        sectionAssignments[1][1] >= sectionAssignments[0][0])
    ) {
      count++;
    }
  });

  return count;
}

console.log(findOverlapAssignments(sectionAssignmentGroups));
