


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

// function filterGtNeg(val, arr) {
//   // our box
//   const results = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < val) {
//       if (true) {
//         if (true) {
//           results.push(arr[i])
//         }
//       }
//     }
//   }

//   return results
// }

// filterGtNeg(-20, [-1, -2, 2, 3, -100]) // [-1, -2]

// ["Mr Prem", "Mister Men", "Ms Prem", "Master Prem"]

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


// =================================================
// TODO 9. prime(n) returns an array of first n prime numbers
// const isPrime = (n) => {
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// const prime = (n) => {
//   const arr = [];
//   let i = 2;
//   while (arr.length < n) {
//     if (isPrime(i)) {
//       arr.push(i);
//     }
//     i = i === 2 ? i + 1 : i + 2;
//   }
//   return arr;
// };

// console.log(prime(6));

//=======================================

// function prime(n) {
//   if (n < 1) {
//     return []
//   }
//   const prime = [2]
//   if (n === 1) return
// }

// TODO 10.Write a function drawDown(chart)drawDown(chart) returns the biggest downward movement within the chart points

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];
// function drawDown(chart) {
//   if (chart.length <= 1) {
//     return 0
//   }

//   let peak = chart[0]
//   let maxDown = 0
//   chart.slice(1).forEach((point) => {
//     if (point > peak) {
//       peak = point
//       return
//     }
//     let down = peak - point
//     if (down > maxDown) {
//       maxDown = down
//     }
//   })
//   return maxDown
// }

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];
//TODO 12.Write a function filterLt(n, arr)filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.

// function filterLt(n, arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }


// const drawDown = function (chart) {
//   let peak = chart[0]
//   let maxDown = 0
//   for (let i = 0; i < chart.length; i++) {
//     const point = chart[i]

//     if (point > peak) {
//       peak = point
//       continue
//     }

//     let down = peak - point
//     if (down > maxDown) {
//       maxDown = down
//     }
//   }
//   return `this maxDown ${maxDown},peak ${peak}`
// }

// const openFunction = drawDown(chart)
// console.log(openFunction);

// [1, 2, "foo", true].forEach(item=>{
//   console.log()
// })

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function mean(number) {
//   let sum = 0;
//   let avg = 0
//   for (let i = 0; i < number.length; i++) {
//     const x = number[i];
//     sum += number[i];
//     avg = sum / number.length
//   }

//   return avg
// }
// const Ans = mean(number)
// console.log(Ans)

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// function mid(array) {
//   if (array.length === 1) return [...array]

//   const _mid = Math.floor(array.length / 2);

//   if (array.length % 2 === 0) {
//     return [array[_mid - 1], array[_mid]];
//   }

//   return [array[_mid]];
// }
// const x = mid(array)
// console.log(x)

// const mid = (arr) => {
//   const minValue = []
//   if (arr.length % 2 !== 0) {
//     minValue.push(arr[(arr.length - 1) / 2])
//   } else {
//     minValue.push(arr[((arr.length / 2) - 1)], arr[(arr.length / 2)])
//   }
//   return minValue
// }
// console.log(mid(["foo", "bar", "baz"])); //bar
// console.log(mid([1, 2, 3, 4,])); //[2,3]


//================================================

// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// function flatMap(arr) {
//   const flattened = []
//   arr.forEach((elem) => flattened.push(...elem))
//   return flattened
// }
// const x = flatMap(arr)
// console.log(x);

//================================================================
// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
// function flatMap(arr) {
//   const flattened = [];

//   function flattenArray(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         flattenArray(array[i]);
//       } else {
//         flattened.push(array[i]);
//       }
//     }
//   }

//   flattenArray(arr);
//   return flattened;
// }
// const x = flatMap(arr)
// console.log(x);

// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
// function mapMean(arr) {
//   const mapped = [];

//   for (let i = 0; i < arr.length; i++) {
//     const meanValue = mean(arr[i]);
//     mapped.push(meanValue);
//   }

//   return mapped;
// }

// function mean(arr) {
//   const sum = arr.reduce((total, num) => total + num, 0);
//   return sum / arr.length;
// }
// const z = mapMean(arr)
// console.log(z)

// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
// function mapMeans(arr) {
//   const means = [] = new Array(arr.length);
//   arr.forEach((elem, i) => (means[i] = mean(elem)))
//   return means
// }
// const c = mapMeans(arr)
// console.log(c);

// array.forEach(function(currentValue, index, arr), thisValue)

// const arr = [1, -4, 2, 0];
// console.log(arr)
// const mapRevertSign = (arr) => {
//   const number = [] = new Array(arr.length);
//   arr.forEach((elem, i) => {
//     number[i] = 0 - elem
//   })
//   return number
// }
// const ans = mapRevertSign(arr)
// console.log(ans);

//=======================

// const arr = [1, -4, 2, 0];
// console.log(arr);

// //=======================
// function mapRevertSign(arr) {
//   let revertedArr = arr.map((num) => -num);
//   return revertedArr;
// }
// const ads = mapRevertSign(arr)
// console.log(ads);

// function toBytes(s) {
//   const bit = []
//   for (let i = 0; i < s.length; i++) {
//     const char = s.charCodeAt(i)
//     if (char > 255) {
//       continue
//     }
//     bit.push(char)
//   }
//   return bit
// }

// toBytes(s)
// console.log(toBytes("Bar"));
// console.log(toBytes("Foo"));
// console.log(toBytes("Foo🔥"));

// function b(s) {
//   const x = []
//   for (let i = 0; i < s.length; i++) {
//     const d = s.charCodeAt(i)
//     if (d >= 0 && d <= 255) {
//       x.push(d)
//     }
//   }
//   return x
// }
// b(s)
// console.log(b("Bar"));

// TODO learn object

// const Human = {
//   head: () => {
//     console.log("Brian")
//   },
//   age: {
//     old: 19,
//     born: 2004,
//   },

// }
// Human.head()
// console.log(Human.age.old);
// console.log(Human.age.born);



// function isMember(men, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === men) {
//       return true
//     }
//   }
//   return false
// }

// console.log(isMember(5, [1, 3, 7, 12]))
// console.log(isMember("john", ["jane", "jim", "john"]))

// function Member(men, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === men) {
//       return true;
//     }
//   }
//   return false
// }
// console.log(Member(5, [1, 3, 7, 12]))
// console.log(Member("john", ["jane", "jim", "john"]))

// function mode(arr) {
//   if (arr.length === 0) {
//     return null;
//   }// Count the occurrences of each element in the array
//   const countMap = {};
//   let maxCount = 0;
//   let modeValue = null;
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     countMap[value] = (countMap[value] || 0) + 1;
//     if (countMap[value] > maxCount) {
//       maxCount = countMap[value];
//       modeValue = value;
//     }
//   }// Check if there is a clear mode or multiple modes
//   const modeOccurrences = Object.values(countMap).filter(count => count === maxCount);
//   if (modeOccurrences.length === 1) {
//     return modeValue;
//   } else {
//     return null;
//   }
// }
// Object.entries("ATGCCGGTTTT".split("").reduce((bucket, char) => ({ ...bucket, [char]: isNaN(bucket[char]) ? 1 : bucket[char] + 1 }), {})).sort(([, freq1], [, freq2]) => freq2 - freq1)[0][0]
// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1])); // 1
// console.log(mode([2, 5, 2, 4, 5])); // null

// function compoundedReturn(amount, interest, n) {
//   const a = amount
//   const b = interest
//   const c = n
//   for (let i = 0; i < c; i++) {
//     a = periodReturn(a, b / 100)
//   }
//   return a
// }
// console.log(
//   compoundedReturn(100, 1, 1)
// );
// console.log(
//   compoundedReturn(100, 10, 1)
// );
// console.log(
//   compoundedReturn(100, 10, 2)
// );

// function compoundedReturn(amount, interest, n) {
//   // Convert interest rate to decimal
//   interest = interest / 100;

//   // Compute compounded return
//   let totalAmount = amount;
//   for (let i = 0; i < n; i++) {
//     totalAmount += totalAmount * interest;
//   }

//   // Round the result to 2 decimal places
//   totalAmount = Math.round(totalAmount * 100) / 100;

//   return totalAmount;
// }

// // Example usage
// console.log(compoundedReturn(100, 1, 1));  // Output: 1157.63
// console.log(compoundedReturn(100, 10, 1));  // Output: 1157.63
// console.log(compoundedReturn(100, 10, 2));  // Output: 1157.63

// function summarize(text, trail, length) {
//   if (length < 3 && text.length > length) {
//     return "";
//   } else if (text.length <= length) {
//     return text;
//   } else {
//     let truncatedText = text.slice(0, length - trail.length - 1); // Subtract 1 for the whitespace
//     let lastSpaceIndex = truncatedText.lastIndexOf(' ');
//     if (lastSpaceIndex === -1) {
//       return "";
//     } else {
//       return truncatedText.slice(0, lastSpaceIndex) + trail;
//     }
//   }
// }

// // Example usage:
// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod gravida enim. Donec vitae eros nec dui aliquam malesuada. Curabitur tempus mi et sem mattis euismod. Duis vestibulum ipsum quis tellus mattis, sit amet pharetra lacus vestibulum. Quisque ultricies enim quis lacus convallis, eu fermentum lacus porttitor. Phasellus sit amet tincidunt massa, eu rhoncus nulla. Suspendisse aliquet ligula eget urna pellentesque consequat.";
// let trail = "...";
// let length = 50;

// let result = summarize(text, trail, length);
// console.log(result);


// function initArr(val, len) {
//   return Array(len).fill(val);
// }

// // Example usage:
// let value = 0;
// let length = 5;

// let result = initArr(value, length);
// console.log(result);


// function initArr(value, length) {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
// let value = 0;
// let length = 5;

// let result = initArr(value, length);
// console.log(result);

// function initArr(value, length) {
//   let arr = []
//   for (i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
// let value = 0;
// let length = 5;

// let result = (initArr(value, length))
// console.log(result);


// function transpose(bits, w, h) {
//   if (bits.length !== w * h) {
//     throw new Error('Invalid input: bits length does not match the specified dimensions.');
//   }

//   const transposed = [];
//   for (let i = 0; i < w; i++) {

//     const row = [];
//     for (let j = 0; j < h; j++) {
//       const index = j * w + i;
//       row.push(bits[index]);
//     }
//     transposed.push(row);
//   }

//   return transposed;
// }
// const bits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const width = 3;
// const height = 4;

// const result = transpose(bits, width, height);
// console.log(result);

// function transpose(bits, width, height) {
//   if (bits.length !== width * height) {
//     throw new Error('Invalid input: bits length does not match the specified dimensions.');
//   }

//   const transposed = []
//   for (let i = 0; i < width; i++) { //width=3 i=0<3
//     const row = []
//     for (let j = 0; j < height; j++) { //create height round 3
//       const index = j * width + i //first index = 0*3+0 second index = 1*3+0 third index=2*3+0
//       row.push(bits[index])
//     }
//     transposed.push(row)
//   }
//   return transposed
// }
// const bits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]
// const width = 3;
// const height = 4;;
// const result = transpose(bits, width, height)
// console.log(result);

//TODO Topic number
// function summarize(text, trail, len) {
//   //trail = "..."
//   if (len < 1) { // 20<1 = false ,len = 15
//     return "";
//   }
//   if (text.length <= len) { //"Hello World!" =12<=15
//     return text; //text = "Hello World!" =15
//   }
//   let summary = text.substring(0, len - trail.length);//15-3=12

//   if (summary[summary.length - 1] === " ") {//summary=12[]
//     summary = summary.substring(0, summary.length - 1);//0,
//   }
//   summary += trail;
//   if (summary.length > len) {
//     summary = summary.substring(0, len);
//   }
//   return summary.trim();
// }
// const articleFoo = "Good morning ladies and gentlemen"
// console.log(summarize(articleFoo, " ...", 25));


// const articleFoo = "Good morning ladies and gentlemen";
// const articleCleverse =
//   "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";

// const summarize = (text, trail, len) => {
//   if (text.length === len) {
//     return text;
//   } else if (len > 3) {
//     let summarizeTxt = [];
//     let wordTokens = text.split(" ");
//     let wordsAcc = 0;

//     for (let i = 0; i < wordTokens.length; i++) {
//       const token = wordTokens[i];
//       if (wordsAcc <= len) {
//         summarizeTxt.push(token);
//         wordsAcc += token.length + 1; // plus white space to token
//         console.log(wordsAcc, len);
//       }
//     }

//     summarizeTxt.pop();

//     return summarizeTxt.join(" ") + trail;
//   } else {
//     return "";
//   }
// };

// console.log(articleCleverse.split(" "));
// console.log(summarize(articleCleverse, " ...", 30));
// console.log(summarize(articleFoo, " ...", 2));
// console.log(summarize(articleFoo, " ...", 10));
// console.log(summarize(articleFoo, " ...", 20));
// console.log(summarize(articleFoo, " ...", 25));

