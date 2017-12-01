

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
    getGreeting(){
        return `Hi. I am ${this.name}.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `. Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting += ` I'm visiting from ${this.location}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Lemuel Reyes', 27, 'Canada');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
