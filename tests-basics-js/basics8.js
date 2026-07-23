//Inheritance is the main pillar in object oriented programming (oop)
//one class can inheritance/acquire the properties,Methods of another class
//the class which inheritance the properties of other is known as subclass (derived class, child class)
//the class whose properties are inheritance is known as superclass

const Person = require('./basics7')
class Pet extends Person{
    get location(){
        return "BlueCross"
    }

    constructor(firstName, lastName){
        //call parent class constructor
        super(firstName, lastName)
    }
}

let pet = new Pet("Sam", "San")
pet.fullName()
console.log(pet.location)