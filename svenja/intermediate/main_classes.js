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

class Motorcyle extends Car {
    numberOfWheels;
    constructor(brand, type, color, age, wheels) {
        super(brand, type, color, age);
        this.numberOfWheels = wheels;
    }

    extendsInfobox() {
        return `${super.infobox()} Has ${this.numberOfWheels} new wheels.`
    };
}

let bike = new Motorcyle("BMW", "Touring Bike", "black", 4, 2);
document.getElementById("cars").innerHTML += `<li>${bike.extendsInfobox()}</li>`

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

class Fish extends Animal {
    habitat;

    constructor(name, breed, color, age, habitat) {
        super(name, breed, color, age);
        this.habitat = habitat;
    }

    needingFreshwater() {
        if (this.habitat == "freshwater") {
            return true;
        } else {
            return false;
        }
    }
}
let fish = new Fish("Olli", "Guppy", "shiny", 1, "freshwater");
document.getElementById("animals").innerHTML += `<li>${fish.infobox()} And it is ${fish.needingFreshwater()}, that it needs freshwater.</li>`;

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

class Hobby extends Person {
    hobbies;

    constructor(name, profession, location, age, hobbies) {
        super(name, profession, location, age);
        this.hobbies = hobbies;
    }

    listHobbies() {
        return `My favorite hobbies are ${this.hobbies[0]}, ${this.hobbies[1]} and ${this.hobbies[2]}.`
    }
}

let john = new Hobby("John", "cook", "Worcester", 42, ["singing", "dancing", "drawing"]);

let peter = new Person("Peter", "carpenter", "Bristol", 35);
let pim = new Person("Pim", "actor", "London", 19);
let mary = new Person("Mary", "professor", "Oxford", 32);
const personArr = [peter, pim, mary];

// A for-each loop needs always inside the parenthes another set of parenthes with the value, index etc.
personArr.forEach((value) => {
    document.getElementById("persons").innerHTML += `<li>${value.infobox()}</li>`
})
document.getElementById("persons").innerHTML += `<li>${john.infobox()} ${john.listHobbies()}</li>`