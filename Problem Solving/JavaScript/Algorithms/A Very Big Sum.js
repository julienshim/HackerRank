function aVeryBigSum(ar) {
    let sum = 0;
    ar.forEach(function(bigInt){
        sum += bigInt;
    })
    return sum;
}