function gradingStudents(grades) {
    let roundedGrades = [];
    grades.forEach(function(score){
        let difference = 5 - score % 5;
        roundedGrades.push((score >= 38 && difference < 3) ? (score + difference) : score);
    })
    return roundedGrades;
}