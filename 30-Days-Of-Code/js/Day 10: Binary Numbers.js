function main() {
    const n = parseInt(readLine(), 10);
    const b2 = n.toString(2);
    let ones = 0;
    let max = 0;
    for (let i = 0; i < b2.length; i++) {
        if (b2[i] === "0") {
            if (ones >= max) {
                max = ones;
            }
            ones = 0;
        } else {
            ones++;
            if (ones >= max) {
                max = ones;
            };
        }
    };
    console.log(max);
};
