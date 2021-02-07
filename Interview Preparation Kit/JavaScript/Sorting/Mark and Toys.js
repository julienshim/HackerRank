function maximumToys(prices, k) {
    const sorted = prices.sort((a, b) => { return a - b })
    let toys = [];
    let position = 0;
    while (toys.reduce((a, b) =>  a + b, 0) < k) {
        toys.push(prices[position]);
        position++
    }
    return toys.length - 1;
}
