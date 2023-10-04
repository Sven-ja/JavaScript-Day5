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

class Motorbike extends Car {
    constructor(name, brand, model, type, color, weight, age, wheels) {
        super(name, brand, model, type, color, weight, age);
        this.wheels = wheels;
    }
}

class FishInWater extends Animal {
    constructor(name, type, color, weight, age, typeOfWater) {
        super(name, type, color, weight, age);
        this.typeOfWater = typeOfWater;
    }
}

class Employee extends Person {
    constructor(name, weight, age, jobPosition) {
        super(name, weight, age);
        this.jobPosition = jobPosition;
    }
}

// Create an array to store the objects
const objects = [];

// Create three objects for each class using a loop
for (let i = 0; i < 3; i++) {
    const car = new Motorbike(`Car ${i}`, "Brand", "Model", "Sedan", "Red", 1500, 5,2);
    const person = new Employee(`Person ${i}`, 70, 30,"ceo");
    const animal = new FishInWater(`Animal ${i}`, "Mammal", "Brown", 100, 5,"salt");

    objects.push(car, person, animal);
}

// Print the created objects
console.log(objects);
