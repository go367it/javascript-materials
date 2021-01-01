class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greeting () {
        return `Hello there ${this.firstname} ${this.lastname}`;
    }
}

class Customer extends Person {
    constructor(firstname, lastname, phone, membership) {
        super(firstname, lastname);

        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('john', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting())