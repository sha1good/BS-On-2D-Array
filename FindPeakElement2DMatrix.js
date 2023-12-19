// A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

// You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

// You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

function findMaxIndexOfColumnOfMid(matrix, n, col) {
  let maxValue = -1;
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (matrix[i][col] > maxValue) {
      maxValue = matrix[i][col];
      index = i;
    }
  }

  return index;
}

function FindPeakElement2DMatrix(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let rowOfMid = findMaxIndexOfColumnOfMid(matrix, n, mid); // this will provide the max value  of the column where the mid is found

    let leftOfMid = mid - 1 >= 0 ? matrix[rowOfMid][mid - 1] : -1; // get the left element to the mid
    let rightOfMid = mid + 1 < m ? matrix[rowOfMid][mid + 1] : -1; // get the right element to the mid

    if (
      leftOfMid < matrix[rowOfMid][mid] &&
      matrix[rowOfMid][mid] > rightOfMid
    ) {
      // I have found my peak
      return [rowOfMid, mid];
    } else if (matrix[rowOfMid][mid] < leftOfMid) {
      //i.e  20 > 10 and I will look toward the left
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return [-1, -1];
}

let matrix = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

//Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.
console.log(FindPeakElement2DMatrix(matrix));
