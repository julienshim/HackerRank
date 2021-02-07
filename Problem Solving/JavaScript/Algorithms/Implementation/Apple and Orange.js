function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let app = 0;
    let ora = 0;

    apples.forEach(function (apple) {
        let position = apple + a
        if (position >= s && position <= t) {
            app++;
        }
    });

    oranges.forEach(function (orange) {
        let position = orange + b
        if (position >= s && position <= t) {
            ora++;
        }
    });

    console.log(`${app}\n${ora}`)
}
