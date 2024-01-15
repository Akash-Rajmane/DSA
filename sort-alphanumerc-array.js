/*
Sort the array and separate numbers and strings.
*/

const arr = [1, 5, "fd", 6, "as", "a", "cx", 43, "s", 51, 7];
const sorter = (a, b) => {
  const first = typeof a === "number";
  const second = typeof b === "number";
  if (first && second) {
    return a - b;
  } else if (first && !second) {
    return -1;
  } else if (!first && second) {
    return 1;
  } else {
    return a > b ? 1 : -1;
  }
};
arr.sort(sorter);
console.log(arr);
