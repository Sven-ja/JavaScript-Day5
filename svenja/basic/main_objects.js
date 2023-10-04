// THEME: CARS
let smallCar = {
    brand: "Smart",
    type: "Two-Seater",
    color: "blue",
    age: 3,
    commericalText: function () {
        return `This ${this.color} ${this.brand} is a lovely ${this.type}.`
    }
}

let mediumCar = {
    brand: "Honda",
    type: "Civic",
    color: "silver",
    age: 10,
    commericalText: function () {
        return `This ${this.color} ${this.brand} is a lovely ${this.type}.`
    }
}

let bigCar = {
    brand: "Landrover",
    type: "Pickup",
    color: "green",
    age: 7,
    commericalText: function () {
        return `This ${this.color} ${this.brand} is a lovely ${this.type}.`
    }
}

document.querySelector("#cars").innerHTML += `<p>${smallCar.commericalText()}</p>`
document.querySelector("#cars").innerHTML += `<p>${mediumCar.commericalText()}</p>`
document.querySelector("#cars").innerHTML += `<p>${bigCar.commericalText()}</p>`


// THEME: ANIMALS
let cat1 = {
    name: "Tinkerbell",
    breed: "Shorthair",
    color: "black",
    age: 2,
    infobox: function () {
        return `${this.name} is a ${this.color} ${this.breed}.`
    }
}

let cat2 = {
    name: "Honey",
    breed: "Persian",
    color: "caramell",
    age: 5,
    infobox: function () {
        return `${this.name} is a ${this.color} ${this.breed}.`
    }
}

let cat3 = {
    name: "Sugar",
    breed: "Main Coon",
    color: "white",
    age: 8,
    infobox: function () {
        return `${this.name} is a ${this.color} ${this.breed}.`
    }
}

document.getElementById("cats").innerHTML += `<p>${cat1.infobox()}</p>`
document.getElementById("cats").innerHTML += `<p>${cat2.infobox()}</p>`
document.getElementById("cats").innerHTML += `<p>${cat3.infobox()}</p>`


// THEME: PERSONS

let person1 = {
    name: "Peter",
    profession: "carpenter",
    location: "Bristol",
    age: 30,
    curriculum: function () {
        return `My name is ${this.name}, ${this.age}, and I'm a ${this.profession} from the area of ${this.location}.`
    },
}



let person2 = {
    name: "Pim",
    profession: "actor",
    location: "London",
    age: 45,
    curriculum: function () {
        return `My name is ${this.name}, ${this.age}, and I'm a ${this.profession} from the area of ${this.location}.`
    }
}

let person3 = {
    name: "Mary",
    profession: "professor",
    location: "Oxford",
    age: 32,
    curriculum: function () {
        return `My name is ${this.name}, ${this.age}, and I'm a ${this.profession} from the area of ${this.location}.`
    }
}

document.getElementById("persons").innerHTML += `<p>${person1.curriculum()}</p>`
document.getElementById("persons").innerHTML += `<p>${person2.curriculum()}</p>`
document.getElementById("persons").innerHTML += `<p>${person3.curriculum()}</p>`