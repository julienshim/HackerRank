var array2A = [
  [1, 1, 1, 0, 0, 0], // Row 0            array2[0]   [0-1-2]    [3, 4, 5]
  [0, 1, 0, 0, 0, 0], // Row 1            array2[1]     [1]         [4]
  [1, 1, 1, 0, 0, 0], // Row 2            array2[2]   [0-1-2]    [3, 4, 5]
  [0, 0, 0, 0, 0, 0], // Row 3
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
  // 0  1  2  3
];

var array2B = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

var array2C = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr) {
  let row = 0;
  let column = 0;
  let stop = 3;
  let maxSum = undefined; //CRITICAL, DO NOT ASSUME MAX IS A POSITIVE INTEGER
  while (row < 4) {
    while (column < 4) {
      let newSum = 0;
      for (let i = column; i < stop; i++) {
        newSum += arr[row][i];
        if (i === column + 1) {
          newSum += arr[row + 1][i];
        }
        newSum += arr[row + 2][i];
      }
      if (newSum > maxSum || maxSum === undefined) {
        maxSum = newSum;
      }
      column++;
      stop++;
    }
    column = 0;
    stop = 3;
    row++;
  }
  return maxSum;
}

hourglassSum(array2C);
