class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greeting () {
        return `Hello there ${this.firstname} ${this.lastname}`;
    }

    addingNumbers ( x, y ) {
        return x + y;
    }

    printHello () {
        return `Hello World`;
    }
}



const mary = new Person('Mary', 'williams');

console.log(mary.greeting())

console.log(mary.addingNumbers(1,2))

console.log(mary.printHello())