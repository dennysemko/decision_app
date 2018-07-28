
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age );
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        this.hasMajor() && (description += ` Their major is ${this.major}`);

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    homeLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        this.homeLocation() && (greeting += ` I'm visting from ${this.location} :)`);

        return greeting;
    }
}

const me = new Traveler('Denis Semko', 20, 'Marbella');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());