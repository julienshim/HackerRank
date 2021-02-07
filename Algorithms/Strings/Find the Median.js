function findMedian(arr) {
    const sortedArr = arr.sort((n1, n2) => n1 - n2);
    return sortedArr[Math.floor(arr.length/2)]
}
