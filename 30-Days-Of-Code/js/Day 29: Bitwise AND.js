function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        function ab(n, k) {
            var max = 0;
            for (let b = 0; b <= n; b++) {
                for (let a = 0; a < b; a++) {
                    let ab = a & b;
                    if (ab < k && ab > max) {
                        max = ab;
                    }
                }
            }

            return max;
        }

        console.log(ab(n, k));

    }
}
