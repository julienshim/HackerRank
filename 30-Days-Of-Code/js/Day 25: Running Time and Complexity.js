function processData(input) {
    //Enter your code here
    let array = input.split("\n");
    for (let i = 1; i <= array[0]; i++) {
        console.log(isPrime(parseInt(array[i])) ? "Prime" : "Not prime");
    }

    function isPrime(c) {
        if (c === 1) {
            return false;
        } else if (c === 2) {
            return true;
        }
        for (let i = 2; i*i <= c; i++) {
            if (c % i === 0) {
                return false;
            }
        }
        return true;
    }
} 
