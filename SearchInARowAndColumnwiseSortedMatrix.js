// Problem Statement: You have been given a 2-D array ‘mat’ of size ‘N x M’ where ‘N’ and ‘M’ denote the number of rows and columns, respectively. The elements of each row and each column are sorted in non-decreasing order.
// But, the first element of a row is not necessarily greater than the last element of the previous row (if it exists).
// You are given an integer ‘target’, and your task is to find if it exists in the given ‘mat’ or not.

function binarySearch(matrix, column, targetElement) {
  let low = 0;
  let high = column - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (matrix[mid] === targetElement) return true;
    else if (matrix[mid] < targetElement) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}

function SearchInARowAndColumnwiseSortedMatrix(matrix, targetElement) {
  let row = matrix.length;
  let column = matrix[0].length;

  for (let i = 0; i < row; i++) {
    const flag = binarySearch(matrix[i], column, targetElement);
    if (flag) return true;
  }

  return false;
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

let targetElement = 14;

// Complexity Analysis
// Time Complexity: O(N*logM), where N = given row number, M = given column number.
// Reason: We are traversing all rows and it takes O(N) time complexity. And for all rows, we are applying binary search. So, the total time complexity is O(N*logM).

// Space Complexity: O(1) as we are not using any extra space.
console.log(SearchInARowAndColumnwiseSortedMatrix(matrix, targetElement));

console.log("Optimal Solution ");
function searchElementOptimalSolution(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  let row = 0;
  let col = m - 1;

  // Traverse the matrix from (0, m-1):
  while (row < n && col >= 0) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] < target) row++;
    else col--;
  }
  return false;
}

const result = searchElementOptimalSolution(matrix, 8);
console.log(result ? "true" : "false");
