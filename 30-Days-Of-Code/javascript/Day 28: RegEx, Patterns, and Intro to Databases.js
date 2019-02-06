function main() {
    const N = parseInt(readLine(), 10);
    let array = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        if ((/.+@gmail.com/g).test(emailID)) {
            array.push(firstName);
        }
    }
    console.log(array.sort().join("\n"));
}
