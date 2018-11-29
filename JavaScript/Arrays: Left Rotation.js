function rotLeft(a, d) {
    let shiftingArray = a;
    for (let i = 0; i < d; i++) {
        let shift = shiftingArray.shift();
        shiftingArray.push(shift);
    }
    return shiftingArray;
}