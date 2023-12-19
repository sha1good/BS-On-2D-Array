function MedianOfRowWiseSortedMatrix(array) {
  let n = array.length;
  let m = array[0].length;

  //Applying  Binarry search
  let result = 0;

  let newArray = array.flat(1).sort((a, b) => a - b);

  let middle = Math.floor(newArray.length / 2);

  if (newArray.length % 2 === 0) {
    result = (newArray[middle - 1] + newArray[middle]) / 2;
  } else {
    result = newArray[middle];
  }

  return result;
}

let array = [
  [1, 4, 9],
  [2, 5, 6],
  [3, 8, 7],
];

console.log(MedianOfRowWiseSortedMatrix(array));
