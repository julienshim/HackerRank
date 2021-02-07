// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    // an array to keep track of perfect or alternating for comparison
    let perfect = [];
    // turn string to array to loop
    let stringArr = s.split("");
    // number of deletions
    let count = 0;
    // iterate through an array
    for (let i = 0; i < stringArr.length; i++) {
        // if the current string equals the previous (or the last in perfect)
        if (stringArr[i] === perfect[perfect.length - 1]) {
            //increase deletion count
            count++
        } else {
            // else add to the perfect arr
            perfect.push(stringArr[i]);
        }
    }
    // return deletion count
    return count;
}
