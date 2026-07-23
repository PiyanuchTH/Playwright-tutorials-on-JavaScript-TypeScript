console.log("Hello, World!");

let a=4
console.log(a);
console.log(typeof(a));

let b=234.5
console.log(b);
console.log(typeof(b));

// let c="Hello"
var c="Hello"
console.log(c);
console.log(typeof(c));

let required = true
console.log(required);
console.log(typeof(required));
//null and undefined

//let c = a+b (it did not work)
//var c = a+b (it works because var allows redeclaration)
c = a+b //reassigning is allowed with let
console.log(c);
console.log(typeof(c));
//เราไม่สามารถประกาศตัวแปรซ้ำด้วยคีย์เวิร์ด `let` ได้ แต่สามารถทำได้ถ้าใช้คีย์เวิร์ด `var`
console.log(!required);
