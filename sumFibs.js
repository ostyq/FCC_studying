function sumFibs(num) {
  const sequence = [1];

  for (let i = 1; i <= num; ) {
    sequence.push(i);
    i = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }

  return sequence.filter(el => el % 2 != 0).reduce((el, acc) => el + acc);
}

console.log(sumFibs(75024));
