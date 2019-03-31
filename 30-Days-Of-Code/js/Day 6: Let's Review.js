function processData(input) {
    //Enter your code here
    let splits = input.split("\n");
    let newSplits = [];
    for (let i = 1; i < splits.length; i++) {
        let odd = "";
        let even = "";
        for (let j = 0; j < splits[i].length; j++) {
            j % 2 === 0 ? even += splits[i][j] : odd += splits[i][j];
        }
        newSplits.push(`${even} ${odd}`)
    }
    console.log(newSplits.join("\n"));
};
