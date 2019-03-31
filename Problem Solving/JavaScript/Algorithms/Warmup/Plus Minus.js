function plusMinus(arr) {
    let posInt = 0;
    let negInt = 0;
    let zeroInt = 0;
    arr.forEach(function(element){
        if (element > 0) {
            posInt++;
        } else if (element < 0) {
            negInt++;
        } else {
            zeroInt++;
        }
    })
    console.log((posInt/arr.length).toFixed(6))
    console.log((negInt/arr.length).toFixed(6))
    console.log((zeroInt/arr.length).toFixed(6));
}