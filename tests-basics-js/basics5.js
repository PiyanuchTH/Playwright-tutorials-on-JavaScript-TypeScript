const Person = require('./basics7')

let day = "tuesday "
console.log(day.length) //8
let subDay = day.slice(0, 3)
console.log(subDay) // "tue"
console.log(day[1]) // "u"

//tue day
let splitDay = day.split("s")
console.log(splitDay) // ["tue", "day "]
console.log(splitDay[1]) // "day "
console.log(splitDay[1].length) // 4
console.log(splitDay[1].trim().length) // 3

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff) // 4

let newQuote = day + "is funday and sadday"
console.log(newQuote) // "tuesday is funday"

let val = newQuote.indexOf("day", 5)
console.log(val) // 4

//tuesday is funday
let count =0 
let value = newQuote.indexOf("day")
while(value !== -1){
    count++
    value = newQuote.indexOf("day", value + 1) //คำนวณตำแหน่งถัดไปของ "day" หลังจากตำแหน่งปัจจุบัน
}
console.log(count) // 2

let person = new Person("Chris", "Edward")
console.log(person.fullName()) // ChrisEdward