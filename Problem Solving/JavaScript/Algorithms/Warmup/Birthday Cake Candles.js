function birthdayCakeCandles(ar) {
    const maxHeight = Math.max.apply(null, ar);
    let count = 0;
    ar.forEach(function(val){
        if (val === maxHeight) {
            count += 1;
        }
    });
    return count;
}
