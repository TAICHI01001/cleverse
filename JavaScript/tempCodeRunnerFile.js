function transpose(bits, w, h) {
  if (bits.length !== w * h) {
    throw new Error('Invalid input: bits length does not match the specified dimensions.');
  }

  const transposed = [];
  for (let i = 0; i < w; i++) {

    const row = [];
    for (let j = 0; j < h; j++) {
      const index = j * w + i;
      row.push(bits[index]);
    }
    transposed.push(row);
  }

  return transposed;
}
const bits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const width = 3;
const height = 4;

const result = transpose(bits, width, height);
console.log(result);