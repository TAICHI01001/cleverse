const numbers = [10, 20, 30, 40, 50];
const result = numbers.map((n) => (n / 10))
const Answer = result.filter((n) => (n % 2 === 1))
console.log(Answer);