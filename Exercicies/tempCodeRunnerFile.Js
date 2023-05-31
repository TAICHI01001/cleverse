const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function push(arr) {
  let num = [8, 2, 0,]
  for (let i = 0; i < arr.length; i++) {
    num.push(i)
  }
  return num
}
console.log(push(arr));