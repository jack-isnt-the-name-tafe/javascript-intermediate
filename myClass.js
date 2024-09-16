class Person {
    constructor(name, age, no, street, city, state, postcode) {
        this._name = name;
        this._age = age;
        this._address = new Address(no, street, city, state, postcode);
    }
    printDetails() {
        console.log(`Name: ${this._name}, Age: ${this._age}, Address: ${this._address._no} ${this._address._street}, ${this._address._city} ${this._address._postcode}`);
    }
}

class Address {
    constructor(no, street, city, state, postcode) {
        this._no = no;
        this._street = street;
        this._city = city;
        this._state = state;
        this._postcode = postcode;
    }
}

class Member extends Person {
    constructor(name, age, no, street, city, state, postcode, memberID, memberDate, memberTier) {
        super(name, age, no, street, city, state, postcode);
        this._memberID = memberID;
        this._memberDate = memberDate;
        this._memberTier = memberTier;
    }
    printDetails() {
        console.log(`Member ID: ${this._memberID}, Membership Creation Date: ${this._memberDate}, Membership Tier: ${this._memberTier}, Name: ${this._name}, Age: ${this._age}, Address: ${this._address._no} ${this._address._street}, ${this._address._city} ${this._address._postcode}`);
    }
}

// START HERE
const person1 = new Person("David Hayter", 35, 40, "Solid St", "Sydney", "NSW", 2000);
const person2 = new Person("John Doe", 67, 13, "Outer St", "Newcastle", "NSW", 2300);

const member1 = new Member("Veni Overson", 25, 1, "Nowhere St", "Nowhere City", "NSW", 2000, 1, new Date(), "Gold");

person1.printDetails();
person2.printDetails();

member1.printDetails();