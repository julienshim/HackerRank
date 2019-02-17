function diagonalDifference(arr) {
    let diag1sum = 0;
    let diag2sum = 0;
    let indexFwd = 0;
    let indexRev = arr.length-1;
    while(indexFwd < arr.length) {
        diag1sum += arr[indexFwd][indexFwd];
        diag2sum += arr[indexFwd][indexRev];
        indexFwd++;
        indexRev--;
    }
    return (diag1sum >= diag2sum) ? diag1sum - diag2sum : diag2sum - diag1sum;
}