function sumAll(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  for (let i = start; i < end - 1; i += 1) {
    arr.push(i + 1);
  }
  return arr.reduce((prev, curr) => prev + curr);
}

console.log(sumAll([1, 4]));

