//TODO 1.1

// function add(a, b) {
//   return a + b;
// }
// 1.1.1 How many parameters add accepts? Ans 2 parameters

// 1.1.2 What are the possible return types of add? Ans is possible String and Number

// 1.1.3 What is the return value of add(1, 2)? Ans 3

// 1.1.4 What is the return value of add(1, "2")? Ans "12" String

// 1.1.5 What is the return value of add("foo", "bar", "baz")? Ans "foobar"

// 1.1.6 What is the return value of add(1, 2, 3)? Ans 3

// 1.1.7 What is the return value of add(10, add(1, 2, 3))? Ans 13

//TODO 1.2
// function add(a, b = 10, c = 20) {
//   return a + b + c;
// }
// 1.2.1 How many arguments add accepts? Ans 2 arguments

// 1.2.2 What is the return value of add(1, 2)? Ans 23

// 1.2.3 What is the return value of add(1)? Ans 31

// 1.2.4 What is the return value of add(10, add(1, 2, 3))? Ans 16

//TODO 1.3
// function sum(...numbers) {

// }

// 1.3.1 What is the variable type of numbers in sum's body?  Ans Array

// 1.3.2 Implement sum with the above function signature. Ans  let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
// return sum
// console.log(sum(10,20,30));

//TODO 2.1
function isNeg(n) {
  return n < 0;
}

// 2.1.1 How many ways can we rewrite isNeg as an arrow function? (assuming we keep the expression 
// n < 0 unchanged) Ans const isNeg = (n) =>{return n<0}

// TODO 2.1.2 What is the least verbose way (least characters used) to rewrite isNeg as an arrow function? 

// Now, if we have this function:

function assignLegalAge(obj) {
  obj.age = 18;
}
// assignLegalAge takes in an object obj and writes property obj.age to 18.

// 2.1.3 How many ways can we rewrite assignLegalAge as an arrow function? (assuming we keep the statement obj.age = 18; unchanged)

// const obj = {
//   age: 18
// }
// Ans const assignLegalAge = (obj) => { obj.age = 18 }

// TODO 2.1.4 What is the least verbose way (least characters used) to rewrite assignLegalAge as an arrow function? TODO

// 2.1.5 What is the difference between assignLegalAge and isNeg that made your 2.1.3 answer differ from 2.1.1? Ans

//TODO 2.2
// 2.2.1 Rewrite the following snippet with arrow function:

//TODO 2.3
// 2.3.1 What is a method? Ans It is build-in Function
//
// 2.3.2 Give 3 examples of methods on JavaScript string type
// for example 1
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let length = text.length
// console.log(length);

// for example 2
// let str = "Hello World!"
// let sliced = str.slice(0, 13)
// console.log(sliced);

// for example 3
// let newStr = "Hello World!"
// let splitted = newStr.split('')
// console.log(splitted);

// 2.3.3 Give 3 examples of methods on JavaScript Array type

// for example 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let sum = 0
// let mean = 0
// let count = 0
// for (let i = count; i < arr.length; i++) {
//   sum += arr[i]
//   mean = sum / i
// }
// console.log(sum);
// console.log(mean);

// for example 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function push(arr) {
//   let num = [8, 2, 0,]
//   for (let i = 0; i < arr.length; i++) {
//     num.push(i)
//   }
//   return num
// }
// console.log(push(arr));

// for example 3
const obj = {
  name: "TaiChi",
  weight: 57,
  height: 165 + "cm",
  age: 18,
  gender: "male",
}
function pop(obj) {
  newObj = {
  }
  for (let i = 0; i < obj.length; i++) {
    newObj.pop(i)
  }
  return newObj
}
console.log(pop(obj));