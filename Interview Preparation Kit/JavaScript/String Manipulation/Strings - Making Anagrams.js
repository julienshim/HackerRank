// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let arrA = {};
    let arrB = {};
    let common = [];
    let count = 0;

    // Build an array of unique letter to check commonalities later on
    a.split("").concat(b.split("")).forEach(x => {
        if (common.includes(x) === false) {
            common.push(x);
        }
    });

    // Count how many of each letter of String A
    a.split("").forEach(x => {
        if (arrA[x]) {
            arrA[x]++;
        } else {
            arrA[x] = 1
        }
    })

    // Count how many of each letter of String B
    b.split("").forEach(x => {
        if (arrB[x]) {
            arrB[x]++;
        } else {
            arrB[x] = 1
        }
    })

    // If there is a shared letter count the absolute difference in numbers, otherwise,         count the different letter
    common.forEach(x => {
        if (arrA[x] && arrB[x]) {
            count += Math.abs(arrA[x] - arrB[x]);
        } else if (arrA[x]) {
            count += arrA[x];
        } else {
            count += arrB[x];
        }
    })

    // Return count
    return count;
}
