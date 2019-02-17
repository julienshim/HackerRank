function simpleArraySum(ar) {
    let intArrSum = 0;
    ar.forEach(function(int){
        intArrSum += int;
    })
    return intArrSum;
}