function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let v = 0;
    let h = 0;
    let maxSum = null;
   
    while (v < 4) {
        while (h < 4) {
            let iSet = arr[v][h] + arr[v][h + 1] + arr[v][h + 2] + arr[v + 1][h + 1] + arr[v + 2][h] + arr[v + 2][h + 1] + arr[v + 2][h + 2];
            if (maxSum === null || iSet > maxSum) {
                maxSum = iSet;
            }
            h++;
        }
        h = 0;
        v++;
    }
    console.log(maxSum);
}
