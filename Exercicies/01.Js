//TODO 1.1

// function add(a, b) {
//   return a + b;
// }
// 1.1.1 How many parameters add accepts?
//TODO Ans 2 parameters

// 1.1.2 What are the possible return types of add? //TODO Ans is possible String and Number

// 1.1.3 What is the return value of add(1, 2)?
//TODO Ans 3

// 1.1.4 What is the return value of add(1, "2")?
//TODO Ans "12" String

// 1.1.5 What is the return value of add("foo", "bar", "baz")?
//TODO Ans "foobar"

// 1.1.6 What is the return value of add(1, 2, 3)? //TODO Ans 3

// 1.1.7 What is the return value of add(10, add(1, 2, 3))? //TODO Ans 13

//TODO 1.2
// function add(a, b = 10, c = 20) {
//   return a + b + c;
// }
// 1.2.1 How many arguments add accepts?
//TODO Ans 2 arguments

// 1.2.2 What is the return value of add(1, 2)? //TODO Ans 23

// 1.2.3 What is the return value of add(1)?
//TODO Ans 31

// 1.2.4 What is the return value of add(10, add(1, 2, 3))? //TODO Ans 16

//TODO 1.3
// function sum(...numbers) {

// }

// 1.3.1 What is the variable type of numbers in sum's body?  //TODO Ans Array

// 1.3.2 Implement sum with the above function signature.
// TODO Ans  
// const sum = (...numbers) => {
//   return numbers.reduce((total, current) => total + current);
// };
// console.log(sum(10, 20, 30));

//TODO 2.1
// function isNeg(n) {
//   return n < 0;
// }

// 2.1.1 How many ways can we rewrite isNeg as an arrow function? (assuming we keep the expression
// n < 0 unchanged) //TODO Ans const isNeg = (n) =>{return n<0}

// 2.1.2 What is the least verbose way (least characters used) to rewrite isNeg as an arrow function?
// TODO Ans const isNeg = ((n)=>(n < 0))

// Now, if we have this function:

// function assignLegalAge(obj) {
//   obj.age = 18;
// }
// assignLegalAge takes in an object obj and writes property obj.age to 18.

// 2.1.3 How many ways can we rewrite assignLegalAge as an arrow function? (assuming we keep the statement obj.age = 18; unchanged)

// const obj = {
//   age: 18
// }
//TODO Ans const assignLegalAge = (obj) => { obj.age = 18 }

// TODO 2.1.4 What is the least verbose way (least characters used) to rewrite assignLegalAge as an arrow function? TODO

// 2.1.5 What is the difference between assignLegalAge and isNeg that made your 2.1.3 answer differ from 2.1.1?

//TODO 2.2

// 2.2.1 Rewrite the following snippet with arrow function:
// TODO Ans
// const neg = num.filter((n) => (n < 0))

//TODO 2.3
// 2.3.1 What is a method? //TODO Ans It is build-in Function
//
// 2.3.2 Give 3 examples of methods on JavaScript string type
//TODO Ans
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

//TODO Ans
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
//   let data = [8, 2, 0,]
//   for (let i = 0; i < arr.length; i++) {
//     num.push(i)
//   }
//   return num
// }
// console.log(push(arr));

// for example 3
// const arr1 = [5, 8, 7, 9, 6, 1, 3, 4, 0, 5, 7, 4, 3]
// const arr2 = "Hello World!"
// const arr3 = arr2.split('')
// let newArr1 = (arr1.concat(arr3))
// let newArr2 = newArr1.sort()
// console.log(newArr2);

//TODO 2.4
// 2.4.1 What is the return value of a callback function passed into Array.filter method?

// 2.4.2 What is the return type of the Array.filter method? //TODO Ans type of true and false

// 2.4.3 We can see that the callback passed into number.map and number.filter is identical: a named function cb.

// Replace cb with anonymous function that would make variables isNeg become [true, true, false, false, false], and neg [-2, -1].
//TODO Ans
// const numbers = [-2, -1, 0, 1, 2];

// const isNeg = numbers.map((n) => {
//   if (n < 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(isNeg);

// const neg = numbers.filter((n) => {
//   if (n < 0) {
//     return n
//   }
// });
// console.log(neg);

// TODO 2.5

// 2.5.1 Implement cb as an anonymous arrow function such that result is [1, 3, 5].
// TODO Ans
// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.map((n) => {
//   return n / 10
// })
// const Answer = result.filter((n) => (n % 2 === 1))
// console.log(Answer);