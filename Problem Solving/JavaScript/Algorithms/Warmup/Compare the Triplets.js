function compareTriplets(a, b) {
    let arrScoreAB = [0,0]
    let currentIndex = 0
    while (currentIndex < a.length) {
        if (a[currentIndex] > b[currentIndex]) {
            arrScoreAB[0] += 1;
        } else if (a[currentIndex] < b[currentIndex]) {
            arrScoreAB[1] += 1;
        }
        currentIndex++;
    }
    return arrScoreAB;
}