function checkMagazine(magazine, note) {
    let check = 'Yes';
    note.forEach(function (word) {
        if (!magazine.includes(word)) {
            check = 'No';
        }
        magazine.splice(magazine.indexOf(word), 1)
    })
    console.log(check);
}
