function maxProductTriplet(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  if (n < 3) {
    return "No triplet exists";
  }
  let areAllPositives = arr.every((el) => el >= 0); // including zero
  let areAllNegatives = arr.every((el) => el < 0);
  if (areAllPositives === true) {
    return [arr[n - 1], arr[n - 2], arr[n - 3]];
  } else if (areAllNegatives === true) {
    return [arr[n - 1], arr[n - 2], arr[n - 3]];
  } else {
    let max1 = arr[0] * arr[1] * arr[n - 1];
    let max2 = arr[n - 1] * arr[n - 2] * arr[n - 3];
    let max = Math.max(max1, max2);
    let ans;
    max1 === max
      ? (ans = [arr[0], arr[1], arr[n - 1]])
      : (ans = [arr[n - 1], arr[n - 2], arr[n - 3]]);
    return ans;
  }
}

// missing case max product = 0;

// let ans = maxProductTriplet([-2, -4, -6, 0, -5, -8, -1]);
// console.log(ans);

let ans = maxProductTriplet([-2, -4]);
console.log(ans);
