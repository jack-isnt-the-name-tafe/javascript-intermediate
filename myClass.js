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

function toUpperName(person) {
    return person._name.toUpperCase();
}

// START HERE
const membersList = [];
membersList.push(new Member("David Hayter", 35, 40, "Solid St", "Sydney", "NSW", 2000, 1, new Date(), "Bronze"));
membersList.push(new Member("John Doe", 67, 13, "Outer St", "Newcastle", "NSW", 2300, 2, new Date(), "Silver"));
membersList.push(new Member("Veni Overson", 25, 1, "Nowhere St", "Nowhere City", "NSW", 2000, 1, new Date(), "Gold"));

membersList.forEach(element => {
    element.printDetails();
});

const newMembersList = membersList.map(
    (member) => {
        return `
        <div class="member">
            <div class="id">ID: ${member._memberID}</div>
            <div class="tier">Membership Tier: ${member._memberTier}</div>
            <div class="date">Membership Created: ${member._memberDate}</div>
            <div class="name">Name: ${member._name}</div>
            <div class="age">Age: ${member._age}</div>
            <div class="address">Address: ${member._address._no} ${member._address._street}, ${member._address._city} ${member._address._postcode}</div>
        </div>
        `;
    }
);

newMembersList.forEach(member => {
    const ele = document.createElement("div");
    ele.innerHTML += member;
    document.getElementById("container").appendChild(ele);
});