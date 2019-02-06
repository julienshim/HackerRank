function minimumSwaps(arr) {
    let array = [...arr];
    /* sort() method assumes you are sorting strings. Below specifies how to sort numbers in ascending. If negative value, a before b. If 0, no change in order. If positive value, b before a. */
    let arraySorted = arr.sort((a, b) => a - b);
    let swaps = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] != arraySorted[i]) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] === arraySorted[i]) {
                    let tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                    swaps++
                    break;
                }
            }
        }
    }
    return swaps;
}
