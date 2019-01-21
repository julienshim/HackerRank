class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, score) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.scores = score;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    printPerson() {
        console.log(`Name: ${this.lastName}, ${this.firstName}`);
        console.log(`ID: ${this.id}`)
    }
    calculate() {
        let sum = 0;
        this.scores.forEach(function (score) {
            sum += score;
        });
        const average = sum / this.scores.length;
        if (average > 89){
            return 'O';
        } else if (average > 79){
            return 'E';
    
        } else if (average > 69){
            return 'A';
    
        } else if (average > 54){
            return 'P';
    
        } else if (average > 39){
            return 'D';
        } else {
            return 'T';
        }
    }
}
