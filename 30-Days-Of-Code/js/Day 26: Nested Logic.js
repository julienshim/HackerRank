function processData(input) {
    //Enter your code here
    const [a, b] = input.split("\n");
    const [actualDay, actualMonth, actualYear] = a.split(" ").map(Number);
    const [expectedDay, expectedMonth, expectedYear] = b.split(" ").map(Number);
    const deltaM = actualMonth - expectedMonth;
    const deltaD = actualDay - expectedDay;
    const deltaY = actualYear - expectedYear;
    console.log(
        (deltaY > 0) ? 10000 : (deltaM > 0 && deltaY == 0)
            ? deltaM * 500
            : (deltaD > 0 && deltaY == 0) ? deltaD * 15 : 0);
} 
