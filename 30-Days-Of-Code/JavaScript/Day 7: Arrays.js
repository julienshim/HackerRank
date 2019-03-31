function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let revArr = []
    for (let i = n - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    console.log(revArr.join(" "));
}
