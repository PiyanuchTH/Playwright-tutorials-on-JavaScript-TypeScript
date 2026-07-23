module.exports = class Person
{
    age = 25
    //location = "Canada"
    get location() //property getter method
    {
        return "Canada"
    }

    //construct is method which executes by defualt when create object of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    //methods
    fullName()
    {
        console.log(this.firstName + this.lastName)
    }
}

// let person = new Person("Tim", "Joseph")
// let person1 = new Person("Chris", "Jones")
// console.log(new Person().age)
// console.log(new Person().location)
// console.log(person.fullName())
// console.log(person1.fullName())
