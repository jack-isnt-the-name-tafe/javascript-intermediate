class Person {
    constructor(name, age, no, street, city, state, postcode) {
        this.name = name;
        this.age = age;
        this.address = new Address(no, street, city, state, postcode);
    }
    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address.no} ${this.address.street}, ${this.address.city} ${this.address.postcode}`);
    }
}

class Address {
    constructor(no, street, city, state, postcode) {
        this.no = no;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postcode = postcode;
    }
}

// START HERE
const person1 = new Person("David Hayter", 35, 40, "Solid St", "Sydney", "NSW", 2000);
const person2 = new Person("John Doe", 67, 13, "Outer St", "Newcastle", "NSW", 2300);

person1.printDetails();
person2.printDetails();