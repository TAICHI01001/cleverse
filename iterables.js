// const arr = ["L", "B", "P"]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i)
// }

// arr.forEach(function (city, idx, arr) {
//   console.log(city, idx, arr[idx + 1])
// });


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// a.forEach((b, c) => {
//   console.log(b, c)
// })

// const b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// b.forEach((v, i) => {
//   if (i % 2 === 0) {
//     console.log(v)
//   }
// })
// Use Array .forEach to print
// all words starting with "Mr"
// including the indices of the
// words in the array

// ["B", "C", "Mr"].forEach((v, i) => {
//   if (v.startsWith("Mr")) {
//     console.log(v, i);
//   }
// })
// const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => {
//   return v % 2 == 0
// })
// console.log(c)

// const d = ["B", "C", "Mr"].map((v) => {
//   return v.startsWith("Mr")
// })
// console.table(d);

// const map = ["B", "C", "Mr"].map((s) => {
//   return s.length
// })
// console.table(map);

// const map = ["B", "C", "Mr"].filter((s) => {
//   return s.length
// })
// console.table(map);

// const d = ["B", "C", "Mr"].filter((v) => {
//   return v.startsWith("Mr")
// })
// console.table(d);

// console.table({ name: 'John', age: 30, city: 'New York' });

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((n) => {
//   return n % 3 === 0 || n % 13 === 0
// })
// console.table(number)

// const result = [1, 2, 3, 4, 5, 6, 7, 8, 9].some((n) => n < 100)
// console.log(result);
// const Ans = [1, 2, 3, 4, 5, 6, 7, 8, 9].every((n) => n > 100)
// console.log(Ans);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// function map(arr, cb) {
//   const mapped = new Array(arr.length)
//   arr.forEach((item, i) => {
//     mapped[i] = cb(item)
//   })
//   return mapped
// }

// const res = [10, 20, 30, 40, 50].every((n) => n < 100)
// console.table(res);


// const res = [10, 20, 30, 40, 50].every((n) => n < 100)
// console.table(res);

// const num = (n => n % 2 === 0)


// function map2(input, cb) {
//   const mapped = new Array(input.length)
//   for (let i = 0; i < input.length; i++) {
//     mapped[i] = cb(input)
//   }
//   return mapped
// }

// const ans = [10, 11, 20, 21, 30, 31].reduce((acc, v, idx) => {
  // 10+11=21 idx =0 next 21+20=41 idx =1 
  // next 41+21=62 idx=2 next 62+30=92 idx=3 
  // next 92+31=123 idx=4
//   return acc + v
// })
// console.log(ans)


// const res = [10, 11, 20, 21, 30, 31].reduce((acc, v, idx) => {
//   if (v % 10 === 0) {
//     return acc + v
//   }
//   return acc
// })
// console.log(res)





// const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const NewNumber = number.map(func)

// const func = (real) => {
//   return real * 2;
// }
// console.log(NewNumber)

