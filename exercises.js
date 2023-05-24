// TODO: ex. 1 draw(n)
// const draw = (n) => {
//   let line = ""
//   for (let i = 0; i < n; i++) {
//     line += "*"
//     // console.log(line)
//   }
//   for (let i = 0; i < n; i++) {
//     console.log(line)
//   }
// }
// draw(5)

// TODO: ex. 2 Re-write draw(n)
// const draw2 = (n) => {
//   for (let i = 0; i < n; i++) {
//     line = "";
//     for (let j = 0; j <= i; j++) {
//       line += "*";
//     }
//     console.log(line);
//   }
// }
// draw2(5)

// const star = (n) => {
//   let lang = ""
//   for (let i = 0; i < n; i++) {
//     lang += "*"
//   }
//   let text = ""
//   for (let x of lang) {
//     text += x
//     console.log(text)
//   }
// }
// star(5)

// const arr = [1, 2, 3, 4, 5]
// const filterGt = (val, arr) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > val) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// filterGt(0, [1, 2, 3, 4, 5])

// TODO: ex. 3 Write a function maxNegMinPos(arr)
// function maxNegMinPos(arr) {
//   let max = -Infinity
//   let min = Infinity
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max && arr[i] < 0) {
//       max = arr[i]
//     } else if (arr[i] < min && arr[i] > 0) {
//       min = arr[i]
//     }
//   }
//   console.log("Max Negative Value:", max);
//   console.log("Min Positive Value:", min);
// }
// const arr = [12, -13, 14, 4, 2, -1, -18];
// maxNegMinPos(arr)

// TODO: ex.4 Write a function fib(n) that prints nth sequence of fibonacci series.
// 1, 2, 3, 5, 8, 13, 21, ...
// const fib = (n) => {
//   let num1 = 0;
//   let num2 = 1;

//   let nextNum = num1 + num2;
//   let i = 1;

//   while (i < n) {
//     num1 = num2;
//     num2 = nextNum;
//     nextNum = num1 + num2;
//     i++;
//   }

//   console.log(nextNum);
// };

// fib(5);

// TODO: ex.5 Write a function mutual(arr1, arr2)
// const mutual = (arr1, arr2) => {
//   let mutualEle = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         mutualEle.push(arr1[i]);
//       }
//     }
//   }
//   return mutualEle;
// };

// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// console.log(mutual(class1, class2));

// ======================================

// TODO: ex.6 Write a function mutual(arr1, arr2)
// function mutual(arr1, arr2) {
//   let result = []
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j])
//         result.push(arr1[i])
//     }
//   }
//   return ("result:", result)
// }
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
// mutual(class1, class2)


// TODO: ex.7 Write a fizzBuzz(n) function
// function fizzBuzz(n) {
//   for (let i = 0; i < n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//       console.log("Fizz")
//     } else if (i % 5 === 0) {
//       console.log("Buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }
// fizzBuzz(20)

// TODO: ex.8 Try learning Array.sort method (function) with this snippet:

// function TrySort() {
//   const arr = [3, 2, 1, 12, 13, 11];
//   arr.sort()

//   console.log(arr)
//   arr.sort((a, b) => a - b)
//   console.log(arr)

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
//   console.log(arr);
// }
// TrySort([3, 2, 1, 12, 13, 11]) 


