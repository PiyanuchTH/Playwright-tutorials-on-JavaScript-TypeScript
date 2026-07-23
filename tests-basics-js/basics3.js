//Array
var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)

var marks =[20, 40, 35, 12, 37, 100]
subMarks = marks.slice(2,5) 
console.log(subMarks) //[35, 12, 37]

console.log(marks[2]); //35
marks[3] = 14
console.log(marks) //[20, 40, 35, 14, 37, 100]
console.log(marks.length) //6

marks.push(65) //add data
console.log(marks) //[20, 40, 35, 14, 37, 100, 65]
marks.pop() //delete last data [20, 40, 35, 14, 37, 100]
marks.unshift(12) //add data at the beginning [12, 20, 40, 35, 14, 37, 100]
console.log(marks) //[12, 20, 40, 35, 14, 37, 100]
console.log(marks.indexOf(100)) //6
//120 in the array
console.log(marks.includes(120)) //false

var sum = 0
for(let i=0;i<marks.length;i++){
    // console.log(marks[i]);
    sum =sum + marks[i]
}
console.log(sum)

//reduce filter map
let total =marks.reduce((sum, mark) => sum+mark, 0)
console.log(total) //258
var scores = [12, 13, 14, 16]
//create new array with even numbers of scores and multiply each value with 3 and sum them array [12, 14, 16]
var evenScores = []
for(let i=0;i<scores.length;i++){
    if(scores[i] %2 ==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

let newFilterEvenSocres = scores.filter(score => score %2 == 0)
console.log(newFilterEvenSocres) //[12, 14, 16] => [36, 42, 48]

//map from 1 value to new value
let mappedArray = newFilterEvenSocres.map(score => score * 3)
console.log(mappedArray) //[36, 42, 48]
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0) //126
console.log(totalVal) //ส่วนนี้คือการรวมค่าของ mappedArray

var scores1 = [12, 13, 14, 16]
let sumValue = scores1.filter(score => score %2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0) //126
console.log(sumValue)

let friuts = ["banana","mango", "pomegrante", "apple"]
console.log(friuts.sort()) //เรียงตามตัวอักษร
console.log(friuts.reverse()) //เรียงจากหลังมาหน้า
// console.log(friuts) //["apple", "banana", "mango", "pomegrante"]

var scores1 = [12, 003, 19, 16, 14] 
// console.log(scores1.sort()) //[ 12, 14, 16, 19, 3 ]
// scores1.sort(function(a, b) {
//     return a - b;
// });
// console.log(scores1) //[ 3, 12, 14, 16, 19 ]
console.log(scores1.sort((a, b) => a - b)) //[ 3, 12, 14, 16, 19 ]
