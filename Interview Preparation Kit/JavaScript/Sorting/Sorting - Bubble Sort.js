// Complete the countSwaps function below.
function countSwaps(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                // Increase swap count
                count++
                let tmp = a[j];  //Temporary variable to hold the current number
                a[j] = a[j + 1]; //Replace current number with adjacent number
                a[j + 1] = tmp;
            }
        }

    }
    // Print Lines
    console.log(`Array is sorted in ${count} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`);
}
