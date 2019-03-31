function miniMaxSum(arr) {
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    const reducer = (a, b) => a + b;
    console.log(arr.reduce(reducer, -max), arr.reduce(reducer, -min));
}
