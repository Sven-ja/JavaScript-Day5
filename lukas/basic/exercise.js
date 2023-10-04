class Car {
    constructor(name, brand, model, type, color, weight, age) {
        this.name = name;
        this.model = model;
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }
}

class Person {
    constructor(name, weight, age) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }
}

class Animal {
    constructor(name, type, color, weight, age) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }
}

// Create an array to store the objects
const objects = [];

// Create three objects for each class using a loop
for (let i = 0; i < 3; i++) {
    const car = new Car(`Car ${i}`, "Brand", "Model", "Sedan", "Red", 1500, 5);
    const person = new Person(`Person ${i}`, 70, 30);
    const animal = new Animal(`Animal ${i}`, "Mammal", "Brown", 100, 5);

    objects.push(car, person, animal);
}

// Print the created objects
console.log(objects);
