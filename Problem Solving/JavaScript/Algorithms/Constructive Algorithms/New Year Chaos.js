function minimumBribes(q) {
    let numberOfSwaps = 0;
    let chaotic = false;
    for (var i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2) {
            chaotic = true;
            break;
        }
        for (var j = Math.max(0, q[i]-2); j < i; j++) {
            if (q[j] > q[i]) {
                numberOfSwaps++;
            }
        }
    }
    console.log(chaotic ? "Too chaotic" : numberOfSwaps);
}