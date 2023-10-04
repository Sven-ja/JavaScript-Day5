class Car {
    brand;
    type;
    color;
    age;

    constructor(brand, type, color, age) {
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.age = age;
    }

    infobox() {
        return `This ${this.color} ${this.brand} is a lovely ${this.type}.`
    };
}

let smallCar = new Car("Smart", "Two-Seater", "blue");
let mediumCar = new Car("Honda", "Civic", "silver", 10);
let bigCar = new Car("Landrover", "Pickup", "green")
document.getElementById("cars").innerHTML += `<li>${smallCar.infobox()}</li>`
document.getElementById("cars").innerHTML += `<li>${mediumCar.infobox()}</li>`
document.getElementById("cars").innerHTML += `<li>${bigCar.infobox()}</li>`

class Animal {
    name;
    breed;
    color;
    age;
    infobox() {
        return `${this.name} is a ${this.color} ${this.breed}.`
    };

    constructor(name, breed, color, age) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.age = age;
    }
}

let cat = new Animal("Tinkerbell", "Shorthair", "black", 7);
let dog = new Animal("Sandwich", "Corgi", "lightbrown", "3");
let horse = new Animal("Puffin", "Shetland", "black-white", 16)

const animalsArr = [cat, dog, horse];

for (let value of animalsArr) {
    document.getElementById("animals").innerHTML += `<li>${value.infobox()}</li>`
}

class Person {
    name;
    profession;
    location;
    age;

    constructor(name, profession, location, age) {
        this.name = name;
        this.profession = profession;
        this.location = location;
        this.age = age;
    }

    infobox() {
        return `My name is ${this.name}, ${this.age}, and I'm a ${this.profession} from the area of ${this.location}.`
    };
}

let peter = new Person("Peter", "carpenter", "Bristol", 35);
let pim = new Person("Pim", "actor", "London", 19);
let mary = new Person("Mary", "professor", "Oxford", 32);
const personArr = [peter, pim, mary];

// A for-each loop needs always inside the parenthes another set of parenthes with the value, index etc.
personArr.forEach((value) => {
    document.getElementById("persons").innerHTML += `<li>${value.infobox()}</li>`
})