// Problem Statement: You have been given a 2-D array ‘mat’ of size ‘N x M’ where ‘N’ and ‘M’ denote the number of rows and columns, respectively.
// The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the last element of the previous row (if it exists). You are given an integer ‘target’,
// and your task is to find if it exists in the given ‘mat’ or not.

function SearchInSorted2DMatrix(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === targetElement) {
        return true;
      }
    }
  }

  return false;
}

function lowerBound(matrix, m, i) {
  let low = 0;
  let high = m - 1;
  //let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (matrix[mid] === i) return true;
    else if (i > matrix[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return false;
  // return low;
}

function SearchInSorted2DMatrixBetterApproach(matrix, targetElement) {
  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (matrix[i][0] <= targetElement && targetElement <= matrix[i][m - 1]) {
      return lowerBound(matrix[i], m, targetElement);
    }
  }
  return false;
}

function SearchInSorted2DMatrixOptimalApproach(matrix, targetElement) {
  let n = matrix.length;
  let m = matrix[0].length;

  let low = 0,
    high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m); // use this to flat row to 1D
    let column = mid % m; // use this to flat column to 1D

    if (matrix[row][column] === targetElement) return true;
    else if (matrix[row][column] < targetElement) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let targetElement = 8;

// Time Complexity: O(N X M), where N = given row number, M = given column number.
// Reason: In order to traverse the matrix, we are using nested loops running for n and m times respectively.

// Space Complexity: O(1) as we are not using any extra space.
console.log(SearchInSorted2DMatrix(matrix, targetElement));

console.log("Better approach");

// Time Complexity: O(N + logM), where N = given row number, M = given column number.
// Reason: We are traversing all rows and it takes O(N) time complexity. But for all rows, we are not applying binary search rather we are only applying it once for a particular row. That is why the time complexity is O(N + logM) instead of O(N*logM).

// Space Complexity: O(1) as we are not using any extra space.

console.log(SearchInSorted2DMatrixBetterApproach(matrix, targetElement));
console.log("Optimal Approach");
//let answer = SearchInSorted2DMatrixOptimalApproach(matrix, targetElement);

// Time Complexity: O(logN* M), where N = given row number, M = given column number.
// Space Complexity: O(1) as we are not using any extra space.
console.log(SearchInSorted2DMatrixOptimalApproach(matrix, targetElement));

function searchMatrix(matrixx, target) {
  let n = matrixx.length;
  let m = matrixx[0].length;

  // apply binary search:
  let low = 0,
    high = n * m - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;

    if (matrixx[row][col] === target) return true;
    else if (matrixx[row][col] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

let matrixx = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let result = searchMatrix(matrix, 8);
console.log(result ? "true" : "false");
