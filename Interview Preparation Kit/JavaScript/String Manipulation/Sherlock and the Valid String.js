// Complete the isValid function below.
function isValid(s) {
    // keep track of the number of each letter
    let count = {};
    // count number of each letter
    s.split("").forEach(x => {
        if (count[x]) {
            count[x]++
        } else {
            count[x] = 1
        }
    })
    // standard number to compare
    let number = 0;
    // limit is one, if one doesn't meet standard, limit is true
    let limit = false;
    //loop through count
    for (const x in count) {
        // if standard number hasn't been defined ("0") set number
        if (number === 0) {
            number = count[x] 
        // else if count doesn't meet standard
        } else if (count[x] !== number) {
            // return no if limit has been reached, else set limit to true
            if (limit == true) { return "NO" } else { limit = true }
        }
    }
    // return YES should be reached if all is same
    return "YES";
}
