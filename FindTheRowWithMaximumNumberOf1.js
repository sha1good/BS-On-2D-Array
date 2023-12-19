// Problem Statement: You have been given a non-empty grid ‘mat’ with ‘n’ rows and ‘m’ columns consisting of only 0s and 1s. All the rows are sorted in ascending order.
// Your task is to find the index of the row with the maximum number of ones.
// Note: If two rows have the same number of ones, consider the one with a smaller index. If there’s no row with at least 1 zero, return -1.

function FindTheRowWithMaximumNumberOf1BruteFoce(maxtrix) {
  let rows = maxtrix.length;
  let columns = maxtrix[0].length;

  let rowIndex = -1;
  let countOneMax = 0;

  for (let i = 0; i < rows; i++) {
    let countOne = 0;
    for (let j = 0; j < columns; j++) {
      if (maxtrix[i][j] === 1) {
        countOne = countOne + 1;
      }
      if (countOne > countOneMax) {
        countOneMax = countOne;
        rowIndex = i;
      }
    }
  }

  return rowIndex;
}

function lowerBound(maxtrix, column, i) {
  let low = 0;

  let high = column - 1; // the  last element in the array
  let result = column;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (maxtrix[mid] >= i) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

function FindTheRowWithMaximumNumberOf1OptimalSolution(matrix) {
  let row = matrix.length;
  let column = maxtrix[0].length;
  let countMax = 0;

  let rowIndex = -1;

  // traverse the rows:
  for (let i = 0; i < row; i++) {
    //  // get the number of 1's from the column array:, so column - lowerBound(maxtrix[i],row, i) === m - where the mid of 1 occur
    // console.log(i);

    let countone = column - lowerBound(maxtrix[i], column, 1);
    // console.log(countone);
    if (countone > countMax) {
      countMax = countone;
      rowIndex = i;
    }
  }

  return rowIndex;
}

let maxtrix = [
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
];

// Time Complexity: O(n X m), where n = given row number, m = given column number.
// Reason: We are using nested loops running for n and m times respectively.

// Space Complexity: O(1) as we are not using any extra space.
console.log(FindTheRowWithMaximumNumberOf1BruteFoce(maxtrix));

console.log("Optimal Solution");

// Time Complexity: O(n X logm), where n = given row number, m = given column number.
// Reason: We are using a loop running for n times to traverse the rows. Then we are applying binary search on each row with m columns.

// Space Complexity: O(1) as we are not using any extra space.

console.log(FindTheRowWithMaximumNumberOf1OptimalSolution(maxtrix));
