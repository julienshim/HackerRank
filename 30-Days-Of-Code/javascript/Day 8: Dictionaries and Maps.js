function processData(input) {
    //Enter your code here
    let people = new Map();
    let split = input.split("\n");
    let n = parseInt(split[0]);
    let m = split.length;
    for (let i = 1; i < m; i++) {
        if (i <= n) {
            let keyPair = split[i].split(" ");
            people.set(keyPair[0], parseInt(keyPair[1], 10));
        } else {
            people.get(split[i]) !== undefined ?
            console.log(`${split[i]}=${people.get(split[i])}`) :
            console.log('Not found');       
        };
    };
};
