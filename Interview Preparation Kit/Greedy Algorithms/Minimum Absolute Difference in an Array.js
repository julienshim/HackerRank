function minimumAbsoluteDifference(arr) {
    const sorted = arr.sort();
    let difference = Math.abs(arr[arr.length - 1] - arr[0]);
    for (let i = 0; i < arr.length - 1; i++) {
        const candidate = Math.abs(arr[i + 1] - arr[i]);
        if (candidate < difference) {
            difference = candidate;
        }
    }
    return difference;
}
