//block of code
//var => global scope/functional
//let => block scope ขอบเขตจำอยู่ใน {} นี้เท่านั้น
//const => block scope and cannot be reassigned

const greet = "Evening"
// greet = "Night"

if(1 == 1){
    let greet = "Afternoon"
}
function add(a, b) {
    var greet = "Morning"
    return a + b;
}

let sum = add(2, 3)
console.log(sum)
console.log(greet)

//dont have name => Anynomous function -- Function expression
let sumOfIntegers = function (c, d) {
    return c + d;
}

let sumOfNumbers = (c, d) => c+d
console.log(sumOfIntegers(2, 3))